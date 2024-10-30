

// import React,{useState,useEffect}from "react";
// // import { useParams } from 'react-router-dom';
// import { updateUserData } from "../../api";
// import { toast } from 'react-hot-toast';  

// const MyProfileStudent = () => {
//     const [userDataShow, setUserDataShow] = useState(false);

//     const [formData, setFormData] = useState({
//         name: '',
//         id: '',
//         gender: '',
//         phone: '',
//         address: '',
//     });

//     // const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));

//     useEffect(() => {
//         if (user) {
//             setFormData({
//                 name: user.name,
//                 id: user.id,
//                 gender: user.gender,
//                 phone: user.phone,
//                 address: user.address,
//             });
//         }
//     }, [user]);



//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await updateUserData(formData);
//             toast.success('User updated successfully!');
//         } catch (error) {
//             if (error.message === 'Email already registered') {
//                 toast.error('Email is already registered!');
//             } else {
//                 toast.error('Update failed.');
//             }
//         }
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const changeUserProfile = () => {
//         setUserDataShow(!userDataShow);
//     };

//   return (
//     <div className="flex flex-col">
//       <h1 className="text-3xl font-bold flex flex-col justify-center items-center mt-4">
//         Welcome Profile Page
//       </h1>
//       <h1 className="border-2 border-black text-2xl font-medium flex flex-col items-start pl-8 mt-8">
//         Profile Info
//       </h1>

//       <div className="flex flex-row gap-20 mt-8">
//         <div>
//           <img className="goal_circle" src={`${user.image}`} alt="user_image" />
//         </div>
//         {userDataShow ? (
//           <div>
//             <form onSubmit={handleFormSubmit} className="userData_info">
//               <div className="flex flex-row gap-4 pb-4">
//                 <label>User ID :</label>
//                 <input
//                   type="number"
//                   name="id"
//                   value={formData.id}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex flex-row gap-4">
//                 <label>Name :</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex flex-row text-center pt-4 gap-1">
//                 <label>Gender :</label>
//                 <br />
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   checked={formData.gender === "male"}
//                   onChange={handleChange}
//                 />
//                 <label className="px-1">Male</label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   checked={formData.gender === "female"}
//                   onChange={handleChange}
//                 />
//                 <label className="pl-1">Female</label>
//               </div>
//               <div className="flex flex-row gap-4 pt-4">
//                 <label>Mobile :</label>
//                 <input
//                   type="number"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex flex-row gaps items-center">
//                 <label>Address :</label>
//                 <textarea
//                   cols={25}
//                   rows={3}
//                   className="border"
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//             </form>
//             <button onClick={changeUserProfile} className="buttons">
//               Update
//             </button>
//           </div>
//         ) : (
//           <div className="mt-2">
//             <div className="flex flex-row gap-4 pb-4">
//               <label>User ID :</label>
//               <p>{user.id}</p>
//             </div>
//             <div className="flex flex-row gap-4">
//               <label>Name :</label>
//               <p>{user.name}</p>
//             </div>
//             <div className="flex flex-row gap-4 pt-4">
//               <label>Gender :</label>
//               <p>{user.gender}</p>
//             </div>
//             <div className="flex flex-row gap-4 pt-4">
//               <label>Mobile :</label>
//               <p>{user.phone}</p>
//             </div>
//             <div className="flex flex-row gap-4 pt-4">
//               <label>Address :</label>
//               <p>{user.address}</p>
//             </div>
//             <button onClick={changeUserProfile} className="buttons">
//               Edit
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfileStudent;







// without upload photo perfect code



// import React, { useState, useEffect } from "react";
// import { toast } from 'react-hot-toast';
// import { updateUserData } from "../../api";

// const MyProfileStudent = () => {
//     const [userDataShow, setUserDataShow] = useState(false);

//     const [formData, setFormData] = useState({
//         email: '',
//         id: '',
//         gender: '',
//         phone: '',
//         address: '',
//     });

//     // Get user data from localStorage
//     const user = JSON.parse(localStorage.getItem('user'));

//     useEffect(() => {
//         if (user) {
//             setFormData({
//                 email: user.email,
//                 id: user.id,
//                 gender: user.gender,
//                 phone: user.phone,
//                 address: user.address,
//             });
//         }
//     }, []);

//     // Handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     // Handle form submit
//     const handleFormSubmit = async (e) => {
//       e.preventDefault();

//       try {
//           // Merge form data with existing user data
//           const updatedUser = {
//               ...user, // Retain original user data
//               ...formData // Only overwrite the fields updated in the form
//           };

//           // Update the user data in the backend and localStorage
//           await updateUserData(user, formData);
          
//           // Update localStorage
//           localStorage.setItem('user', JSON.stringify(updatedUser));
          
//           // Notify success
//           toast.success('User updated successfully!');
//       } 
//       catch (error) {
//           toast.error('Update failed.');
//       }

//       // Hide form after submission
//       setUserDataShow(false);
//     };

//     // Toggle between showing the form or the user data
//     const changeUserProfile = () => {
//         setUserDataShow(!userDataShow);
//     };

//     return (
//         <div className="flex flex-col">
//             <h1 className="text-3xl font-bold flex flex-col justify-center items-center mt-4">
//                 Welcome Profile Page
//             </h1>
//             <h1 className="border-2 border-black text-2xl font-medium flex flex-col items-start pl-8 mt-8">
//                 Profile Info
//             </h1>

//             <div className="flex flex-row gap-0 mt-8">
//                 <div>
//                     <img className="goal_circle" src={`${user.image}`} alt="user_image" />
//                 <p>{userDataShow ? <input className="w-56 mt-8" type="file"/> : ""}</p>
//                 </div>
//                 {userDataShow ? (
//                     <div>
//                         <form onSubmit={handleFormSubmit} className="userData_info">
//                             <div className="flex flex-row gap-4">
//                                 <label>Email &nbsp;&nbsp;&nbsp;:</label>
//                                 <input
//                                     className="border"
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="flex flex-row text-center pt-4 gap-1">
//                                 <label>Gender&nbsp;:</label>
//                                 <br />
//                                 <input
//                                     className="ml-2"
//                                     type="radio"
//                                     name="gender"
//                                     value="male"
//                                     checked={formData.gender === "male"}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="px-1">Male</label>
//                                 <input
//                                     type="radio"
//                                     name="gender"
//                                     value="female"
//                                     checked={formData.gender === "female"}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="pl-1">Female</label>
//                             </div>
//                             <div className="flex flex-row gap-4 pt-4">
//                                 <label>Mobile :</label>
//                                 <input
//                                     className="border"
//                                     type="number"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="flex flex-row gaps items-center">
//                                 <label>Address :</label>
//                                 <textarea
//                                     cols={25}
//                                     rows={3}
//                                     className="border"
//                                     type="text"
//                                     name="address"
//                                     value={formData.address}
//                                     onChange={handleChange}
//                                 ></textarea>
//                             </div>
//                             <button type="submit" className="buttons">
//                                 Update
//                             </button>
//                         </form>
//                     </div>
//                 ) : (
//                     <div className="mt-2 ml-12">
//                         <div className="flex flex-row gap-4 pb-4">
//                             <label>User ID :</label>
//                             <p>{user.id}</p>
//                         </div>
//                         <div className="flex flex-row gap-4">
//                             <label>Email :</label>
//                             <p>{user.email}</p>
//                         </div>
//                         <div className="flex flex-row gap-4 pt-4">
//                             <label>Gender :</label>
//                             <p>{user.gender}</p>
//                         </div>
//                         <div className="flex flex-row gap-4 pt-4">
//                             <label>Mobile :</label>
//                             <p>{user.phone}</p>
//                         </div>
//                         <div className="flex flex-row gap-4 pt-4">
//                             <label>Address :</label>
//                             <p>{user.address}</p>
//                         </div>
//                         <button onClick={changeUserProfile} className="buttons">
//                             Edit
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyProfileStudent;










//current code


// with upload photo perfect code // current code


// import React, { useState, useEffect } from "react";
// import { toast } from 'react-hot-toast';
// import { updateUserData } from "../../api"; 
// import { FaRegUser } from "react-icons/fa";

// const MyProfileStudent = () => {
//     const [userDataShow, setUserDataShow] = useState(false);

//     const [formData, setFormData] = useState({
//         email: '',
//         id: '',
//         gender: '',
//         phone: '',
//         address: '',
//         image: '',  // New state for the image URL
//     });

//     // Get user data from localStorage
//     const user = JSON.parse(localStorage.getItem('user'));
//     console.log(user);
    
//     useEffect(() => {
//         if (user) {
//             setFormData({
//                 email: user.email,
//                 id: user.id,
//                 gender: user.gender,
//                 phone: user.phone,
//                 address: user.address,
//                 image: user.image, // Load the existing image
//             });
//         }
//     }, []);

//     // Handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     // Handle image upload
//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setFormData((prevFormData) => ({
//                 ...prevFormData,
//                 image: reader.result,  // Store the image as a base64 encoded string
//             }));
//         };
//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     };

//     // Handle form submit
//     const handleFormSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Merge form data with existing user data, keeping fields like name, password, department, and role intact
//             const updatedUser = {
//                 ...user, // Retain original user data
//                 ...formData // Overwrite only the fields updated in the form
//             };

//             // Update the user data in the backend and localStorage
//             await updateUserData(user, formData);
            
//             // Update localStorage
//             localStorage.setItem('user', JSON.stringify(updatedUser));
            
//             // Notify success
//             toast.success('Profle updated successfully!');
//         } 
//         catch (error) {
//             toast.error('Update failed.');
//         }

//         // Hide form after submission
//         setUserDataShow(false);
//     };

//     // Toggle between showing the form or the user data
//     const changeUserProfile = () => {
//         setUserDataShow(!userDataShow);
//     };

//     return (
//         <div className="flex flex-col mt-4 md:mt-12 lg:mt-16 px-4 md:px-8 lg:px-16 xl:px-24">
//             <h1 className="underline text-2xl md:text-3xl font-bold flex justify-center items-center mt-4">
//                 Welcome Profile Page
//             </h1>
//             <h1 className="items-center border-2 border-black border-b-4 text-lg md:text-xl lg:text-2xl font-medium flex pl-4 md:pl-8 mt-6 md:mt-8">
//                 <FaRegUser/>Profile Info
//             </h1>

//             <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8">
//                 <div className="flex justify-center items-center">
//                     <img 
//                         className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full" 
//                         src={formData.image} 
//                         alt="user_image" 
//                     />
//                     {userDataShow && (
//                         <input 
//                             className="w-full mt-4 md:mt-8" 
//                             type="file" 
//                             accept="image/*"
//                             onChange={handleImageChange} // Handle the image upload
//                         />
//                     )}
//                 </div>

//                 {userDataShow ? (
//                     <div className="w-full md:w-1/2 lg:w-2/3">
//                         <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
//                             <div className="flex flex-col md:flex-row items-start gap-4">
//                                 <label className="font-medium">Email:</label>
//                                 <input
//                                     className="border px-2 py-1 rounded-md w-full md:w-2/3"
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
//                                 <label className="font-medium">Gender:</label>
//                                 <br />
//                                 <input
//                                     className="ml-2"
//                                     type="radio"
//                                     name="gender"
//                                     value="male"
//                                     checked={formData.gender === "male"}
//                                     onChange={handleChange}
//                                 />
//                                 <label>Male</label>
//                                 <input
//                                     type="radio"
//                                     name="gender"
//                                     value="female"
//                                     checked={formData.gender === "female"}
//                                     onChange={handleChange}
//                                 />
//                                 <label>Female</label>
//                             </div>
//                             <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
//                                 <label className="font-medium">Mobile :</label>
//                                 <input
//                                     className="border px-2 py-1 rounded-md w-full md:w-2/3"
//                                     type="number"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
//                                 <label className="font-medium">Address :</label>
//                                 <textarea
//                                     cols={25}
//                                     rows={3}
//                                     className="border px-2 py-1 rounded-md w-full md:w-2/3"
//                                     type="text"
//                                     name="address"
//                                     value={formData.address}
//                                     onChange={handleChange}
//                                 ></textarea>
//                             </div>
//                             <button type="submit" className="w-24 py-2 mt-4 bg-blue-500 text-white rounded-md">
//                                 Update
//                             </button>
//                         </form>
//                     </div>
//                 ) : (
//                     <div className="pb-8 flex flex-col gap-4 mt-4 md:mt-0 md:ml-12">
//                         <div className="flex flex-row gap-4">
//                             <label className="font-medium">User ID :</label>
//                             <p>{user.id}</p>
//                         </div>
//                         <div className="flex flex-row gap-4">
//                             <label className="font-medium">Email :</label>
//                             <p>{user.email}</p>
//                         </div>
//                         <div className="flex flex-row gap-4">
//                             <label className="font-medium">Gender :</label>
//                             <p>{user.gender}</p>
//                         </div>
//                         <div className="flex flex-row gap-4">
//                             <label className="font-medium">Mobile :</label>
//                             <p>{user.phone}</p>
//                         </div>
//                         <div className="flex flex-row gap-4">
//                             <label className="font-medium">Address :</label>
//                             <p>{user.address}</p>
//                         </div>
//                         <button onClick={changeUserProfile} className="w-16 py-2 mt-4 bg-green-500 text-white rounded-md">
//                             Edit
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyProfileStudent;


// after authguard code


import React, { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import { updateUserData } from "../../api"; 
import { FaRegUser } from "react-icons/fa";

const MyProfileStudent = () => {
    const [userDataShow, setUserDataShow] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        id: '',
        gender: '',
        phone: '',
        address: '',
        image: '', 
    });

    const user = JSON.parse(localStorage.getItem('user'));    
    useEffect(() => {
        if (user) {
            setFormData({
                email: user.email,
                id: user.id,
                gender: user.gender,
                phone: user.phone,
                address: user.address,
                image: user.image, 
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                image: reader.result,  
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (formData.email.length === 0) {
            toast.error('Email Required !');
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            toast.error('Email format is not correct');
            return;
        }
        if(formData.phone.length === 0){
            toast.error("Mobile Number Required !");
            return;
        }
        if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
            toast.error('Mobile number must be exactly 10 digits');
            return;
        }
        if (formData.address.length === 0) {
            toast.error('Address Required !');
            return;
        }
        if (formData.address.length < 3) {
            toast.error('Address must be at least 3 characters');
            return;
        }
        
        try {
            const updatedUser = {
                ...user, 
                ...formData 
            };
            await updateUserData(user, formData);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            toast.success('Profle updated successfully!');
        } 
        catch (error) {
            toast.error('Update failed.');
        }
        setUserDataShow(false);
    };
    const changeUserProfile = () => {
        setUserDataShow(!userDataShow);
    };

    return (
        <div className="flex flex-col mt-4 md:mt-12 lg:mt-16 px-4 md:px-8 lg:px-16 xl:px-24">
            <h1 className="underline text-2xl md:text-3xl font-bold flex justify-center items-center mt-4">
                Welcome Profile Page
            </h1>
            <h1 className="items-center border-2 border-black border-b-4 text-lg md:text-xl lg:text-2xl font-medium flex pl-4 md:pl-8 mt-6 md:mt-8">
                <FaRegUser/>Profile Info
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8">
                <div className="flex justify-center items-center">
                    <img 
                        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full" 
                        src={formData.image} 
                        alt="user_image" 
                    />
                    {userDataShow && (
                        <input 
                            className="w-full mt-4 md:mt-8" 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    )}
                </div>

                {userDataShow ? (
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row items-start gap-4">
                                <label className="font-medium">Email:</label>
                                <input
                                    className="border px-2 py-1 rounded-md w-full md:w-2/3"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
                                <label className="font-medium">Gender:</label>
                                <br />
                                <input
                                    className="ml-2"
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                />
                                <label>Male</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                />
                                <label>Female</label>
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
                                <label className="font-medium">Mobile :</label>
                                <input
                                    className="border px-2 py-1 rounded-md w-full md:w-2/3"
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
                                <label className="font-medium">Address :</label>
                                <textarea
                                    cols={25}
                                    rows={3}
                                    className="border px-2 py-1 rounded-md w-full md:w-2/3"
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="w-24 py-2 mt-4 bg-blue-500 text-white rounded-md">
                                Update
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="pb-8 flex flex-col gap-4 mt-4 md:mt-0 md:ml-12">
                        {/* <div className="flex flex-row gap-4">
                            <label className="font-medium">User ID :</label>
                            <p>{user.id}</p>
                        </div> */}
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Email :</label>
                            <p>{user.email}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Gender :</label>
                            <p>{user.gender}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Mobile :</label>
                            <p>{user.phone}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Address :</label>
                            <p>{user.address}</p>
                        </div>
                        <button onClick={changeUserProfile} className="w-16 py-2 mt-4 bg-green-500 text-white rounded-md">
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfileStudent;