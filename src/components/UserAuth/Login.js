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


import React, { useState } from 'react';
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

  
        // const handleSubmit = async (e) => {
        //     e.preventDefault();
        //     try {
        //         const response = await loginUser(formData.email, formData.password, formData.role);
        
        //         if (response && response.data.length > 0) {
        //             const user = response.data[0];  // User object after login
        //             toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);
        
        //             // Redirect based on user role
        //             if (formData.role === 'admin') {
        //                 navigate('/admin-dashboard');
        //             } else if (formData.role === 'hod') {
        //                 navigate(`/hod-dashboard/${user.department}`); // Pass the department
        //             } else if (formData.role === 'student') {
        //                 navigate('/student-dashboard');
        //             }
        //         } else {
        //             toast.error('Invalid User!');
        //         }
        
        //         setFormData({ email: '', password: '', role: '' });
        //     } catch (error) {
        //         toast.error(error.message); // This will show the role mismatch error if applicable
        //     }
        // };
  
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await loginUser(formData.email, formData.password, formData.role);
        
                if (response && response.data.length > 0) {
                    const user = response.data[0];
                    toast.success(`Welcome, ${user.name || user.role.toUpperCase()}`);
        
                    // Store user details in localStorage (including student ID)
                    localStorage.setItem('user', JSON.stringify(user));
        
                    // Redirect based on user role
                    if (user.role === 'admin') {
                        navigate(`/admin-dashboard/${user.id}`);
                    } else if (user.role === 'hod') {
                        navigate(`/hod-dashboard/${user.id}`);
                    } else if (user.role === 'student') {
                        // Use the student ID for specific routing if needed
                        navigate(`/student-dashboard/${user.id}`); // Assume `user.id` is the student's unique ID
                    }
                } else {
                    toast.error('Invalid User!');
                }
        
                setFormData({ email: '', password: '', role: '' });
            } catch (error) {
                toast.error('Login failed.');
            }
        };
        
        

    return (
        <div>
            <h1 className='text-3xl my-4 flexs'>Login Page</h1>
            <form onSubmit={handleSubmit} className='flexs gap-4'>
                <input
                    className='border'
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className='border'
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <select className='w-40 p-1.5 rounded-md bg-slate-300 text-center' name="role" value={formData.role} onChange={handleInputChange}>
                    <option>Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="hod">HOD</option>
                    <option value="student">Student</option>
                </select>
                <button type="submit" className='border-2 border-black px-2.5 py-1.5 rounded-md my-2'>Login</button>
            </form>

            <div className='flexs mt-2'>
                <h2>Don't have an account? <span className='underline text-sky-600'><NavLink to='/signup'>SignUp</NavLink></span></h2>
            </div>
        </div>
    );
};

export default Login;