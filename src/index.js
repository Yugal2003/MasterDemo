// current code

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { Toaster } from 'react-hot-toast';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signup from './components/UserAuth/SignUp';
// import Login from './components/UserAuth/Login';
// import AdminDashbaord from './components/pages/AdminDashboard'
// import HodDashboard from './components/pages/HodDashboard'
// import StudentDashboard from './components/pages/StudentDashboard'
// import ForgetPassword from './components/pages/ForgetPassword';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <BrowserRouter>
//         <Routes>
//               <Route path='/' element={<Login/>} />
//               <Route path='/forgot-password' element={<ForgetPassword/>} />
//               <Route path="/signup" element={<Signup/>} />
//               <Route path="/admin-dashboard/:adminId" element={<AdminDashbaord/>} />
//               <Route path="/hod-dashboard/:hodId" element={<HodDashboard />} />
//               <Route path="/student-dashboard/:studentId" element={<StudentDashboard />} />
//         </Routes>
//     </BrowserRouter>
//     <Toaster/>
//   </>
// );




// after authguard code

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { Toaster } from 'react-hot-toast';
// import { AuthProvider } from '../src/auth/AuthContext';
// import  AuthGuard  from '../src/auth/AuthGuard'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Signup from './components/UserAuth/SignUp';
// import Login from './components/UserAuth/Login';
// import AdminDashboard from './components/pages/AdminDashboard'
// import HodDashboard from './components/pages/HodDashboard'
// import StudentDashboard from './components/pages/StudentDashboard'
// import ForgetPassword from './components/pages/ForgetPassword';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgetPassword />} />
//         <Route path="/signup" element={<Signup />} />
        
//         <Route 
//           path="/admin-dashboard/:adminId" 
//           element={
//             <AuthGuard allowedRoles={['admin']}>
//               <AdminDashboard />
//             </AuthGuard>
//           } 
//         />
        
//         <Route 
//           path="/hod-dashboard/:hodId" 
//           element={
//             <AuthGuard allowedRoles={['hod']}>
//               <HodDashboard />
//             </AuthGuard>
//           } 
//         />
        
//         <Route 
//           path="/student-dashboard/:studentId" 
//           element={
//             <AuthGuard allowedRoles={['student']}>
//               <StudentDashboard />
//             </AuthGuard>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//     <Toaster/>
//   </AuthProvider>
// );


// after authguard code and admin route run perfectly


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { Toaster } from 'react-hot-toast';
// import { AuthProvider } from '../src/auth/AuthContext';
// import AuthGuard from '../src/auth/AuthGuard';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Signup from './components/UserAuth/SignUp';
// import Login from './components/UserAuth/Login';
// import AdminDashboard from './components/pages/AdminDashboard';
// import HodDashboard from './components/pages/HodDashboard';
// import StudentDashboard from './components/pages/StudentDashboard';
// import ForgetPassword from './components/pages/ForgetPassword';
// import DashboardAdmin from '../src/components/AdminComponents/DashboardAdmin'
// import MyProfileAdmin from './components/AdminComponents/MyProfileAdmin';
// import ManageStudentAdmin from './components/AdminComponents/ManageStudentAdmin';
// import ManageHodAdmin from './components/AdminComponents/ManageHodAdmin';
// import ViewLeaveReportAdmin from './components/AdminComponents/ViewLeaveReportAdmin';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgetPassword />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Admin Dashboard Routes */}
//         <Route path="/admin-dashboard/:adminId" element={
//           <AuthGuard allowedRoles={['admin']}>
//             <AdminDashboard />
//           </AuthGuard>
//         }>
//           {/* Nested Routes */}
//           <Route index element={<DashboardAdmin />} />  {/* Default Dashboard */}
//           <Route path="myprofile" element={<MyProfileAdmin />} />
//           <Route path="studentManage" element={<ManageStudentAdmin />} />
//           <Route path="HODManage" element={<ManageHodAdmin />} />
//           <Route path="viewLeaveReport" element={<ViewLeaveReportAdmin />} />
//         </Route>
        
