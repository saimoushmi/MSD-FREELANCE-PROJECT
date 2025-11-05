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
    setUser(profile);
    localStorage.setItem('freelanceconnect_user', JSON.stringify(profile));
    localStorage.setItem('freelanceconnect_email', email);
    localStorage.setItem('freelanceconnect_password', password);
  };

  const loginWithCredentials = (email: string, password: string): boolean => {
    const savedUser = localStorage.getItem('freelanceconnect_user');
    const savedEmail = localStorage.getItem('freelanceconnect_email');
    const savedPassword = localStorage.getItem('freelanceconnect_password');
    
    if (savedUser && savedPassword && savedEmail) {
      if (savedEmail === email && savedPassword === password) {
        const userProfile = JSON.parse(savedUser);
        setUser(userProfile);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('freelanceconnect_user');
    localStorage.removeItem('freelanceconnect_email');
    localStorage.removeItem('freelanceconnect_password');
  };

  const updateProfile = (profile: UserProfile) => {
    setUser(profile);
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
