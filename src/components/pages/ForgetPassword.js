import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { forgetPassword, resetPassword } from '../../api';
import { useNavigate, NavLink } from 'react-router-dom';
import { IoChevronBackCircleOutline } from "react-icons/io5";

const ForgetPassword = () => {
  const [emailValue, setEmailValue] = useState('');
  const [forgetPage, setForgetPage] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [coNewPassword, setCoNewPassword] = useState('');

  const navigate = useNavigate();

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newPassword === '' || coNewPassword === '') {
        toast.error('Please Enter Both Password !');
        return;
      }
      
      if (newPassword === coNewPassword) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          await resetPassword(user, { password: newPassword });
          // user.password = newPassword;
          // localStorage.setItem('user', JSON.stringify(user));
          toast.success('Password Updated Successfully!');
  
          // await resetPassword(user, { password: newPassword });
          localStorage.removeItem('user');
          navigate('/');
        } else {
          toast.error('Error While Updating Password!');
        }
      } else {
        toast.error('Both Passwords Do Not Match!');
      }
      setNewPassword('');
      setCoNewPassword('');
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Failed to update password!');
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (emailValue === '') {
        toast.error('Please Enter Email!');
        return;
      }
      const response = await forgetPassword(emailValue);
      if (response) {
        localStorage.setItem('user', JSON.stringify(response));
        setForgetPage(true);
      } else {
        toast.error('Email Not Registered!');
      }
    } catch (error) {
      if (error.message === 'Email Not Register!') {
        toast.error('Email Not Registered!');
      } else {
        toast.error('Email Not Registered!');
      }
    }
  };

  const backToForgetPage = () =>{
    setForgetPage(false)
  }
  const backToHomePage = () =>{
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div>
      {forgetPage ? (
        <div className='min-h-screen'>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600">
                <div className='flex flex-col items-center justify-center border-2 py-4 px-4 md:p-8 rounded-lg border-black'>
                  <div className='flex items-center gap-4 md:gap-8 p-6'>
                      <IoChevronBackCircleOutline onClick={backToForgetPage} size={25}/>
                      <h1 className='font-bold text-2xl md:text-3xl mb-4 underline'>Change Password</h1>
                  </div>
                  <input
                    className="text-black p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type='password'
                    placeholder='New Password...'
                  />
                  <input
                    className="text-black p-3 mt-4 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    value={coNewPassword}
                    onChange={(e) => setCoNewPassword(e.target.value)}
                    type='password'
                    placeholder='Confirm New Password...'
                  />
                  <button className='btn' onClick={handlePasswordSubmit} type='submit'>
                    Submit
                  </button>
                </div>
            </div>
        </div>
      ) : (
        <div className='min-h-screen'>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600">
                <div className='flex flex-col items-center justify-center border-2 py-4 px-4 md:p-8 rounded-lg border-black'>
                    <div className='flex items-center gap-4 md:gap-8 p-6'>
                        <IoChevronBackCircleOutline onClick={backToHomePage} size={25}/>
                        <h1 className='font-bold text-2xl md:text-3xl mb-0 underline'>Forget Password</h1>
                    </div>
                    <input
                      className="text-black text-base md:text-md p-1 md:p-2 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      type='email'
                      placeholder='Enter Your Email...'
                    />
                    <button className='btn' onClick={handleSubmit} type='submit'>
                      Submit
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;