import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { getAuth, User } from 'firebase/auth';

// Define the context interface
interface UserContextType {
  user: User | null;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the UserProvider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
