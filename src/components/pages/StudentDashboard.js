// old code



// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';

// const StudentDashboard = () => {
//     const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (user.role !== 'student' || user.id !== studentId) {
//         // Redirect or show an error if the user doesn't match
//         return <Navigate to="/login" />; // or display an error message
//     }

//     return (
//         <div>
//             <h1>Welcome to your Dashboard, Student ID: {studentId}</h1>
            
//             <h1>dashboard CALENDER show karo</h1>
//         </div>
//     );
// };


// export default StudentDashboard;




// old code but perfect

// import React, { useState, useEffect } from 'react';
// import { updateUserData } from '../../api';
// import { toast } from 'react-hot-toast';  
// import { Navigate, useParams } from 'react-router-dom';
// import moment from 'moment';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Calendar CSS styles
// import { FaHome, FaBars } from 'react-icons/fa'; 
// import { IoMdArrowDropdown } from "react-icons/io";


// const localizer = momentLocalizer(moment);

// const StudentDashboard = () => {
//     const [userDataShow, setUserDataShow] = useState(false);
//     const [isPopupVisible, setIsPopupVisible] = useState(false); // State for the popup menu
//     const [formData, setFormData] = useState({
//         name: '',
//         id: '',
//         gender: '',
//         phone: '',
//         address: '',
//     });
//     const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));

//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar

//     // Initialize formData with user data when component loads
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

