import React, { useState, useEffect, useRef } from 'react';

import { Navigate, useParams } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css'; 
import { FaBars } from 'react-icons/fa'; 
import { IoMdArrowDropdown } from "react-icons/io";
import DashboardStudent from '../StudentComponents/DashboardStudent';
import MyProfileStudent from '../StudentComponents/MyProfileStudent';
import ApplyForLeaveStudent from '../StudentComponents/ApplyForLeaveStudent';
import ViewLeaveStatusStudent from '../StudentComponents/ViewLeaveStatusStudent';
import LogoutStudent from '../StudentComponents/LogoutStudent';
import { FaRegUser } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";

const StudentDashboard = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { studentId } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    const [activeSection, setActiveSection] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true); 
    const [showLogoutModal, setShowLogoutModal] = useState(false); 
    const popupRef = useRef(null); 


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
            setShowLogoutModal(true); 
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
        setShowLogoutModal(false); 
    };

    if (user.role !== 'student') {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <div className="h-screen">
                {/* profile page */}
                <div className="md:absolute w-full h-[8%] bg-gray-800 flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
                        <h1 className="text-white"></h1> {/* Dashboard */}
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
                        <div className={`py-3.5 md:py-1 lg:py-0.6 xl:py-1 2xl:py-2 md:relative px-3 text-xl md:text-xl lg:text-xl xl:text-3xl font-bold flex items-center ${activeSection === 'dashboard' ? 'bg-red-500' : 'bg-gray-800'}`}>
                            <button onClick={toggleSidebar} className="px-2 py-1 md:p-4 text-white z-50">
                                <FaBars size={sidebarOpen ? 24 : 24} />
                            </button>
                            {sidebarOpen && (
                                <span className="py-0.5 px-6 cursor-pointer w-full flex items-center" onClick={() => handleNavigation('dashboard')}>
                                    Dashboard
                                </span>
                            )}
                        </div>
                        <ul className="flex flex-col w-full mt-0">
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
                        {activeSection === 'dashboard' && <DashboardStudent/>}
                        {activeSection === 'myprofile' && <MyProfileStudent/>}
                        {activeSection === 'applyForLeave' && <ApplyForLeaveStudent/>}
                        {activeSection === 'viewLeaveStatus' && <ViewLeaveStatusStudent/>}
                    </div>
                </div>
            </div>
            {showLogoutModal && <LogoutStudent onCancel={closeLogoutModal} />}
        </div>
    );
};

export default StudentDashboard;