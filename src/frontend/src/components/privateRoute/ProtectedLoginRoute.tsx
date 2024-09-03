import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const ProtectedLoginRoute: React.FC = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/home" /> : <Outlet />;
};

export default ProtectedLoginRoute;
