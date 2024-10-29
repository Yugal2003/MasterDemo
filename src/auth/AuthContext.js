// after authguard code

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (userData) => setUser(userData);

  const logout = () => setUser(null);

  const isAuthenticated = !!user;
  const role = user?.role;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);