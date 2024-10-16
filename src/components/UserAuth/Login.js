import React, { useState } from 'react';
import { loginUser } from '../../api';
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role : ''
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
        } else {
            toast.error('Invalid User!');
        }
        
        setFormData({ email: '', password: '', role: '' });
        navigate('/dashboard');
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
        
        {/* <div className='flexs py-2'>
            OR With
        </div> */}

        <div className='flexs mt-2'>
            <h2>Already have an account? <span className='underline text-sky-600'><NavLink to='/signup'>SignUp</NavLink></span></h2>
        </div>
    </div>
  );
};

export default Login;
