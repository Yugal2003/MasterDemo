// import React, { createContext, useState, useContext } from 'react';

// // Create the AuthContext
// const AuthContext = createContext();

// // AuthProvider component to wrap around your app
// export const AuthProvider = ({ children }) => {
//   // State to track if the user is authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Function to log in (you can integrate real authentication logic here)
//   const login = () => {
//     setIsAuthenticated(true); // Set to true when login is successful
//   };

//   // Function to log out
//   const logout = () => {
//     setIsAuthenticated(false); // Set to false on logout
//   };

//   // Provide the authentication state and functions to the entire app
//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext in other components
// export const useAuth = () => useContext(AuthContext);