// import React, { useState } from 'react';
// import { FaUser } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { FaUsersBetweenLines } from "react-icons/fa6";
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
    
//                 localStorage.setItem('user', JSON.stringify(user));
    
//                 if (user.role === 'admin') {
//                     navigate(`/admin-dashboard/${user.id}`);
//                 } else if (user.role === 'hod') {
//                     navigate(`/hod-dashboard/${user.id}`);
//                 } else if (user.role === 'student') {
//                     navigate(`/student-dashboard/${user.id}`);
//                 }
//             } else {
//                 toast.error('Invalid User!');
//             }
    
//             setFormData({ email: '', password: '', role: '' });
//         } catch (error) {
//             toast.error('Email OR Password Are Invalid !');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600">
//             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-md max-w-sm w-full">
//                 <div className="text-center mb-8">
//                     <div>
//                         <h1 className='text-3xl font-bold text-center mb-6'>Login Page</h1>
//                     </div>
//                 </div>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="relative">
//                         <input
//                             className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                             type="email"
//                             name="email"
//                             placeholder="USERNAME"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <FaUser/>
//                         </div>
//                     </div>
//                     <div className="relative">
//                         <input
//                             className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                             type="password"
//                             name="password"
//                             placeholder="PASSWORD"
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <RiLockPasswordFill/>
//                         </div>
//                     </div>
//                     <div> 
//                         <select
//                             className="bg-black w-full mx-auto p-3 bg-opacity-20 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                             name="role"
//                             value={formData.role}
//                             onChange={handleInputChange}
//                         >
//                             <FaUsersBetweenLines/>
//                             <option className='bg-purple-500 text-black font-bold' value="" disabled>Select Role</option>
//                             <option className='bg-purple-500 text-black font-bold' value="admin">Admin</option>
//                             <option className='bg-purple-500 text-black font-bold' value="hod">HOD</option>
//                             <option className='bg-purple-500 text-black font-bold' value="student">Student</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     >
//                         LOGIN
//                     </button>
//                 </form>
//                 <div className="font-bold flex items-center justify-between mt-4">
//                     <NavLink to="/forgot-password" className="text-sky-800 underline text-md hover:text-sky-900">
//                         Forgot your password?
//                     </NavLink>
//                 </div>
//                 <div className='flexs mt-4 font-bold'>
//                     <h1>Don't have an account? <span className='underline text-sky-800'><NavLink to='/signup'>SignUp</NavLink></span></h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




// after authguard code


// import React, { useState } from 'react';
// import { FaUser } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { FaUsersBetweenLines } from "react-icons/fa6";
// import { loginUser } from '../../api';
// import toast from 'react-hot-toast';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useAuth } from '../../auth/AuthContext'; // Import AuthContext

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         role: ''
//     });

//     const navigate = useNavigate();
//     const { login } = useAuth(); // Destructure login from useAuth

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
        
//                 // Save user in localStorage and context, then navigate
//                 localStorage.setItem('user', JSON.stringify(user));
//                 login(user); // Set user in context
    
//                 // Make sure this line is executed based on user role
//                 if (user.role === 'admin') {
//                     console.log("Navigating to:", `/admin-dashboard/${user.id}`);
//                     navigate(`/admin-dashboard/${user.id}`);
//                 } else if (user.role === 'hod') {
//                     navigate(`/hod-dashboard/${user.id}`);
//                 } else if (user.role === 'student') {
//                     navigate(`/student-dashboard/${user.id}`);
//                 }
//             } else {
//                 toast.error('Invalid User!');
//             }
//         } catch (error) {
//             toast.error('Email OR Password Are Invalid!');
//         }
//     };
    

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600">
//             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-md max-w-sm w-full">
//                 <div className="text-center mb-8">
//                     <div>
//                         <h1 className='text-3xl font-bold text-center mb-6'>Login Page</h1>
//                     </div>
//                 </div>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="relative">
//                         <input
//                             className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                             type="email"
//                             name="email"
//                             placeholder="USERNAME"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <FaUser/>
//                         </div>
//                     </div>
//                     <div className="relative">
//                         <input
//                             className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                             type="password"
//                             name="password"
//                             placeholder="PASSWORD"
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <RiLockPasswordFill/>
//                         </div>
//                     </div>
//                     <div> 
//                         <select
//                             className="bg-black w-full mx-auto p-3 bg-opacity-20 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                             name="role"
//                             value={formData.role}
//                             onChange={handleInputChange}
//                         >
//                             <FaUsersBetweenLines/>
//                             <option className='bg-purple-500 text-black font-bold' value="" disabled>Select Role</option>
//                             <option className='bg-purple-500 text-black font-bold' value="admin">Admin</option>
//                             <option className='bg-purple-500 text-black font-bold' value="hod">HOD</option>
//                             <option className='bg-purple-500 text-black font-bold' value="student">Student</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     >
//                         LOGIN
//                     </button>
//                 </form>
//                 <div className="font-bold flex items-center justify-between mt-4">
//                     <NavLink to="/forgot-password" className="text-sky-800 underline text-md hover:text-sky-900">
//                         Forgot your password?
//                     </NavLink>
//                 </div>
//                 <div className='flexs mt-4 font-bold'>
//                     <h1>Don't have an account? <span className='underline text-sky-800'><NavLink to='/signup'>SignUp</NavLink></span></h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;






































// after authguard code


import React, { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { loginUser } from '../../api';
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext'; 

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: ''
    });

    const { user, login } = useAuth(); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            login(storedUser);
            if (storedUser.role === 'admin') {
                navigate(`/admin-dashboard/${storedUser.id}`);
            } else if (storedUser.role === 'hod') {
                navigate(`/hod-dashboard/${storedUser.id}`);
            } else if (storedUser.role === 'student') {
                navigate(`/student-dashboard/${storedUser.id}`);
            }
        }
    }, [login, navigate]);

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
                login(user); 

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
            toast.error('Email OR Password Are Invalid!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-md max-w-sm w-full">
                <div className="text-center mb-8">
                    <h1 className='text-3xl font-bold text-center mb-6'>Login Page</h1>
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
                    {/* <div> 
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
                    </div> */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        LOGIN
                    </button>
                </form>
                <div className="font-bold flex items-center justify-between mt-4">
                    <NavLink to="/forgot-password" className="text-sky-800 underline text-md hover:text-sky-900">
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
