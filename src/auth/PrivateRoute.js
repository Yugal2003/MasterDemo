// // src/components/routes/PrivateRoute.js
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../auth/AuthProvider";

// const PrivateRoute = ({ allowedRoles }) => {
//     const { user } = useAuth();

//     if (!user) {
//         return <Navigate to="/" replace />;
//     }

//     return allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to="/" replace />;
// };

// export default PrivateRoute;



// src/components/routes/PrivateRoute.js
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../auth/AuthProvider";

// const PrivateRoute = ({ allowedRoles }) => {
//     const { user } = useAuth();

//     if (!user) {
//         // Redirect to login if not authenticated
//         return <Navigate to="/" replace />;
//     }

//     return allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to="/not-authorized" replace />;
// };

// export default PrivateRoute;