//     const handleNavigation = (section) => {
//         setActiveSection(section);
//     };

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const events = [
//         // Events data
//     ];

//     // Toggle popup visibility
//     const togglePopup = () => {
//         setIsPopupVisible(!isPopupVisible);
//     };

//     if (user.role !== 'student' || user.id !== studentId) {
//         return <Navigate to="/login" />;
//     }

//     return (
//         <div>
//             <div className="h-screen">
//                 {/* profile page */}
//                 <div className="h-[8%] bg-gray-500 flex flex-row justify-between items-center">
//                     <div className='border-2 border-black flex flex-row justify-between items-center w-[90%] mx-auto'>
//                         <h1>Dashboard</h1>
//                         {/* profile */}
//                         <div className="flex flex-row items-center justify-center gap-2">
//                             <img className='goal_circle2' src={`${user.image}`} alt='user_image' />
//                             <div onClick={togglePopup} className="flex items-center cursor-pointer">
//                                 <h2>{user.name}</h2>
//                                 <IoMdArrowDropdown />
//                             </div>
//                             {/* Popup menu */}
//                             {isPopupVisible && (
//                                 <div className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded p-2 z-50">
//                                     <ul className="flex flex-col text-black">
//                                         <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation('myprofile')}>
//                                             My Profile
//                                         </li>
//                                         <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation('logout')}>
//                                             Logout
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex h-[92%] border-2 border-black">
//                     {/* Sidebar Navigation */}
//                     <div className={`${sidebarOpen ? 'w-64' : 'w-22'} bg-gray-800 text-white flex flex-col items-start transition-all border-2 border-black duration-300 transform md:translate-x-0 fixed md:relative inset-y-0 z-40`}>
//                         <div className={`py-4 px-3 text-2xl font-bold flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                             {sidebarOpen && <span className={`py-3 px-6 cursor-pointer w-full flex items-center`} onClick={() => handleNavigation('dashboard')}>Dashboard</span>}
//                             <div className="p-4 text-white z-50 items-center">
//                                 <button onClick={toggleSidebar} className="focus:outline-none">
//                                     {sidebarOpen ? <FaBars size={24} /> : <FaBars size={30} />}
//                                 </button>
//                             </div>
//                         </div>
//                         <ul className="flex flex-col w-full mt-0">
//                             <li onClick={() => handleNavigation('myprofile')} className={`py-3 px-6 cursor-pointer w-full flex justify-start items-center text-lg font-bold ${activeSection === 'myprofile' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>My Profile</span>}</li>
//                             <li onClick={() => handleNavigation('applyForLeave')} className={`py-3 px-6 cursor-pointer w-full flex justify-start items-center text-lg font-bold ${activeSection === 'applyForLeave' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>Apply For Leave</span>}</li>
//                             <li onClick={() => handleNavigation('viewLeaveStatus')} className={`py-3 px-6 cursor-pointer w-full flex justify-start items-center text-lg font-bold ${activeSection === 'viewLeaveStatus' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>View Leave Status</span>}</li>
//                             <li onClick={() => handleNavigation('logout')} className={`py-3 px-6 cursor-pointer w-full flex justify-start items-center text-lg font-bold ${activeSection === 'logout' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>Logout</span>}</li>
//                         </ul>
//                     </div>

//                     {/* Main Content Area */}
//                     <div className={`border-2 border-black pt-4 flex-1 p-6 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
//                         {activeSection === 'dashboard' && (
//                             <div>
//                                 <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} />
//                             </div>
//                         )}
//                         {activeSection === 'myprofile' && (
//                             <div className='flex flex-col'>
//                                 <h1 className="text-3xl font-bold flex flex-col justify-center items-center mt-4">Welcome Dashboard Page</h1>
//                                 <h1 className="border-2 border-black text-2xl font-medium flex flex-col items-start pl-8 mt-8">Profile Info</h1>

//                                 <div className='flex flex-row gap-20 mt-8'>
//                                     <div>
//                                         <img className='goal_circle' src={`${user.image}`} alt='user_image'/>
//                                     </div>
//                                     {
//                                         userDataShow ? (
//                                             <div>
//                                                 <form onSubmit={handleFormSubmit} className='userData_info'>
//                                                     <div className="flex flex-row gap-4 pb-4">
//                                                         <label>User ID :</label>
//                                                         <input type="number" name='id' value={formData.id} onChange={handleChange} />
//                                                     </div>
//                                                     <div className="flex flex-row gap-4">
//                                                         <label>Name :</label>
//                                                         <input type="text" name='name' value={formData.name} onChange={handleChange} />
//                                                     </div>
//                                                     <div className='flex flex-row text-center pt-4 gap-1'>
//                                                         <label>Gender :</label><br/>
//                                                         <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
//                                                         <label className='px-1'>Male</label>
//                                                         <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />
//                                                         <label className='pl-1'>Female</label>
//                                                     </div>
//                                                     <div className="flex flex-row gap-4 pt-4">
//                                                         <label>Mobile :</label>
//                                                         <input type='number' name='phone' value={formData.phone} onChange={handleChange} />
//                                                     </div>
//                                                     <div className="flex flex-row gap-4 pt-4">
//                                                         <label>Address :</label>
//                                                         <textarea name='address' value={formData.address} onChange={handleChange}></textarea>
//                                                     </div>
//                                                     <div className='flex flex-row gap-10 justify-between'>
//                                                         <button type='submit' className='register_button'>Submit</button>
//                                                         <button className='register_button' onClick={changeUserProfile}>Close</button>
//                                                     </div>
//                                                 </form>
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <h3><span className='font-medium'>Name:</span> {formData.name}</h3>
//                                                 <h3><span className='font-medium'>ID:</span> {formData.id}</h3>
//                                                 <h3><span className='font-medium'>Gender:</span> {formData.gender}</h3>
//                                                 <h3><span className='font-medium'>Phone:</span> {formData.phone}</h3>
//                                                 <h3><span className='font-medium'>Address:</span> {formData.address}</h3>
//                                                 <button onClick={changeUserProfile} className='register_button'>Edit Profile</button>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                             </div>
//                         )}
//                         {activeSection === 'applyForLeave' && (
//                             <div>
//                                 <h1>Apply For Leave</h1>
//                             </div>
//                         )}
//                         {activeSection === 'viewLeaveStatus' && (
//                             <div>
//                                 <h1>View Leave Status</h1>
//                             </div>
//                         )}
//                         {activeSection === 'logout' && (
//                             <div>
//                                 <h1>Logout</h1>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentDashboard;








// old but run code


// import React, { useState, useEffect } from 'react';
// import { updateUserData } from '../../api';
// import { toast } from 'react-hot-toast';  
// import { Navigate, useParams } from 'react-router-dom';
// import moment from 'moment';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Calendar CSS styles
// import { FaHome, FaBars } from 'react-icons/fa'; 
// import { IoMdArrowDropdown } from "react-icons/io";


// const localizer = momentLocalizer(moment);

// const StudentDashboard = () => {
//     const [userDataShow,setUserDataShow] = useState(false);
//     const [isPopupVisible, setIsPopupVisible] = useState(false); // State for the popup menu
//     const [formData,setFormData] = useState({
//         name : '',
//         id : '',
//         gender : '',
//         phone : '',
//         address : '',
//     });
//     const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));

//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar

//     // Initialize formData with user data when component loads
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

//     const handleNavigation = (section) => {
//         setActiveSection(section);
//     };

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const togglePopup = () => {
//         setIsPopupVisible(!isPopupVisible);
//     };
//     const events = [
//         // Events data
//     ];

//     if (user.role !== 'student' || user.id !== studentId) {
//         return <Navigate to="/login" />;
//     }

//     return (
//         <div>
//             <div className="h-screen">
//                 {/* profile page */}
//                 <div className="h-[8%] bg-gray-800 flex flex-row justify-between items-center">
//                     <div className='flex flex-row justify-between items-center w-[90%] mx-auto'>
//                         <h1 className="text-white">Dashboard</h1>
//                         {/* profile */}
//                         <div className="flex flex-row items-center justify-center gap-2">
//                              <div onClick={togglePopup} className="flex items-center cursor-pointer gap-2">
//                                 <img className='goal_circle2' src={`${user.image}`} alt='user_image' />
//                                 <h2 className="text-white text-xl">{user.name}</h2>
//                                 <IoMdArrowDropdown />
//                              </div>
//                              {/* Popup menu */}
//                              {isPopupVisible && (
//                                 <div className="absolute mt-40 z-50 w-52">
//                                     <ul className="flex flex-col shadow-xl text-white rounded-md bg-black gap-2 py-2">
//                                         <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('myprofile')}>
//                                         &#9642; &nbsp;My Profile
//                                         </li>
//                                         <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('logout')}>
//                                         &#9642; &nbsp;Logout
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex h-[92%] border-2 border-black">
//                     {/* Sidebar Navigation */}
//                     <div className={`${sidebarOpen ? 'w-64' : 'w-22'} bg-gray-800 text-white flex flex-col items-start transition-all border-2 border-black duration-300 transform md:translate-x-0 fixed md:relative inset-y-0 z-40`}>
//                         <div className={`py-4 px-3 text-2xl font-bold flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                             {sidebarOpen && <span className={`py-3 px-6 cursor-pointer w-full flex items-center`} onClick={() => handleNavigation('dashboard')}>Dashboard</span>}
//                             <div className="p-4 text-white z-50 items-center">
//                                 <button onClick={toggleSidebar} className="focus:outline-none">
//                                     {sidebarOpen ?  <FaBars size={24} /> :  <FaBars size={30} />}
//                                 </button>
//                             </div>
//                         </div>
//                         <ul className="flex flex-col w-full mt-0">
//                             {/* <li onClick={() => handleNavigation('dashboard')} className={`py-3 px-6 cursor-pointer w-full flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>Dashboard</span>}</li> */}
//                             <li onClick={() => handleNavigation('myprofile')} className={`py-3 px-6 cursor-pointer w-full flex justify-start items-center text-lg font-bold ${activeSection === 'myprofile' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>My Profile</span>}</li>
//                             <li onClick={() => handleNavigation('applyForLeave')} className={`py-3 px-6 cursor-pointer w-full flex justify-start  items-center text-lg font-bold ${activeSection === 'applyForLeave' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>Apply For Leave</span>}</li>
//                             <li onClick={() => handleNavigation('viewLeaveStatus')} className={`py-3 px-6 cursor-pointer w-full flex justify-start  items-center text-lg font-bold ${activeSection === 'viewLeaveStatus' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>View Leave Status</span>}</li>
//                             <li onClick={() => handleNavigation('logout')} className={`py-3 px-6 cursor-pointer w-full flex justify-start  items-center text-lg font-bold ${activeSection === 'logout' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>Logout</span>}</li>
//                         </ul>
//                     </div>

//                     {/* Main Content Area */}
//                     <div className={`border-2 border-black pt-4 flex-1 p-6 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
//                         {activeSection === 'dashboard' && (
//                             <div>
//                                 <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} />
//                             </div>
//                         )}
//                         {activeSection === 'myprofile' && (
//                             <div className='flex flex-col'>
//                                 <h1 className="text-3xl font-bold flex flex-col justify-center items-center mt-4">Welcome Dashboard Page</h1>
//                                 <h1 className="border-2 border-black text-2xl font-medium flex flex-col items-start pl-8 mt-8">Profile Info</h1>

//                                 <div className='flex flex-row gap-20 mt-8'>
//                                     <div>
//                                         <img className='goal_circle' src={`${user.image}`} alt='user_image'/>
//                                     </div>
//                                     {
//                                         userDataShow ? (
//                                             <div>
//                                                 <form onSubmit={handleFormSubmit} className='userData_info'>
//                                                     <div className="flex flex-row gap-4 pb-4">
//                                                         <label>User ID :</label>
//                                                         <input type="number" name='id' value={formData.id} onChange={handleChange} />
//                                                     </div>
//                                                     <div className="flex flex-row gap-4">
//                                                         <label>Name :</label>
//                                                         <input type="text" name='name' value={formData.name} onChange={handleChange} />
//                                                     </div>
//                                                     <div className='flex flex-row text-center pt-4 gap-1'>
//                                                         <label>Gender :</label><br/>
//                                                         <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
//                                                         <label className='px-1'>Male</label>
//                                                         <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />
//                                                         <label className='pl-1'>Female</label>
//                                                     </div>
//                                                     <div className="flex flex-row gap-4 pt-4">
//                                                         <label>Mobile :</label>
//                                                         <input type='number' name='phone' value={formData.phone} onChange={handleChange} />
//                                                     </div>
//                                                     <div className='flex flex-row gaps items-center'>
//                                                         <label>Address :</label>
//                                                         <textarea cols={25} rows={3} className='border' type="text" name="address" value={formData.address} onChange={handleChange}></textarea>
//                                                     </div>
//                                                 </form>
//                                                 <button onClick={changeUserProfile} className="buttons">Update</button>
//                                             </div>
//                                         ) : (
//                                             <div className="mt-2">
//                                                 <div className="flex flex-row gap-4 pb-4">
//                                                     <label>User ID :</label>
//                                                     <p>{user.id}</p>
//                                                 </div>
//                                                 <div className="flex flex-row gap-4">
//                                                     <label>Name :</label>
//                                                     <p>{user.name}</p>
//                                                 </div>
//                                                 <div className="flex flex-row gap-4 pt-4">
//                                                     <label>Gender :</label>
//                                                     <p>{user.gender}</p>
//                                                 </div>
//                                                 <div className="flex flex-row gap-4 pt-4">
//                                                     <label>Mobile :</label>
//                                                     <p>{user.phone}</p>
//                                                 </div>
//                                                 <div className="flex flex-row gap-4 pt-4">
//                                                     <label>Address :</label>
//                                                     <p>{user.address}</p>
//                                                 </div>
//                                                 <button onClick={changeUserProfile} className="buttons">Edit</button>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                             </div>
//                         )}
//                         {/* Calendar Section */}
//                         {activeSection === 'applyForLeave' && (
//                             <div className="flex flex-col justify-center items-center">
//                                 <h1 className="text-3xl font-bold">Apply For Leave</h1>
//                                 {/* Your content for the View Leave Status section */}
//                             </div>
//                         )}
//                         {activeSection === 'viewLeaveStatus' && (
//                             <div className="flex flex-col justify-center items-center">
//                                 <h1 className="text-3xl font-bold">View Leave Status</h1>
//                                 {/* Your content for the View Leave Status section */}
//                             </div>
//                         )}
//                         {activeSection === 'logout' && (
//                             <div className="flex flex-col justify-center items-center">
//                                 <h1 className="text-3xl font-bold mb-4">Logout</h1>
//                                 {/* <div className="h-96 w-full">
//                                     <Calendar
//                                         localizer={localizer}
//                                         events={events}
//                                         startAccessor="start"
//                                         endAccessor="end"
//                                         style={{ height: 500 }}
//                                     />
//                                 </div> */}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentDashboard;






// current code



// import React, { useState, useEffect, useRef } from 'react';

// import { Navigate, useParams,useNavigate } from 'react-router-dom';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Calendar CSS styles
// import { FaBars } from 'react-icons/fa'; 
// import { IoMdArrowDropdown } from "react-icons/io";
// import DashboardStudent from '../StudentComponents/DashboardStudent';
// import MyProfileStudent from '../StudentComponents/MyProfileStudent';
// import ApplyForLeaveStudent from '../StudentComponents/ApplyForLeaveStudent';
// import ViewLeaveStatusStudent from '../StudentComponents/ViewLeaveStatusStudent';
// import LogoutStudent from '../StudentComponents/LogoutStudent';
// import { FaRegUser } from "react-icons/fa";
// import { FaWpforms } from "react-icons/fa";
// import { GrStatusGood } from "react-icons/gr";
// import { IoMdLogOut } from "react-icons/io";
// // import ViewLeaveBalanceStudent from '../StudentComponents/ViewLeaveBalanceStudent';

// // const localizer = momentLocalizer(moment);

// const StudentDashboard = () => {
//     const [isPopupVisible, setIsPopupVisible] = useState(false); // State for the popup menu
//     const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));

//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar
//     const [showLogoutModal, setShowLogoutModal] = useState(false); // New state to handle logout modal
//     const popupRef = useRef(null); // Ref to track the popup element


//     // Hide popup when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setIsPopupVisible(false);
//             }
//         };
//         if (isPopupVisible) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isPopupVisible]);


//     const handleNavigation = (section) => {
//         if (section === 'logout') {
//             setShowLogoutModal(true); // Show logout modal on logout navigation
//         } else {
//             setActiveSection(section);
//         }
//     };

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const togglePopup = () => {
//         setIsPopupVisible(!isPopupVisible);
//     };

//     const closeLogoutModal = () => {
//         setShowLogoutModal(false); // Function to close logout modal
//     };
//     // const events = [
//     //     // Events data
//     // ];

//     if (user.role !== 'student') {
//         return <Navigate to="/login" />;
//     }

//     return (
//         <div>
//             <div className="h-screen">
//                 {/* profile page */}
//                 <div className="md:absolute w-full h-[8%] bg-gray-800 flex flex-row justify-between items-center">
//                     <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
//                         <h1 className="text-white"></h1> {/* Dashboard */}
//                         {/* profile */}
//                         <div className="flex flex-row items-center justify-center gap-2">
//                             <div onClick={togglePopup} className="flex items-center cursor-pointer gap-2">
//                                 <img className='goal_circle2 w-8 h-8 rounded-full' src={`${user.image}`} alt='user_image' />
//                                 <h2 className="text-white text-lg md:text-xl">{user.name}</h2>
//                                 <IoMdArrowDropdown />
//                             </div>
//                             {/* Popup menu */}
//                             {isPopupVisible && (
//                                 <div ref={popupRef} className="absolute mt-20 z-50 w-52 bg-black">
//                                     <ul className="flex flex-col shadow-xl text-white rounded-md gap-2 py-2">
//                                         <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('myprofile')}>
//                                             &#9642; &nbsp;My Profile
//                                         </li>
//                                         <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('logout')}>
//                                             &#9642; &nbsp;Logout
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex h-[92%]">
//                     {/* Sidebar Navigation */}
//                     <div className={`bg-gray-800 h-screen text-white flex flex-col items-start transition-all duration-300 fixed inset-y-0 z-40 ${sidebarOpen ? 'w-50' : 'w-0'} md:relative`}>
//                         <div className={`py-2.5 md:py-1 lg:py-1.5 md:relative px-3 text-xl md:text-2xl font-bold flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                             <button onClick={toggleSidebar} className="px-2 py-1 md:p-4 text-white z-50">
//                                 <FaBars size={sidebarOpen ? 24 : 24} />
//                             </button>
//                             {sidebarOpen && (
//                                 <span className="py-0.5 px-6 cursor-pointer w-full flex items-center" onClick={() => handleNavigation('dashboard')}>
//                                     Dashboard
//                                 </span>
//                             )}
//                             {/* <div className="p-4 text-white z-50 items-center">
//                             </div> */}
//                         </div>
//                         <ul className="flex flex-col w-full mt-0">
//                             <li onClick={() => handleNavigation('myprofile')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'myprofile' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><FaRegUser/>My Profile</span>}
//                             </li>
//                             <li onClick={() => handleNavigation('applyForLeave')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'applyForLeave' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><FaWpforms/>Apply For Leave</span>}
//                             </li>
//                             <li onClick={() => handleNavigation('viewLeaveStatus')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'viewLeaveStatus' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><GrStatusGood/>View Leave Status</span>}
//                             </li>
//                             {/* <li onClick={() => handleNavigation('viewLeaveBalance')} className={`py-3 px-6 cursor-pointer w-full flex justify-start  items-center text-lg font-bold ${activeSection === 'viewLeaveBalance' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>View Leave Balance</span>}</li> */}
//                             <li onClick={() => handleNavigation('logout')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'logout' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><IoMdLogOut/>Logout</span>}
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Main Content Area */}
//                     <div className={`flex-1 p-6 overflow-y-auto ml-0 transition-all duration-300`}>
//                         {activeSection === 'dashboard' && <DashboardStudent/>}
//                         {activeSection === 'myprofile' && <MyProfileStudent/>}
//                         {activeSection === 'applyForLeave' && <ApplyForLeaveStudent/>}
//                         {activeSection === 'viewLeaveStatus' && <ViewLeaveStatusStudent/>}
//                         {/* {activeSection === 'viewLeaveBalance' && <ViewLeaveBalanceStudent/>} */}
//                     </div>
//                 </div>
//             </div>
//             {/* Render Logout modal */}
//             {showLogoutModal && <LogoutStudent onCancel={closeLogoutModal} />}
//         </div>
//     );
// };

// export default StudentDashboard;



// after authguard code


// import React, { useState, useEffect, useRef } from 'react';

// import { Navigate, useParams } from 'react-router-dom';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; 
// import { FaBars } from 'react-icons/fa'; 
// import { IoMdArrowDropdown } from "react-icons/io";
// import DashboardStudent from '../StudentComponents/DashboardStudent';
// import MyProfileStudent from '../StudentComponents/MyProfileStudent';
// import ApplyForLeaveStudent from '../StudentComponents/ApplyForLeaveStudent';
// import ViewLeaveStatusStudent from '../StudentComponents/ViewLeaveStatusStudent';
// import LogoutStudent from '../StudentComponents/LogoutStudent';
// import { FaRegUser } from "react-icons/fa";
// import { FaWpforms } from "react-icons/fa";
// import { GrStatusGood } from "react-icons/gr";
// import { IoMdLogOut } from "react-icons/io";

// const StudentDashboard = () => {
//     const [isPopupVisible, setIsPopupVisible] = useState(false);
//     const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));

//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [sidebarOpen, setSidebarOpen] = useState(true); 
//     const [showLogoutModal, setShowLogoutModal] = useState(false); 
//     const popupRef = useRef(null); 


//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setIsPopupVisible(false);
//             }
//         };
//         if (isPopupVisible) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isPopupVisible]);


//     const handleNavigation = (section) => {
//         if (section === 'logout') {
//             setShowLogoutModal(true); 
//         } else {
//             setActiveSection(section);
//         }
//     };

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const togglePopup = () => {
//         setIsPopupVisible(!isPopupVisible);
//     };

//     const closeLogoutModal = () => {
//         setShowLogoutModal(false); 
//     };

//     if (user.role !== 'student') {
//         return <Navigate to="/" />;
//     }

//     return (
//         <div>
//             <div className="h-screen">
//                 {/* profile page */}
//                 <div className="md:absolute w-full h-[8%] bg-gray-800 flex flex-row justify-between items-center">
//                     <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
//                         <h1 className="text-white"></h1> {/* Dashboard */}
//                         {/* profile */}
//                         <div className="flex flex-row items-center justify-center gap-2">
//                             <div onClick={togglePopup} className="flex items-center cursor-pointer gap-2">
//                                 <img className='goal_circle2 w-8 h-8 rounded-full' src={`${user.image}`} alt='user_image' />
//                                 <h2 className="text-white text-lg md:text-xl">{user.name}</h2>
//                                 <IoMdArrowDropdown />
//                             </div>
//                             {/* Popup menu */}
//                             {isPopupVisible && (
//                                 <div ref={popupRef} className="absolute mt-20 z-50 w-52 bg-black">
//                                     <ul className="flex flex-col shadow-xl text-white rounded-md gap-2 py-2">
//                                         <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('myprofile')}>
//                                             &#9642; &nbsp;My Profile
//                                         </li>
//                                         <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('logout')}>
//                                             &#9642; &nbsp;Logout
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex h-[92%]">
//                     {/* Sidebar Navigation */}
//                     <div className={`bg-gray-800 h-screen text-white flex flex-col items-start transition-all duration-300 fixed inset-y-0 z-40 ${sidebarOpen ? 'w-50' : 'w-0'} md:relative`}>
//                         <div className={`py-3.5 md:py-1 lg:py-0.6 xl:py-1 2xl:py-2 md:relative px-3 text-xl md:text-xl lg:text-xl xl:text-3xl font-bold flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                             <button onClick={toggleSidebar} className="px-2 py-1 md:p-4 text-white z-50">
//                                 <FaBars size={sidebarOpen ? 24 : 24} />
//                             </button>
//                             {sidebarOpen && (
//                                 <span className="py-0.5 px-6 cursor-pointer w-full flex items-center" onClick={() => handleNavigation('dashboard')}>
//                                     Dashboard
//                                 </span>
//                             )}
//                         </div>
//                         <ul className="flex flex-col w-full mt-0">
//                             <li onClick={() => handleNavigation('myprofile')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'myprofile' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><FaRegUser/>My Profile</span>}
//                             </li>
//                             <li onClick={() => handleNavigation('applyForLeave')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'applyForLeave' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><FaWpforms/>Apply For Leave</span>}
//                             </li>
//                             <li onClick={() => handleNavigation('viewLeaveStatus')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'viewLeaveStatus' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><GrStatusGood/>View Leave Status</span>}
//                             </li>
//                             <li onClick={() => handleNavigation('logout')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'logout' ? 'bg-red-500' : 'bg-gray-800'}`}>
//                                 {sidebarOpen && <span className='flex items-center gap-2'><IoMdLogOut/>Logout</span>}
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Main Content Area */}
//                     <div className={`flex-1 p-6 overflow-y-auto ml-0 transition-all duration-300`}>
//                         {activeSection === 'dashboard' && <DashboardStudent/>}
//                         {activeSection === 'myprofile' && <MyProfileStudent/>}
//                         {activeSection === 'applyForLeave' && <ApplyForLeaveStudent/>}
//                         {activeSection === 'viewLeaveStatus' && <ViewLeaveStatusStudent/>}
//                     </div>
//                 </div>
//             </div>
//             {showLogoutModal && <LogoutStudent onCancel={closeLogoutModal} />}
//         </div>
//     );
// };

// export default StudentDashboard;



// without red-bg-500 color 

// import React, { useState, useRef } from 'react';
// import { Navigate, useParams, Link, Outlet } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { IoMdArrowDropdown } from "react-icons/io";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { FaRegUser, FaWpforms } from "react-icons/fa";
// import { IoMdLogOut } from "react-icons/io";
// import LogoutStudent from '../StudentComponents/LogoutStudent';

// const StudentDashboard = () => {
//     const [isPopupVisible, setIsPopupVisible] = useState(false);
//     const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));
//     const [sidebarOpen, setSidebarOpen] = useState(true);
//     const [showLogoutModal, setShowLogoutModal] = useState(false); 
//     const popupRef = useRef(null); 

//     if (user.role !== 'student' || user.id !== studentId) {
//         return <Navigate to="/" />;
//     }

//     const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//     const togglePopup = () => setIsPopupVisible(!isPopupVisible);
//     const closeLogoutModal = () => setShowLogoutModal(false);

//     return (
//         <div className="h-screen">
//             {/* Top bar */}
//             <div className="md:absolute w-full h-[8%] bg-gray-800 flex flex-row justify-between items-center">
//                 <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
//                     <h1 className="text-white"></h1> {/* Dashboard */}
//                     {/* Profile Popup */}
//                     <div className="flex flex-row items-center justify-center gap-2">
//                         <div onClick={togglePopup} className="flex items-center cursor-pointer gap-2">
//                             <img className="goal_circle2 w-8 h-8 rounded-full" src={`${user.image}`} alt="user_image" />
//                             <h2 className="text-white text-lg md:text-xl">{user.name}</h2>
//                             <IoMdArrowDropdown />
//                         </div>
//                         {isPopupVisible && (
//                             <div ref={popupRef} className="absolute mt-20 z-50 w-52 bg-black">
//                                 <ul className="flex flex-col shadow-xl text-white rounded-md gap-2 py-2">
//                                     <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md">
//                                         <Link to={`/student-dashboard/${studentId}/myprofile`}>My Profile</Link>
//                                     </li>
//                                     <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => setShowLogoutModal(true)}>
//                                         Logout
//                                     </li>
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Sidebar */}
//             <div className="flex h-[92%]">
//                 <div className={`bg-gray-800 h-screen text-white flex flex-col items-start transition-all duration-300 fixed inset-y-0 z-40 ${sidebarOpen ? 'w-50' : 'w-0'} md:relative`}>
//                         <div className={`py-4 md:py-1 lg:py-1.5 md:relative px-3 text-xl md:text-2xl font-bold flex items-center`}>
//                             <button onClick={toggleSidebar} className="px-2 py-1 md:p-4 text-white z-50">
//                                 <FaBars size={sidebarOpen ? 24 : 24} />
//                             </button>
//                             <li className="py-0.5 px-2 cursor-pointer w-full flex items-center">
//                                 <Link to={`/student-dashboard/${studentId}`} className="flex items-center gap-2">Dashboard</Link>
//                             </li>
//                         </div>
//                         <ul className="flex flex-col w-full mt-0">
//                             {/* <li className="border-2 border-b-white py-3 cursor-pointer">
//                                 <Link to={`/admin-dashboard/${adminId}`} className="flex items-center gap-2"><FaRegUser />Dashboard</Link>
//                             </li> */}
//                             <li className="border-2 border-b-white py-3 cursor-pointer">
//                                 <Link to={`/student-dashboard/${studentId}/myprofile`} className={`flex items-center gap-2`}><FaRegUser />{sidebarOpen ? "My Profile" : ""}</Link>
//                             </li>
//                             <li className="border-2 border-b-white py-3 cursor-pointer">
//                                 <Link to={`/student-dashboard/${studentId}/applyForLeaveStudent`} className={`flex items-center gap-2`}><FaWpforms />{sidebarOpen ? "Apply For Leave" : ""}</Link>
//                             </li>
//                             <li className="border-2 border-b-white py-3 cursor-pointer">
//                                 <Link to={`/student-dashboard/${studentId}/viewLeaveStatusStudent`} className={`flex items-center gap-2`}><HiOutlineDocumentReport />{sidebarOpen ? "View Leave Status" : ""}</Link>
//                             </li>
//                             <li className="border-2 border-b-white py-3 cursor-pointer">
//                                 <div onClick={() => setShowLogoutModal(true)} className={`flex items-center gap-2`}><IoMdLogOut />{sidebarOpen ? "Logout" : ""}</div>
//                             </li>
//                         </ul>
//                 </div>

//                 {/* Content Area */}
//                 <div className="flex-1 p-6 overflow-y-auto ml-0 transition-all duration-300">
//                     <Outlet />
//                 </div>
//             </div>

//             {showLogoutModal && <LogoutStudent onCancel={closeLogoutModal} />}
//         </div>
//     );
// };

// export default StudentDashboard;







// with red-bg-500 color

import React, { useState, useRef,useEffect } from 'react';
import { Navigate, useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRegUser, FaWpforms } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import LogoutStudent from '../StudentComponents/LogoutStudent';

const StudentDashboard = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { studentId } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showLogoutModal, setShowLogoutModal] = useState(false); 
    const popupRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupVisible(false);
            }
        };
        if (isPopupVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupVisible]);

    if (user.role !== 'student' || user.id !== studentId) {
        return <Navigate to="/" />;
    }

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const togglePopup = () => setIsPopupVisible(!isPopupVisible);
    const closeLogoutModal = () => setShowLogoutModal(false);

    // Helper function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="h-screen">
            {/* Top bar */}
            <div className="md:absolute w-full h-[8%] bg-gray-800 flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
                    <h1 className="text-white"></h1>{/* Dashboard */}
                    {/* Profile Popup */}
                    <div className="flex flex-row items-center justify-center gap-2">
                        <div onClick={togglePopup} className="flex items-center cursor-pointer gap-2">
                            <img className="goal_circle2 w-8 h-8 rounded-full" src={`${user.image}`} alt="user_image" />
                            <h2 className="text-white text-lg md:text-xl">{user.name}</h2>
                            <IoMdArrowDropdown />
                        </div>
                        {isPopupVisible && (
                            <div ref={popupRef} className="absolute mt-20 z-50 w-52 bg-black">
                                <ul className="flex flex-col shadow-xl text-white rounded-md gap-2 py-2">
                                    <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md">
                                        <Link to={`/student-dashboard/${studentId}/myprofile`}>My Profile</Link>
                                    </li>
                                    <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => setShowLogoutModal(true)}>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="flex h-[92%]">
                <div className={`bg-gray-800 h-screen text-white flex flex-col items-start transition-all duration-300 fixed inset-y-0 z-40 ${sidebarOpen ? 'w-50' : 'w-0'} md:relative`}>
                    <div className={`py-4 md:py-1 lg:py-1.5 md:relative px-3 text-xl md:text-2xl font-bold flex items-center ${isActive(`/student-dashboard/${studentId}`) ? 'bg-red-500' : ''}`}>
                        <button onClick={toggleSidebar} className="px-2 py-1 md:p-4 text-white z-50">
                            <FaBars size={sidebarOpen ? 24 : 24} />
                        </button>
                        <li className={`py-0.5 px-2 cursor-pointer w-full flex items-center`}>
                            <Link to={`/student-dashboard/${studentId}`} className="flex items-center gap-2">Dashboard</Link>
                        </li>
                    </div>
                    <ul className="flex flex-col w-full mt-0">
                        <li className={`border-2 border-b-white py-3 cursor-pointer ${isActive(`/student-dashboard/${studentId}/myprofile`) ? 'bg-red-500' : ''}`}>
                            <Link to={`/student-dashboard/${studentId}/myprofile`} className={`flex items-center gap-2`}><FaRegUser />{sidebarOpen ? "My Profile" : ""}</Link>
                        </li>
                        <li className={`border-2 border-b-white py-3 cursor-pointer ${isActive(`/student-dashboard/${studentId}/applyForLeaveStudent`) ? 'bg-red-500' : ''}`}>
                            <Link to={`/student-dashboard/${studentId}/applyForLeaveStudent`} className={`flex items-center gap-2`}><FaWpforms />{sidebarOpen ? "Apply For Leave" : ""}</Link>
                        </li>
                        <li className={`border-2 border-b-white py-3 cursor-pointer ${isActive(`/student-dashboard/${studentId}/viewLeaveStatusStudent`) ? 'bg-red-500' : ''}`}>
                            <Link to={`/student-dashboard/${studentId}/viewLeaveStatusStudent`} className={`flex items-center gap-2`}><HiOutlineDocumentReport />{sidebarOpen ? "View Leave Status" : ""}</Link>
                        </li>
                        <li className="border-2 border-b-white py-3 cursor-pointer">
                            <div onClick={() => setShowLogoutModal(true)} className={`flex items-center gap-2`}><IoMdLogOut />{sidebarOpen ? "Logout" : ""}</div>
                        </li>
                    </ul>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 overflow-y-auto ml-0 transition-all duration-300">
                    <Outlet />
                </div>
            </div>

            {showLogoutModal && <LogoutStudent onCancel={closeLogoutModal} />}
        </div>
    );
};

export default StudentDashboard;