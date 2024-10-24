// before responsive code


// import React, { useState, useEffect, useRef } from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Calendar CSS styles
// import { FaBars } from 'react-icons/fa'; 
// import { IoMdArrowDropdown } from "react-icons/io";
// import DashboardHOD from '../HodComponents/DashboardHOD';
// import MyProfileHOD from '../HodComponents/MyProfileHOD';
// import ApplyForLeaveHOD from '../HodComponents/ApplyForLeaveHOD';
// import ViewLeaveStatusHODStudent from '../HodComponents/ViewLeaveStatusHODStudent';
// import LogoutHOD from '../HodComponents/LogoutHOD';
// import ViewLeaveStatusHOD from '../HodComponents/ViewLeaveStatusHOD';

// const HODDashboard = () => {
//     // const [userDataShow, setUserDataShow] = useState(false);
//     const [isPopupVisible, setIsPopupVisible] = useState(false); // State for the popup menu

//     const { hodId } = useParams();
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

//     if (user.role !== 'hod' || user.id !== hodId) {
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
//                             <div onClick={togglePopup} className="flex items-center cursor-pointer gap-2">
//                                 <img className='goal_circle2' src={`${user.image}`} alt='user_image' />
//                                 <h2 className="text-white text-xl">{user.name}</h2>
//                                 <IoMdArrowDropdown />
//                             </div>
//                             {/* Popup menu */}
//                             {isPopupVisible && (
//                                 <div ref={popupRef} className="absolute mt-40 z-50 w-52">
//                                     <ul className="flex flex-col shadow-xl text-white rounded-md bg-black gap-2 py-2">
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
//                         {activeSection === 'dashboard' && <DashboardHOD/>}
//                         {activeSection === 'myprofile' && <MyProfileHOD/>}
//                         {activeSection === 'applyForLeave' && <ApplyForLeaveHOD/>}
//                         {activeSection === 'viewLeaveStatus' && <ViewLeaveStatusHOD/>}

//                         {/* {activeSection === 'viewLeaveStatus' && (
//                             <>
//                                 <ViewLeaveStatusHOD />
//                                 <ViewLeaveStatusHODStudent />
//                             </>
//                         )} */}
//                         {/* {activeSection === 'viewLeaveStatus' && <ViewLeaveStatusHODStudent/>} */}
//                         {/* {activeSection === 'logout' && (
//                             <LogoutHOD/>
//                         )} */}
//                     </div>
//                 </div>
//             </div>
//             {showLogoutModal && <LogoutHOD onCancel={closeLogoutModal} />}
//         </div>
//     );
// };

// export default HODDashboard;


// after responsive code


