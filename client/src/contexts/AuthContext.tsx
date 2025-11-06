import { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'freelancer' | 'client';

export interface FreelancerProfile {
  role: 'freelancer';
  fullName: string;
  email: string;
  title: string;
  bio: string;
  skills: string[];
  hourlyRate: number;
  location: string;
  experience: string;
  portfolio: string;
  availability: string;
}

export interface ClientProfile {
  role: 'client';
  fullName: string;
  email: string;
  companyName: string;
  industry: string;
  location: string;
  bio: string;
  website: string;
}

export type UserProfile = FreelancerProfile | ClientProfile;

interface AuthContextType {
  user: UserProfile | null;
  login: (profile: UserProfile, email: string, password: string) => void;
  loginWithCredentials: (email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (profile: UserProfile) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('freelanceconnect_user');
    if (savedUser) {
      try {
        const userProfile = JSON.parse(savedUser);
        setUser(userProfile);
      } catch (error) {
        console.error('Failed to parse user data', error);
        localStorage.removeItem('freelanceconnect_user');
        localStorage.removeItem('freelanceconnect_email');
        localStorage.removeItem('freelanceconnect_password');
      }
    }
  }, []);

  const login = (profile: UserProfile, email: string, password: string) => {
    // Generate a unique key for this user
    const userKey = `freelanceconnect_user_${email.toLowerCase()}`;
    const passwordKey = `freelanceconnect_password_${email.toLowerCase()}`;
    
    // Save user profile with email as part of the key
    setUser(profile);
    localStorage.setItem(userKey, JSON.stringify(profile));
    
    // Store password (in a real app, this should be a hashed password)
    localStorage.setItem(passwordKey, password);
    
    // For backward compatibility, also save the current user in the old format
    localStorage.setItem('freelanceconnect_user', JSON.stringify(profile));
    localStorage.setItem('freelanceconnect_email', email);
  };

  const loginWithCredentials = (email: string, password: string): boolean => {
    try {
      console.log('Attempting login with:', { email });
      
      // Get all keys from localStorage that match our pattern
      const allKeys = Object.keys(localStorage);
      const userKeys = allKeys.filter(key => key.startsWith('freelanceconnect_user_'));
      
      // Try to find a user with matching email (case-insensitive)
      for (const userKey of userKeys) {
        try {
          const userData = localStorage.getItem(userKey);
          if (!userData) continue;
          
          const userProfile = JSON.parse(userData);
          const userEmail = userProfile.email;
          
          if (userEmail && userEmail.trim().toLowerCase() === email.trim().toLowerCase()) {
            // Found a user with matching email
            const passwordKey = `freelanceconnect_password_${userEmail.toLowerCase()}`;
            const savedPassword = localStorage.getItem(passwordKey);
            
            if (savedPassword === password) {
              // Password matches - login successful
              console.log('Login successful, user profile:', userProfile);
              setUser(userProfile);
              return true;
            } else {
              console.error('Password does not match for email:', email);
              return false;
            }
          }
        } catch (error) {
          console.error('Error processing user data:', error);
          // Continue checking other users if there's an error with this one
          continue;
        }
      }
      
      console.error('No user found with email:', email);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    if (user && user.email) {
      // Remove the specific user's data
      const userKey = `freelanceconnect_user_${user.email.toLowerCase()}`;
      const passwordKey = `freelanceconnect_password_${user.email.toLowerCase()}`;
      
      localStorage.removeItem(userKey);
      localStorage.removeItem(passwordKey);
    }
    
    // Also clean up the old format data
    localStorage.removeItem('freelanceconnect_user');
    localStorage.removeItem('freelanceconnect_email');
    
    // Remove all password entries (for backward compatibility)
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('freelanceconnect_password')) {
        localStorage.removeItem(key);
      }
    });
    
    setUser(null);
  };

  const updateProfile = (profile: UserProfile) => {
    setUser(profile);
    
    // Update the user data in localStorage
    if (profile.email) {
      const userKey = `freelanceconnect_user_${profile.email.toLowerCase()}`;
      localStorage.setItem(userKey, JSON.stringify(profile));
    }
    
    // Also update the old format for backward compatibility
    localStorage.setItem('freelanceconnect_user', JSON.stringify(profile));
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithCredentials, logout, updateProfile, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