//         <Route 
//           path="/hod-dashboard/:hodId" 
//           element={
//             <AuthGuard allowedRoles={['hod']}>
//               <HodDashboard />
//             </AuthGuard>
//           } 
//         />
        
//         <Route 
//           path="/student-dashboard/:studentId" 
//           element={
//             <AuthGuard allowedRoles={['student']}>
//               <StudentDashboard />
//             </AuthGuard>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//     <Toaster />
//   </AuthProvider>
// );


// after authguard code and admin & students route run perfectly

// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../src/auth/AuthContext';
import AuthGuard from '../src/auth/AuthGuard';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/UserAuth/SignUp';
import Login from './components/UserAuth/Login';
import AdminDashboard from './components/pages/AdminDashboard';
import HodDashboard from './components/pages/HodDashboard';
import StudentDashboard from './components/pages/StudentDashboard';
import ForgetPassword from './components/pages/ForgetPassword';
import DashboardAdmin from '../src/components/AdminComponents/DashboardAdmin';
import MyProfileAdmin from './components/AdminComponents/MyProfileAdmin';
import ManageStudentAdmin from '../src/components/AdminComponents/ManageStudentAdmin';
import ManageHodAdmin from '../src/components/AdminComponents/ManageHodAdmin';
import ViewLeaveReportAdmin from '../src/components/AdminComponents/ViewLeaveReportAdmin';
import DashboardStudent from '../src/components/StudentComponents/DashboardStudent';
import MyProfileStudent from '../src/components/StudentComponents/MyProfileStudent';
import ApplyForLeaveStudent from '../src/components/StudentComponents/ApplyForLeaveStudent';
import ViewLeaveStatusStudent from '../src/components/StudentComponents/ViewLeaveStatusStudent';
import DashboardHOD from '../src/components/HodComponents/DashboardHOD';
import MyProfileHOD from '../src/components/HodComponents/MyProfileHOD';
import ApplyForLeaveHOD from '../src/components/HodComponents/ApplyForLeaveHOD';
import ViewLeaveStatusHOD from '../src/components/HodComponents/ViewLeaveStatusHOD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin-dashboard/:adminId" element={
          <AuthGuard allowedRoles={['admin']}>
            <AdminDashboard />
          </AuthGuard>
        }>
          <Route index element={<DashboardAdmin />} />
          <Route path="myprofile" element={<MyProfileAdmin />} />
          <Route path="studentManage" element={<ManageStudentAdmin />} />
          <Route path="HODManage" element={<ManageHodAdmin />} />
          <Route path="viewLeaveReport" element={<ViewLeaveReportAdmin />} />
        </Route>

        {/* HOD Dashboard Route */}
        <Route 
          path="/hod-dashboard/:hodId" 
          element={
            <AuthGuard allowedRoles={['hod']}>
              <HodDashboard />
            </AuthGuard>
          } 
        >
          <Route index element={<DashboardHOD />} /> {/* Default Dashboard */}
          <Route path="myprofile" element={<MyProfileHOD />} />
          <Route path="applyForLeaveHOD" element={<ApplyForLeaveHOD />} />
          <Route path="viewLeaveStatusHOD" element={<ViewLeaveStatusHOD />} />
        </Route>


        {/* Student Dashboard Routes */}
        <Route 
          path="/student-dashboard/:studentId" 
          element={
            <AuthGuard allowedRoles={['student']}>
              <StudentDashboard />
            </AuthGuard>
          }
        >
          <Route index element={<DashboardStudent />} /> {/* Default Dashboard */}
          <Route path="myprofile" element={<MyProfileStudent />} />
          <Route path="applyForLeaveStudent" element={<ApplyForLeaveStudent />} />
          <Route path="viewLeaveStatusStudent" element={<ViewLeaveStatusStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster />
  </AuthProvider>
);



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
// import DashboardHOD from './components/HodComponents/DashboardHOD';

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