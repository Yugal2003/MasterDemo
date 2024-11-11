// after authguard code

// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const AuthGuard = ({ children, allowedRoles,allowWhenLoggedOut }) => {
//   const { isAuthenticated, role } = useAuth();

//   if(!isAuthenticated && allowWhenLoggedOut){
//     return children;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default AuthGuard;














// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const AuthGuard = ({ children, allowedRoles }) => {
//   const { isAuthenticated, role, canAccessForgetPassword } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/" />;
//   }

//   // Restrict access to Forget Password page
//   if (children.type.name === 'ForgetPassword' && !canAccessForgetPassword) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default AuthGuard;


// authguard.js
// after authguard code

// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const AuthGuard = ({ children, allowedRoles }) => {
//   const { isAuthenticated, role } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default AuthGuard;


import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthGuard = ({ allowedRoles, children, blockIfAuthenticated, path }) => {
    const { user } = useAuth(); // Access the user from context

    // Block the "Forgot Password" page if the user is authenticated and trying to access it directly
    if (blockIfAuthenticated && user && path === '/forgot-password') {
        return <Navigate to="/" replace />; // Redirect to home if the user is already authenticated
    }

    // If the user is not authenticated and trying to access a page that requires authentication
    if (!user && allowedRoles) {
        return <Navigate to="/login" replace />;
    }

    // Render the children if the route is allowed
    return children;
};

export default AuthGuard;