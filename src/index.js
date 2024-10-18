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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/admin-dashboard" element={<AdminDashbaord/>} />
              <Route path="/hod-dashboard/:department" element={<HodDashboard />} />
              <Route path="/student-dashboard/:studentId" element={<StudentDashboard />} />
        </Routes>
    </BrowserRouter>
    <Toaster/>
  </>
);