
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

export const About: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <p>True</p>
          {user && (
            <ul>
              {Object.entries(user).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value && value.toString()}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p>False</p>
      )}
    </div>
  );
};