import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/UserAuth/SignUp';
import Login from './components/UserAuth/Login';
import AdminDashbaord from './components/pages/AdminDashboard'
import HodDashboard from './components/pages/HodDashboard'
import StudentDashboard from './components/pages/StudentDashboard'
import ForgetPassword from './components/pages/ForgetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/forgot-password' element={<ForgetPassword/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/admin-dashboard/:adminId" element={<AdminDashbaord/>} />
              <Route path="/hod-dashboard/:hodId" element={<HodDashboard />} />
              <Route path="/student-dashboard/:studentId" element={<StudentDashboard />} />
        </Routes>
    </BrowserRouter>
    <Toaster/>
  </>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AuthProvider } from '../src/auth/AuthProvider';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthProvider>
//     <BrowserRouter>
//       <App />
//       <Toaster />
//     </BrowserRouter>
//   </AuthProvider>
// );











// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Login from './components/UserAuth/Login';
// import Signup from './components/UserAuth/SignUp';
// import AdminDashboard from './components/pages/AdminDashboard';
// import HodDashboard from './components/pages/HodDashboard';
// import StudentDashboard from './components/pages/StudentDashboard';
// import ForgetPassword from './components/pages/ForgetPassword';
// import PrivateRoute from '../src/auth/PrivateRoute';
// import NotAuthorized from '../src/auth/NotAuthorized';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/forgot-password" element={<ForgetPassword />} />
                
//                 {/* Protected routes */}
//                 <Route element={<PrivateRoute allowedRoles={['admin']} />}>
//                     <Route path="/admin-dashboard/:adminId" element={<AdminDashboard />} />
//                 </Route>
//                 <Route element={<PrivateRoute allowedRoles={['hod']} />}>
//                     <Route path="/hod-dashboard/:hodId" element={<HodDashboard />} />
//                 </Route>
//                 <Route element={<PrivateRoute allowedRoles={['student']} />}>
//                     <Route path="/student-dashboard/:studentId" element={<StudentDashboard />} />
//                 </Route>

//                 {/* Not Authorized page */}
//                 <Route path="/not-authorized" element={<NotAuthorized />} />
//             </Routes>
//         </BrowserRouter>
//         <Toaster />
//     </>
// );











// after add an authguard in index.js file code

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { Toaster } from 'react-hot-toast';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signup from './components/UserAuth/SignUp';
// import Login from './components/UserAuth/Login';
// import AdminDashboard from './components/pages/AdminDashboard';
// import HodDashboard from './components/pages/HodDashboard';
// import StudentDashboard from './components/pages/StudentDashboard';
// import AuthGuard from './auth/AuthGuard'; // Import your AuthGuard
// import { AuthProvider } from './auth/AuthContext'; // Import your AuthProvider

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Protected Routes */}
//         <Route
//           path="/admin-dashboard/:adminId"
//           element={
//             <AuthGuard>
//               <AdminDashboard />
//             </AuthGuard>
//           }
//         />
//         <Route
//           path="/hod-dashboard/:hodId"
//           element={
//             <AuthGuard>
//               <HodDashboard />
//             </AuthGuard>
//           }
//         />
//         <Route
//           path="/student-dashboard/:studentId"
//           element={
//             <AuthGuard>
//               <StudentDashboard />
//             </AuthGuard>
//           }
//         />
//       </Routes>
//       <Toaster />
//     </BrowserRouter>
//   </AuthProvider>
// );