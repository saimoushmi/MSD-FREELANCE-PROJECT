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
  login: (profile: UserProfile) => void;
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
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('freelanceconnect_user', JSON.stringify(profile));
  };

  const loginWithCredentials = (email: string, password: string): boolean => {
    const savedUser = localStorage.getItem('freelanceconnect_user');
    const savedPassword = localStorage.getItem('freelanceconnect_password');
    
    if (savedUser && savedPassword) {
      const userProfile = JSON.parse(savedUser);
      if (userProfile.email === email && savedPassword === password) {
        setUser(userProfile);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('freelanceconnect_user');
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
