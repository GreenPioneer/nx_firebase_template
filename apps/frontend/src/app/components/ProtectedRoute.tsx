import React, { ReactNode, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = AuthCheck();
    return () => unsubscribe();
  }, []);

  const AuthCheck = () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        navigate('/home');
      }
    });
  };

  if (loading) return <p>...loading</p>

  return (
    <div className="relative flex min-h-full justify-center md:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-3 shadow-xl sm:justify-center md:flex-none md:px-0 md:w-full">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </div>
      </div>
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          alt="blue background"
        />
      </div>
    </div>
  )
};

export default ProtectedRoute;







