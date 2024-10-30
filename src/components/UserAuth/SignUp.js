// current code without responsive

// import React, { useState } from 'react';
// import { registerUser } from '../../api';
// import { toast } from 'react-hot-toast';  
// import { NavLink } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     gender : '',
//     image : '',
//     phone : '',
//     department : '',
//     address : '',
//     role: 'student',
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const uploadImage = async (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     console.log(reader);
    

//     reader.onloadend = () => {
//       setFormData({ ...formData, image: reader.result }); // Store base64 string
//     };

//     if (file) {
//       reader.readAsDataURL(file); // Converts the file to base64
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(formData); // Send formData including the image base64
//       toast.success('User registered successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         gender: '',
//         image: '',
//         phone: '',
//         department: '',
//         address: '',
//         role: 'student',
//       });
//     } catch (error) {
//       if (error.message === 'Email already registered') {
//         toast.error('Email is Already Registered !');
//       } else {
//         toast.error('Registration failed.');
//       }
//     }
//   };
  

//   return (
//     <div>
//         <h1 className='text-3xl my-4 flexs'>Sign Up</h1>
//         <form onSubmit={handleSubmit} className='flexs gap-4'>
//             <input
//                 className='border'
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//             />
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
//             <input
//                 className='border'
//                 type="number"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//             />
            
//            <div className='flex flex-row gap-12 text-center'>
//                 <div>
//                     <label>Gender :</label><br/>
//                     <input  
//                         type="radio" 
//                         name="gender" 
//                         placeholder='Gender' 
//                         value="male"
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <label className='px-1'>Male</label>
//                     <input  
//                         type="radio" 
//                         name="gender" 
//                         placeholder='Gender' 
//                         value="female"
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <label className='pl-1'>Female</label>
//                 </div>
//                 {formData.role === 'student' && (
//                   <div className='flex flex-col'>
//                       <label for="department">Department:</label>
//                       <select id="department" name="department" 
//                       value={formData.department} onChange={handleInputChange} required>
//                           <option value="">Select HOD</option>
//                           <option value="hod1">Raman Sir</option>
//                           <option value="hod2">Shyam Sir</option>
//                           <option value="hod3">Radhika Mam</option>
//                           <option value="hod4">Karina Mam</option>
//                       </select>
//                   </div>
//                 )}
//            </div>

//             <div>
//               <label className="p-1 flex flex-row">Address :</label>
//               <textarea
//                   cols={25}
//                   rows={5}
//                   className='border'
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   required
//               ></textarea>
//             </div>
            

            
//             <div className='ml-16'>
//                 <input type="file" name="image" onChange={uploadImage}/>
//             </div>


//             <select className='w-64 p-1.5 rounded-md bg-slate-300' name="role" value={formData.role} onChange={handleInputChange}>
//                 <option value="student">Student</option>
//             </select>
//             <button type="submit" className='border-2 border-black px-2.5 py-1.5 rounded-md'>Sign Up</button>
//         </form>
//         <div className='flexs mt-2'>
//             <h2>Already have an account? <span className='underline text-sky-600'><NavLink to='/'>Login</NavLink></span></h2>
//         </div>
//     </div>
//   );
// };

// export default Signup;



// current code with style 


// import React, { useState } from 'react';
// import { registerUser } from '../../api';
// import { toast } from 'react-hot-toast';  
// import { NavLink } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     gender: '',
//     image: '',
//     phone: '',
//     department: '',
//     address: '',
//     role: 'student',
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const uploadImage = async (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, image: reader.result });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(formData); 
//       toast.success('User registered successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         gender: '',
//         image: '',
//         phone: '',
//         department: '',
//         address: '',
//         role: 'student',
//       });
//     } catch (error) {
//       if (error.message === 'Email already registered') {
//         toast.error('Email is Already Registered !');
//       } else {
//         toast.error('Registration Failed !');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600 p-4">
//       <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="number"
//             name="phone"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//           />
          
//           <div className="flex justify-between">
//             <div>
//               <label>Gender:</label>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label className="ml-1">Male</label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label className="ml-1">Female</label>
//               </div>
//             </div>

//             {formData.role === 'student' && (
//               <div className="flex flex-col">
//                 <label>Department:</label>
//                 <select
//                   className="p-2 border border-gray-300 rounded-md"
//                   name="department"
//                   value={formData.department}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select HOD</option>
//                   <option value="hod1">Raman Sir</option>
//                   <option value="hod2">Shyam Sir</option>
//                   <option value="hod3">Radhika Mam</option>
//                   <option value="hod4">Karina Mam</option>
//                 </select>
//               </div>
//             )}
//           </div>

//           <div>
//             <label>Address:</label>
//             <textarea
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </div>

//           <div className="mt-2">
//             <label>Upload Image:</label>
//             <input type="file" name="image" onChange={uploadImage} />
//           </div>

//           <select
//             className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             name="role"
//             value={formData.role}
//             onChange={handleInputChange}
//           >
//             <option value="student">Student</option>
//           </select>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <h2>
//             Already have an account?{' '}
//             <span className="text-blue-600 underline">
//               <NavLink to="/">Login</NavLink>
//             </span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



//current code