import React, { useState, useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Calendar CSS styles
import { FaBars } from 'react-icons/fa'; 
import { IoMdArrowDropdown } from "react-icons/io";
import DashboardHOD from '../HodComponents/DashboardHOD';
import MyProfileHOD from '../HodComponents/MyProfileHOD';
import ApplyForLeaveHOD from '../HodComponents/ApplyForLeaveHOD';
// import ViewLeaveStatusHODStudent from '../HodComponents/ViewLeaveStatusHODStudent';
import LogoutHOD from '../HodComponents/LogoutHOD';
import ViewLeaveStatusHOD from '../HodComponents/ViewLeaveStatusHOD';
import { FaRegUser } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";

const HODDashboard = () => {
    // const [userDataShow, setUserDataShow] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false); // State for the popup menu

    const { hodId } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    const [activeSection, setActiveSection] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar
    const [showLogoutModal, setShowLogoutModal] = useState(false); // New state to handle logout modal
    const popupRef = useRef(null); // Ref to track the popup element

    

    // Hide popup when clicking outside
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

    

    const handleNavigation = (section) => {
        if (section === 'logout') {
            setShowLogoutModal(true); // Show logout modal on logout navigation
        } else {
            setActiveSection(section);
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };
    const closeLogoutModal = () => {
        setShowLogoutModal(false); // Function to close logout modal
    };
    // const events = [
    //     // Events data
    // ];

    if (user.role !== 'hod' || user.id !== hodId) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <div className="h-screen">
                {/* profile page */}
                <div className="md:absolute w-full h-[8%] bg-gray-800 flex flex-row justify-between items-center">
                    <div className='flex flex-row justify-between items-center w-[90%] mx-auto'>
                        <h1 className="text-white"></h1>
                        {/* profile */}
                        <div className="flex flex-row items-center justify-center gap-2">
                            <div onClick={togglePopup} className="flex items-center cursor-pointer gap-2">
                                <img className='goal_circle2 w-8 h-8 rounded-full' src={`${user.image}`} alt='user_image' />
                                <h2 className="text-white text-lg md:text-xl">{user.name}</h2>
                                <IoMdArrowDropdown />
                            </div>
                            {/* Popup menu */}
                            {isPopupVisible && (
                                <div ref={popupRef} className="absolute mt-20 z-50 w-52 bg-black">
                                    <ul className="flex flex-col shadow-xl text-white rounded-md gap-2 py-2">
                                        <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('myprofile')}>
                                            &#9642; &nbsp;My Profile
                                        </li>
                                        <li className="profile_zoom py-2 px-4 cursor-pointer rounded-md" onClick={() => handleNavigation('logout')}>
                                            &#9642; &nbsp;Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex h-[92%]">
                    {/* Sidebar Navigation */}
                    <div className={`bg-gray-800 h-screen text-white flex flex-col items-start transition-all duration-300 fixed inset-y-0 z-40 ${sidebarOpen ? 'w-50' : 'w-0'} md:relative`}>
                        <div className={`py-4 md:py-1 lg:py-1 md:relative px-3 text-xl md:text-2xl font-bold flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>
                            {/* <div className="p-4 text-white z-50 items-center">
                            </div> */}
                            <button onClick={toggleSidebar} className="px-2 py-1 md:p-4 text-white z-50">
                                {/* {sidebarOpen ?  <FaBars size={24} /> :  <FaBars size={30} />} */}
                                <FaBars size={sidebarOpen ? 24 : 24} />
                            </button>
                            {sidebarOpen && (
                                <span className="py-0.5 px-6 cursor-pointer w-full flex items-center" onClick={() => handleNavigation('dashboard')}>
                                    Dashboard
                                </span>
                            )}
                        </div>
                        <ul className={`flex flex-col w-full mt-0`}>
                            {/* <li onClick={() => handleNavigation('dashboard')} className={`py-3 px-6 cursor-pointer w-full flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>{sidebarOpen && <span>Dashboard</span>}</li> */}
                            <li onClick={() => handleNavigation('myprofile')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'myprofile' ? 'bg-red-500' : 'bg-gray-800'}`}>
                                {sidebarOpen && <span className='flex items-center gap-2'><FaRegUser/>My Profile</span>}
                                </li>
                            <li onClick={() => handleNavigation('applyForLeave')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'applyForLeave' ? 'bg-red-500' : 'bg-gray-800'}`}>
                                {sidebarOpen && <span className='flex items-center gap-2'><FaWpforms/>Apply For Leave</span>}
                                </li>
                            <li onClick={() => handleNavigation('viewLeaveStatus')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'viewLeaveStatus' ? 'bg-red-500' : 'bg-gray-800'}`}>
                                {sidebarOpen && <span className='flex items-center gap-2'><GrStatusGood/>View Leave Status</span>}
                                </li>
                            <li onClick={() => handleNavigation('logout')} className={`border-2 border-b-white py-3 ${sidebarOpen ? 'px-4' : 'px-0'} cursor-pointer w-full flex justify-start items-center text-sm md:text-lg font-bold ${activeSection === 'logout' ? 'bg-red-500' : 'bg-gray-800'}`}>
                                {sidebarOpen && <span className='flex items-center gap-2'><IoMdLogOut/>Logout</span>}
                            </li>
                        </ul>
                    </div>

                    {/* Main Content Area */}
                    <div className={`flex-1 p-6 overflow-y-auto ml-0 transition-all duration-300`}>
                        {activeSection === 'dashboard' && <DashboardHOD/>}
                        {activeSection === 'myprofile' && <MyProfileHOD/>}
                        {activeSection === 'applyForLeave' && <ApplyForLeaveHOD/>}
                        {activeSection === 'viewLeaveStatus' && <ViewLeaveStatusHOD/>}

                        {/* {activeSection === 'viewLeaveStatus' && (
                            <>
                                <ViewLeaveStatusHOD />
                                <ViewLeaveStatusHODStudent />
                            </>
                        )} */}
                        {/* {activeSection === 'viewLeaveStatus' && <ViewLeaveStatusHODStudent/>} */}
                        {/* {activeSection === 'logout' && (
                            <LogoutHOD/>
                        )} */}
                    </div>
                </div>
            </div>
            {showLogoutModal && <LogoutHOD onCancel={closeLogoutModal} />}
        </div>
    );
};

export default HODDashboard;