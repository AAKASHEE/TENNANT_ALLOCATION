/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'roommate-finder-users';
const CURRENT_USER_KEY = 'roommate-finder-current-user';

interface AuthProviderProps {
  children: ReactNode;
}

// Utility to simulate delay (like API call)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type StoredUser = User & { password: string }; // extends user to hold password locally

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user:', e);
      }
    }
    setIsLoading(false);
  }, []);

  const getUsers = (): Record<string, StoredUser> => {
    const usersJSON = localStorage.getItem(USERS_STORAGE_KEY);
    try {
      return usersJSON ? JSON.parse(usersJSON) : {};
    } catch (e) {
      console.error('Failed to parse users:', e);
      return {};
    }
  };

  const saveUsers = (users: Record<string, StoredUser>) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await delay(800);
      const users = getUsers();
      const foundUser = Object.values(users).find(
        u => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error('Invalid email or password');
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...publicUser } = foundUser;
      setUser(publicUser);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(publicUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await delay(800);
      const users = getUsers();

      if (Object.values(users).some(u => u.email === email)) {
        throw new Error('User already exists');
      }

      const newUser: StoredUser = {
        id: crypto.randomUUID(),
        email,
        name,
        isProfileComplete: false,
        password,
      };

      users[newUser.id] = newUser;
      saveUsers(users);

      const { password: _, ...publicUser } = newUser;
      setUser(publicUser);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(publicUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signUp,
    signOut,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
