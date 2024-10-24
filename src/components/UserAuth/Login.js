
//yestreday changes 1

// import React, { useState } from 'react';
// import { loginUser } from '../../api';
// import toast from 'react-hot-toast';
// import { useNavigate, NavLink } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         role : ''
//     });

//     const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await loginUser(formData.email, formData.password, formData.role);
        
//         if (response && response.data.length > 0) {
//             const user = response.data[0];
//             toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);
//         } else {
//             toast.error('Invalid User!');
//         }
        
//         setFormData({ email: '', password: '', role: '' });
//         navigate('/dashboard');
//     } catch (error) {
//         toast.error('Login failed.');
//     }
// };


//   return (
//     <div>
//         <h1 className='text-3xl my-4 flexs'>Login Page</h1>
//         <form onSubmit={handleSubmit} className='flexs gap-4'>
//             <input
//                 className='border'
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//             />
//             <input
//                 className='border'
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//             />
//             <select className='w-40 p-1.5 rounded-md bg-slate-300 text-center' name="role" value={formData.role} onChange={handleInputChange}>
//                 <option>Select Role</option>
//                 <option value="admin">Admin</option>
//                 <option value="hod">HOD</option>
//                 <option value="student">Student</option>
//             </select>
//             <button type="submit" className='border-2 border-black px-2.5 py-1.5 rounded-md my-2'>Login</button>
//         </form>
        
//         {/* <div className='flexs py-2'>
//             OR With
//         </div> */}

//         <div className='flexs mt-2'>
//             <h2>Already have an account? <span className='underline text-sky-600'><NavLink to='/signup'>SignUp</NavLink></span></h2>
//         </div>
//     </div>
//   );
// };

// export default Login;





// yesterday changes 2



// import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../../firebase'; // Import Firebase auth and firestore
// import { doc, getDoc } from 'firebase/firestore';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: ''
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Basic validation for empty fields
//     if (!formData.email || !formData.password) {
//       toast.error('Please enter your email and password');
//       return;
//     }
  
//     try {
//       // Sign in user with email and password
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );
      
//       const user = userCredential.user;
  
//       // Retrieve user data from Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));
//       const userData = userDoc.data();
  
//       if (userData) {
//         const userRole = userData.role;
        
//         // Redirect based on user role
//         if (userRole === 'admin') {
//           toast.success('Welcome Admin!');
//           navigate('/admin-dashboard');
//         } else if (userRole === 'hod') {
//           toast.success('Welcome HOD!');
//           navigate('/hod-dashboard');
//         } else {
//           toast.success('Welcome Student!');
//           navigate('/');
//         }
//       } else {
//         throw new Error('User data not found');
//       }
  
//     } catch (error) {
//       console.log('Error:', error.message);
//       toast.error('Login failed: ' + error.message);
//     }
//   };
  

//   return (
//     <div>
//       <h1 className='text-3xl my-4 flexs'>Login Page</h1>
//       <form onSubmit={handleSubmit} className='flexs gap-4'>
//         <input
//           className='border'
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           className='border'
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//         />
//         <select className='w-40 p-1.5 rounded-md bg-slate-300 text-center' name="role" value={formData.role} onChange={handleInputChange}>
//           <option value="" disabled>Select Role</option>
//           <option value="admin">Admin</option>
//           <option value="hod">HOD</option>
//           <option value="student">Student</option>
//         </select>
//         <button type="submit" className='border-2 border-black px-2.5 py-1.5 rounded-md'>Login</button>
//       </form>
//       <div className='flexs mt-2'>
//         <h2>Don't have an account? <span className='underline text-sky-600'><NavLink to='/signup'>Sign Up</NavLink></span></h2>
//       </div>
//     </div>
//   );
// };

// export default Login;





// yesterday changes 3


// import React, { useState } from 'react';
// import { loginUser } from '../../api';
// import toast from 'react-hot-toast';
// import { useNavigate, NavLink } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         role: ''
//     });

//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const response = await loginUser(formData.email, formData.password, formData.role);

//     //         if (response && response.data.length > 0) {
//     //             const user = response.data[0];
//     //             toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);

