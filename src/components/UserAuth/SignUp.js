import React, { useState } from 'react';
import { registerUser } from '../../api';
import { toast } from 'react-hot-toast';  
// import { FaFacebook } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender : '',
    image : '',
    phone : '',
    department : '',
    address : '',
    role: 'student',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result }); // Store base64 string
    };

    if (file) {
      reader.readAsDataURL(file); // Converts the file to base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData); // Send formData including the image base64
      toast.success('User registered successfully!');
      setFormData({
        name: '',
        email: '',
        password: '',
        gender: '',
        image: '',
        phone: '',
        department: '',
        address: '',
        role: 'student',
      });
    } catch (error) {
      toast.error('Registration failed.');
    }
  };

  return (
    <div>
        <h1 className='text-3xl my-4 flexs'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flexs gap-4'>
            <input
                className='border'
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
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
            <input
                className='border'
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
            />
            
           <div className='flex flex-row gap-12 text-center'>
                <div>
                    <label>Gender :</label><br/>
                    <input  
                        type="radio" 
                        name="gender" 
                        placeholder='Gender' 
                        value="male"
                        onChange={handleInputChange}
                        required
                    />
                    <label className='px-1'>Male</label>
                    <input  
                        type="radio" 
                        name="gender" 
                        placeholder='Gender' 
                        value="female"
                        onChange={handleInputChange}
                        required
                    />
                    <label className='pl-1'>Female</label>
                </div>
                <div className='flex flex-col'>
                    <label for="department">Department:</label>
                    <select id="department" name="department" 
                    value={formData.department} onChange={handleInputChange}>
                        <option value="hod1">HOD1</option>
                        <option value="hod2">HOD2</option>
                        <option value="hod3">HOD3</option>
                        <option value="hod3">HOD4</option>
                    </select>
                </div>
           </div>

            
            <textarea
                cols={25}
                rows={5}
                className='border'
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
            ></textarea>
            
            {/* <div className='flex flex-row gap-2'>
                <label>Gender :</label>
                <input  
                    type="radio" 
                    name="gender" 
                    placeholder='Gender' 
                    value="male"
                    onChange={handleInputChange}
                    required
                />
                <label>Male</label>
                <input  
                    type="radio" 
                    name="gender" 
                    placeholder='Gender' 
                    value="female"
                    onChange={handleInputChange}
                    required
                />
                <label>Female</label>
            </div> */}
            
            <div className='ml-16'>
                <input type="file" name="image" onChange={uploadImage}/>
            </div>


            <select className='w-64 p-1.5 rounded-md bg-slate-300' name="role" value={formData.role} onChange={handleInputChange}>
                <option value="student">Student</option>
                {/* <option value="staff">Staff</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option> */}
            </select>
            <button type="submit" className='border-2 border-black px-2.5 py-1.5 rounded-md'>Sign Up</button>
        </form>

        {/* <div className='flexs py-2'>
            OR With
        </div>

        <div className='flexs gap-4'>
            <div className='flex2'>
                <FaFacebook size={22}/>
                <h2>Signup With FaceBook</h2>
            </div>
            
            <div className='flex2'>
                <FaGoogle size={22}/>
                <h2>Signup With Google</h2>
            </div>
        </div> */}

        <div className='flexs mt-2'>
            <h2>Already have an account? <span className='underline text-sky-600'><NavLink to='/'>Login</NavLink></span></h2>
        </div>
    </div>
  );
};

export default Signup;
