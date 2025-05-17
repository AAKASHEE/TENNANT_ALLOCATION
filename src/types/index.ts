export interface Teammate {
  id: string;
  name: string;
  photo: string;
  age: number;
  gender: string;
  course: string;
  year: string;
  housingPreference: string[];
  traits: string[];
  bio: string;
  contact: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isProfileComplete: boolean;
}

export interface UserProfile extends Teammate {
  email: string;
  password?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  error: string | null;
}

export interface FilterOptions {
  housingPreference: string[];
  traits: string[];
  gender: string[];
  year: string[];
}

export interface ActiveFilters {
  housingPreference: string[];
  traits: string[];
  gender: string[];
  year: string[];
}