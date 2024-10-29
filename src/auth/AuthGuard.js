// after authguard code

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthGuard = ({ children, allowedRoles }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthGuard;