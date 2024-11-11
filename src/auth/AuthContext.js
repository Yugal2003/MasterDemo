// after authguard code

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); 

//   const login = (userData) => setUser(userData);

//   const logout = () => setUser(null);

//   const isAuthenticated = !!user;
//   const role = user?.role;

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);





import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [canAccessForgetPassword, setCanAccessForgetPassword] = useState(false); // New state

  const login = (userData) => {
    setUser(userData);
    setCanAccessForgetPassword(false); // Reset on login
  };

  const logout = () => {
    setUser(null);
    setCanAccessForgetPassword(false); // Reset on logout
  };

  const allowForgetPasswordAccess = () => setCanAccessForgetPassword(true); // Method to allow access

  const isAuthenticated = !!user;
  const role = user?.role;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout, canAccessForgetPassword, allowForgetPasswordAccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);