// import React, { useState } from 'react';
// import { registerUser } from '../../api';
// import { toast } from 'react-hot-toast';  
// import { NavLink } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     gender: '',
//     image: '',
//     phone: '',
//     department: '',
//     address: '',
//     role: 'student',
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const uploadImage = async (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, image: reader.result });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(formData); 
//       toast.success('User registered successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         gender: '',
//         image: '',
//         phone: '',
//         department: '',
//         address: '',
//         role: 'student',
//       });
//     } catch (error) {
//       if (error.message === 'Email already registered') {
//         toast.error('Email is Already Registered !');
//       } else {
//         toast.error('Registration Failed !');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600 p-4">
//       <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="relative">
//           <input
//             className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaUser/>
//           </div>
//         </div>
//         <div className="relative">
//             <input
//               className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <MdEmail/>
//             </div>
//         </div>
//         <div className="relative">
//           <input
//             className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//              <RiLockPasswordFill/>
//           </div>
//         </div>
//         <div className="relative">
//           <input
//             className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//             type="number"
//             name="phone"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//           />
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <FaPhoneAlt/>
//           </div>
//         </div>
//           <div className="flex justify-between">
//             <div className='flex items-center'>
//               <label className='font-bold pr-2'>Gender:</label>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label className="ml-1">Male</label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label className="ml-1">Female</label>
//               </div>
//             </div>

//             {formData.role === 'student' && (
//               <div className="flex flex-col items-center">
//                 <label className='font-bold'>Department:</label>
//                 <select
//                   className="text-black w-full p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   name="department"
//                   value={formData.department}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option className='bg-purple-500 text-black font-bold' value="">Select HOD</option>
//                   <option className='bg-purple-500 text-black font-bold' value="hod1">Raman Sir</option>
//                   <option className='bg-purple-500 text-black font-bold' value="hod2">Shyam Sir</option>
//                   <option className='bg-purple-500 text-black font-bold' value="hod3">Radhika Mam</option>
//                   <option className='bg-purple-500 text-black font-bold' value="hod4">Karina Mam</option>
//                 </select>
//               </div>
//             )}
//           </div>

//           <div>
//             <label>Address:</label>
//             <textarea
//               className="text-black w-full p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </div>

//           <div className="mt-2">
//             <label>Upload Image:</label>
//             <input type="file" name="image" onChange={uploadImage} />
//           </div>

//           <select
//             className="text-black w-full p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//             name="role"
//             value={formData.role}
//             onChange={handleInputChange}
//           >
//             <option className='bg-purple-500 text-black font-bold' value="student">Student</option>
//           </select>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="flexs mt-4 font-bold text-center">
//           <h2>
//             Already have an account?{' '}
//             <span className="text-sky-800 underline">
//               <NavLink to="/">Login</NavLink>
//             </span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;




// after authguard code


import React, { useState } from 'react';
import { registerUser } from '../../api';
import { toast } from 'react-hot-toast';  
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Restrict phone input to 10 digits
    if (name === "phone" && value.length > 10) return;
    setFormData({ ...formData, [name]: value });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      await registerUser(formData); 
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
      navigate('/');
    } catch (error) {
      if (error.message === 'Email already registered') {
        toast.error('Email is Already Registered !');
      } else {
        toast.error('Registration Failed !');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-purple-600 p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser/>
          </div>
        </div>
        <div className="relative">
            <input
              className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail/>
            </div>
        </div>
        <div className="relative">
          <input
            className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <RiLockPasswordFill/>
          </div>
        </div>
        <div className="relative">
          <input
            className="text-black w-full pl-10 p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="number"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            maxLength={10}
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaPhoneAlt/>
          </div>
        </div>
          <div className="flex justify-between">
            <div className='flex items-center'>
              <label className='font-bold pr-2'>Gender:</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleInputChange}
                  required
                />
                <label className="ml-1">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleInputChange}
                  required
                />
                <label className="ml-1">Female</label>
              </div>
            </div>

            {/* {formData.role === 'student' && ( */}
              <div className="flex flex-col items-center">
                <label className='font-bold'>Department:</label>
                <select
                  className="text-black w-full p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  {/* <option className='bg-purple-500 text-black font-bold' value="">Select HOD</option> */}
                  <option className='bg-purple-500 text-black font-bold' value="hod1">Raman Sir</option>
                  <option className='bg-purple-500 text-black font-bold' value="hod2">Shyam Sir</option>
                  <option className='bg-purple-500 text-black font-bold' value="hod3">Radhika Mam</option>
                  <option className='bg-purple-500 text-black font-bold' value="hod4">Karina Mam</option>
                </select>
              </div>
            {/* )} */}
          </div>

          <div>
            <label>Address:</label>
            <textarea
              className="text-black w-full p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="mt-2">
            <label>Upload Image:</label>
            <input required type="file" name="image" onChange={uploadImage} />
          </div>

          {/* <select
            className="text-black w-full p-3 bg-white bg-opacity-20 placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option className='bg-purple-500 text-black font-bold' value="student">Student</option>
          </select> */}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="flexs mt-4 font-bold text-center">
          <h2>
            Already have an account?{' '}
            <span className="text-sky-800 underline">
              <NavLink to="/">Login</NavLink>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;