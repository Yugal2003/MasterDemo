import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/UserAuth/SignUp';
import Login from './components/UserAuth/Login';
import Dashboard from './components/pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
        <Routes>
            <Route>
              <Route path='/' element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    <Toaster/>
  </>
);