// import React from 'react'
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { forgetPassword,resetPassword } from '../../api';

// const ForgetPassword = () => {
//     const [emailValue,setEmailValue] = useState("")
//     const [forgetPage,setForgetPage] = useState(false);
//     const [newPassword,setNewPassword] = useState("");
//     const [coNewPassword,setCoNewPassword] = useState("");


//     const handlePasswordSubmit = async(e) =>{
//         e.preventDefault();
//         try {
//             if(newPassword === coNewPassword){
//               const user =  JSON.parse(localStorage.getItem('user'));
//               console.log("user data",user);
//              if(user){
//                 user.password = newPassword
//                 localStorage.setItem('user',JSON.stringify(user));
//                 toast.success("Password Updated Successfully !");
//                 resetPassword(user,user.password)
//              }
//              else {
//                 toast.error("Error While Update Password !");
//              }
//             }
//             else{
//                 toast.error("Both Password Not Matched !")
//             }
//             setNewPassword("")
//             setCoNewPassword("")
//         } catch (error) {
//             console.error('Error updating password:', error);
//             toast.error('Failed to update password!');
//         }
//     }
//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         try {
//             if(emailValue === ''){
//                 toast.error("Please Enter Email !")
//                 return;
//             }
//             const response = await forgetPassword(emailValue);
//             console.log("forget response",response);
//             if(response){
//                 localStorage.setItem('user', JSON.stringify(response));
//                 setForgetPage(true);
//             }
//             else{
//                 toast.error('Email Not Register !')
//             }
//         } 
//         catch (error) {
//             // This will catch the error thrown from the API function
//             if (error.message === 'Email Not Register!') {
//                 toast.error('Email Not Registered!');
//             } else {
//                 toast.error('Email Not Registered !');
//             }
//         }
//     } 
//   return (
//     <div>
//         {
//             forgetPage 
//             ?
//                 <div>
//                     <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} type='email' placeholder='New Password...'/>
//                     <input value={coNewPassword} onChange={(e)=>setCoNewPassword(e.target.value)} type='email' placeholder='Confirm New Password...'/>
//                     <button onClick={handlePasswordSubmit} type='submit'>Submit</button>
//                 </div> 
//             :
//                 <div>
//                     <input required value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} type='email' placeholder='Enter Your Email...'/>
//                     <button onClick={handleSubmit} type='submit'>Submit</button>
//                 </div>
//         }
//     </div>
//   )
// }

// export default ForgetPassword




import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { forgetPassword, resetPassword } from '../../api';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [emailValue, setEmailValue] = useState('');
  const [forgetPage, setForgetPage] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [coNewPassword, setCoNewPassword] = useState('');

  // Get navigate from react-router-dom to redirect users
  const navigate = useNavigate();

  // const handlePasswordSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (newPassword === '' || coNewPassword === '') {
  //       toast.error('Please Enter Both Password !');
  //       return;
  //     }
  //     else{
  //         if (newPassword === coNewPassword) {
  //           const user = JSON.parse(localStorage.getItem('user'));
  //           console.log('user data', user);
  //           if (user) {
  //             user.password = newPassword;
  //             localStorage.setItem('user', JSON.stringify(user));
  //             toast.success('Password Updated Successfully!');

  //             // Update the password in the database via the API
  //             await resetPassword(user, { password: newPassword });

  //             // Redirect the user to the home page ("/") after a successful password update
  //             navigate('/');

  //             // Optionally, you can auto-login the user by updating your login state here.
  //           } else {
  //             toast.error('Error While Updating Password!');
  //           }
  //         } else {
  //           toast.error('Both Passwords Do Not Match!');
  //         }
  //       }
  //     setNewPassword('');
  //     setCoNewPassword('');
  //   } catch (error) {
  //     console.error('Error updating password:', error);
  //     toast.error('Failed to update password!');
  //   }
  // };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newPassword === '' || coNewPassword === '') {
        toast.error('Please Enter Both Password !');
        return;
      }
      
      if (newPassword === coNewPassword) {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log('user data', user);
        if (user) {
          user.password = newPassword;
          localStorage.setItem('user', JSON.stringify(user));
          toast.success('Password Updated Successfully!');
  
          await resetPassword(user, { password: newPassword });

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
      console.log('forget response', response);
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

  return (
    <div>
      {forgetPage ? (
        <div className='min-h-screen'>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600">
                <div className='flex flex-col items-center justify-center border-2 py-4 px-4 md:p-8 rounded-lg border-black'>
                  <h1 className='font-bold text-2xl md:text-3xl mb-4 underline'>Change Password</h1>
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
                    <h1 className='font-bold text-2xl md:text-3xl mb-8 underline'>Forget Password</h1>
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