//     //             // Redirect based on user role
//     //             if (formData.role === 'admin') {
//     //                 navigate('/admin-dashboard');
//     //             } else if (formData.role === 'hod') {
//     //                 navigate('/hod-dashboard');
//     //             } else if (formData.role === 'student') {
//     //                 navigate('/student-dashboard');
//     //             }
//     //         } else {
//     //             toast.error('Invalid User!');
//     //         }

//     //         setFormData({ email: '', password: '', role: '' });
//     //     } catch (error) {
//     //         toast.error('Login failed.');
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//           const response = await loginUser(formData.email, formData.password, formData.role);
  
//           if (response && response.data.length > 0) {
//               const user = response.data[0];
//               toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);
  
//               // Redirect based on user role
//               if (formData.role === 'admin') {
//                   navigate('/admin-dashboard');
//               } else if (formData.role === 'hod') {
//                   navigate('/hod-dashboard');
//               } else if (formData.role === 'student') {
//                   navigate('/student-dashboard');
//               }
//           } else {
//               toast.error('Invalid User!');
//           }
  
//           setFormData({ email: '', password: '', role: '' });
//       } catch (error) {
//           toast.error(error.message); // This will show the role mismatch error if applicable
//       }
//   };
  
  

//     return (
//         <div>
//             <h1 className='text-3xl my-4 flexs'>Login Page</h1>
//             <form onSubmit={handleSubmit} className='flexs gap-4'>
//                 <input
//                     className='border'
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     className='border'
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <select className='w-40 p-1.5 rounded-md bg-slate-300 text-center' name="role" value={formData.role} onChange={handleInputChange}>
//                     <option>Select Role</option>
//                     <option value="admin">Admin</option>
//                     <option value="hod">HOD</option>
//                     <option value="student">Student</option>
//                 </select>
//                 <button type="submit" className='border-2 border-black px-2.5 py-1.5 rounded-md my-2'>Login</button>
//             </form>

//             <div className='flexs mt-2'>
//                 <h2>Already have an account? <span className='underline text-sky-600'><NavLink to='/signup'>SignUp</NavLink></span></h2>
//             </div>
//         </div>
//     );
// };

// export default Login;






//current code 


// import React, { useState } from 'react';
// import { loginUser } from '../../api';
// import toast from 'react-hot-toast';
// import { useNavigate, NavLink } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         role: ''
//     });

//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

  
//         const handleSubmit = async (e) => {
//             e.preventDefault();
//             try {
//                 const response = await loginUser(formData.email, formData.password, formData.role);
        
//                 if (response && response.data.length > 0) {
//                     const user = response.data[0];
//                     toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);
        
//                     // Store user details in localStorage (including student ID)
//                     localStorage.setItem('user', JSON.stringify(user));
        
//                     // Redirect based on user role
//                     if (user.role === 'admin') {
//                         navigate(`/admin-dashboard/${user.id}`);
//                     } else if (user.role === 'hod') {
//                         navigate(`/hod-dashboard/${user.id}`);
//                     } else if (user.role === 'student') {
//                         // Use the student ID for specific routing if needed
//                         navigate(`/student-dashboard/${user.id}`); // Assume `user.id` is the student's unique ID
//                     }
//                 } else {
//                     toast.error('Invalid User!');
//                 }
        
//                 setFormData({ email: '', password: '', role: '' });
//             } catch (error) {
//                 toast.error('Login failed.');
//             }
//         };
        
        

//     return (
//         <div>
//             <h1 className='text-3xl my-4 flexs'>Login Page</h1>
//             <form onSubmit={handleSubmit} className='flexs gap-4'>
//                 <input
//                     className='border'
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     className='border'
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <select className='w-40 p-1.5 rounded-md bg-slate-300 text-center' name="role" value={formData.role} onChange={handleInputChange}>
//                     <option>Select Role</option>
//                     <option value="admin">Admin</option>
//                     <option value="hod">HOD</option>
//                     <option value="student">Student</option>
//                 </select>
//                 <button type="submit" className='border-2 border-black px-2.5 py-1.5 rounded-md my-2'>Login</button>
//             </form>

