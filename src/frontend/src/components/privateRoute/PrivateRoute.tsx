import React, { useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!currentUser && location.pathname === "/tours") {
      navigate(-1);
    }
  }, [currentUser, navigate, location.pathname]);

  if (!currentUser && location.pathname === "/tours") {
    return <Navigate to="/home" replace />;
  }

  if (currentUser) {
    return <>{children}</>;
  }

  return null;
};

export default PrivateRoute;