//             <div className='flexs mt-2'>
//                 <h2>Don't have an account? <span className='underline text-sky-600'><NavLink to='/signup'>SignUp</NavLink></span></h2>
//             </div>
//         </div>
//     );
// };

// export default Login;


//simple but good design

// import React, { useState } from 'react';
// import { loginUser } from '../../api';
// import toast from 'react-hot-toast';
// import { useNavigate, NavLink } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         role: ''
//     });

//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await loginUser(formData.email, formData.password, formData.role);

//             if (response && response.data.length > 0) {
//                 const user = response.data[0];
//                 toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);

//                 // Store user details in localStorage (including student ID)
//                 localStorage.setItem('user', JSON.stringify(user));

//                 // Redirect based on user role
//                 if (user.role === 'admin') {
//                     navigate(`/admin-dashboard/${user.id}`);
//                 } else if (user.role === 'hod') {
//                     navigate(`/hod-dashboard/${user.id}`);
//                 } else if (user.role === 'student') {
//                     // Use the student ID for specific routing if needed
//                     navigate(`/student-dashboard/${user.id}`); // Assume `user.id` is the student's unique ID
//                 }
//             } else {
//                 toast.error('Invalid User!');
//             }

//             setFormData({ email: '', password: '', role: '' });
//         } catch (error) {
//             toast.error('Login failed.');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
//             <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <input
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <input
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <select
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         name="role"
//                         value={formData.role}
//                         onChange={handleInputChange}
//                     >
//                         <option>Select Role</option>
//                         <option value="admin">Admin</option>
//                         <option value="hod">HOD</option>
//                         <option value="student">Student</option>
//                     </select>
//                     <button
//                         type="submit"
//                         className="w-full p-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
//                     >
//                         Sign In
//                     </button>
//                 </form>

//                 <div className="text-center mt-6">
//                     <p>Don't have an account? <NavLink to='/signup' className="text-blue-600 hover:underline">Sign Up</NavLink></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;



// code with responsive style

import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { loginUser } from '../../api';
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData.email, formData.password, formData.role);
    
            if (response && response.data.length > 0) {
                const user = response.data[0];
                toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);
    
                localStorage.setItem('user', JSON.stringify(user));
    
                if (user.role === 'admin') {
                    navigate(`/admin-dashboard/${user.id}`);
                } else if (user.role === 'hod') {
                    navigate(`/hod-dashboard/${user.id}`);
                } else if (user.role === 'student') {
                    navigate(`/student-dashboard/${user.id}`);
                }
            } else {
                toast.error('Invalid User!');
            }
    
            setFormData({ email: '', password: '', role: '' });
        } catch (error) {
            toast.error('Email OR Password Are Invalid !');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-md max-w-sm w-full">
                <div className="text-center mb-8">
                    <div>
                        <h1 className='text-3xl font-bold text-center mb-6'>Login Page</h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            type="email"
                            name="email"
                            placeholder="USERNAME"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser/>
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            type="password"
                            name="password"
                            placeholder="PASSWORD"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <RiLockPasswordFill/>
                        </div>
                    </div>
                    <div> {/* className='flex flex-row' */}
                        <select
                            className="bg-black w-full mx-auto p-3 bg-opacity-20 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                        >
                            <FaUsersBetweenLines/>
                            <option className='bg-purple-500 text-black font-bold' value="" disabled>Select Role</option>
                            <option className='bg-purple-500 text-black font-bold' value="admin">Admin</option>
                            <option className='bg-purple-500 text-black font-bold' value="hod">HOD</option>
                            <option className='bg-purple-500 text-black font-bold' value="student">Student</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        LOGIN
                    </button>
                </form>
                <div className="font-bold flex items-center justify-between mt-4">
                    <NavLink to="/forgot-password" className="text-sky-800 text-md hover:text-sky-900">
                        Forgot your password?
                    </NavLink>
                </div>
                <div className='flexs mt-4 font-bold'>
                    <h1>Don't have an account? <span className='underline text-sky-800'><NavLink to='/signup'>SignUp</NavLink></span></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;