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



// import React, { useState } from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import moment from 'moment';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Calendar CSS styles
// import { FaHome, FaBars } from 'react-icons/fa'; // Importing icons from react-icons

// const localizer = momentLocalizer(moment);

// const StudentDashboard = () => {
//     const { studentId } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'));

//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar

//     const handleNavigation = (section) => {
//         setActiveSection(section);
//     };

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const events = [
//         {
//             title: "Yugal Kumbhare's leave approved",
//             start: new Date(2024, 9, 6),
//             end: new Date(2024, 9, 6),
//         },
//         {
//             title: "Dussehra Holiday",
//             start: new Date(2024, 9, 12),
//             end: new Date(2024, 9, 12),
//         },
//         {
//             title: "Tushar Rathod's leave approved",
//             start: new Date(2024, 9, 13),
//             end: new Date(2024, 9, 13),
//         },
//     ];

//     if (user.role !== 'student' || user.id !== studentId) {
//         return <Navigate to="/login" />;
//     }

//     return (
//         <div className="flex h-screen">
//             {/* Sidebar Navigation */}
//             <div
//                 className={`${
//                     sidebarOpen ? 'w-64' : 'w-16'
//                 } bg-gray-800 text-white flex flex-col items-start transition-all duration-300 transform md:translate-x-0 fixed md:relative inset-y-0 z-40`}
//                 style={{ top: '56px' }} // Offset the height of the menu bar
//             >
//                 <div className="py-4 px-6 text-2xl font-bold flex items-center">
//                     {sidebarOpen && <span>Dashboard</span>}

//                     {/* Menu bar visible on all screen sizes */}
//                     <div className="p-4 bg-gray-800 text-white z-50">
//                         <button onClick={toggleSidebar} className="focus:outline-none">
//                             <FaBars size={24} />
//                         </button>
//                     </div>
//                 </div>
//                 <ul className="flex flex-col w-full">
//                     <li
//                         onClick={() => handleNavigation('dashboard')}
//                         className={`py-3 px-6 cursor-pointer w-full flex items-center ${
//                             activeSection === 'dashboard' ? 'bg-red-500' : ''
//                         }`}
//                     >
//                         {sidebarOpen && <span>Dashboard</span>}
//                     </li>
//                     <li
//                         onClick={() => handleNavigation('presence')}
//                         className={`py-3 px-6 cursor-pointer w-full flex items-center ${
//                             activeSection === 'presence' ? 'bg-red-500' : ''
//                         }`}
//                     >
//                         {sidebarOpen && <span>Presence Report</span>}
//                     </li>
//                     <li
//                         onClick={() => handleNavigation('leave')}
//                         className={`py-3 px-6 cursor-pointer w-full flex items-center ${
//                             activeSection === 'leave' ? 'bg-red-500' : ''
//                         }`}
//                     >
//                         {sidebarOpen && <span>Leave</span>}
//                     </li>
//                     <li
//                         onClick={() => handleNavigation('holiday')}
//                         className={`py-3 px-6 cursor-pointer w-full flex items-center ${
//                             activeSection === 'holiday' ? 'bg-red-500' : ''
//                         }`}
//                     >
//                         {sidebarOpen && <span>Holiday</span>}
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content Area */}
//             <div
//                 className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
//                     sidebarOpen ? 'ml-64' : 'ml-16'
//                 }`}
//             >
//                 {activeSection === 'dashboard' && (
//                     <div>
//                         <h1 className="text-3xl font-bold">
//                             Welcome to your Dashboard, Student ID: {studentId}
//                         </h1>
//                         <p className="mt-4 text-lg">
//                             Select options on the left to view reports.
//                         </p>
//                     </div>
//                 )}
//                 {activeSection === 'presence' && (
//                     <div>
//                         <h2 className="text-2xl font-semibold">Presence Report</h2>
//                         <p className="mt-4 text-lg">
//                             Details of the student's presence report will go here.
//                         </p>
//                     </div>
//                 )}
//                 {activeSection === 'leave' && (
//                     <div>
//                         <h2 className="text-2xl font-semibold">Leave Information</h2>
//                         <p className="mt-4 text-lg">
//                             Details of the student's leaves will go here.
//                         </p>
//                     </div>
//                 )}
//                 {activeSection === 'holiday' && (
//                     <div>
//                         <h2 className="text-2xl font-semibold">Holiday Calendar</h2>
//                         {/* React Big Calendar */}
//                         <Calendar
//                             localizer={localizer}
//                             events={events}
//                             startAccessor="start"
//                             endAccessor="end"
//                             style={{ height: 500 }}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StudentDashboard;







//current code

import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Calendar CSS styles
import { FaHome, FaBars } from 'react-icons/fa'; // Importing icons from react-icons

const localizer = momentLocalizer(moment);

const StudentDashboard = () => {
    const { studentId } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    const [activeSection, setActiveSection] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar

    const handleNavigation = (section) => {
        setActiveSection(section);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const events = [
        {
            title: "Yugal Kumbhare's leave approved",
            start: new Date(2024, 9, 6),
            end: new Date(2024, 9, 6),
        },
        {
            title: "Dussehra Holiday",
            start: new Date(2024, 9, 12),
            end: new Date(2024, 9, 12),
        },
        {
            title: "Tushar Rathod's leave approved",
            start: new Date(2024, 9, 13),
            end: new Date(2024, 9, 13),
        },
    ];

    if (user.role !== 'student' || user.id !== studentId) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <div className='bg-red-500 flex flex-row justify-between items-center w-[80%] mx-auto'>
                <h1>Home</h1>
                <h1>Home</h1>
            </div>

            <div className="flex h-screen">
                {/* Sidebar Navigation */}
                <div
                    className={`${
                        sidebarOpen ? 'w-64' : 'w-16'
                    } bg-gray-800 text-white flex flex-col items-start transition-all duration-300 transform md:translate-x-0 fixed md:relative inset-y-0 z-40`}
                    style={{ top: '40px' }} // Offset the height of the menu bar
                >
                    <div className="py-4 px-6 text-2xl font-bold flex items-center">
                        {sidebarOpen && <span>Dashboard</span>}

                        {/* Menu bar visible on all screen sizes */}
                        <div className="p-4 bg-gray-800 text-white z-50">
                            <button onClick={toggleSidebar} className="focus:outline-none">
                                <FaBars size={24} />
                            </button>
                        </div>
                    </div>
                    <ul className="flex flex-col w-full">
                        <li
                            onClick={() => handleNavigation('dashboard')}
                            className={`py-3 px-6 cursor-pointer w-full flex items-center ${
                                activeSection === 'dashboard' ? 'bg-red-500' : ''
                            }`}
                        >
                            {sidebarOpen && <span>Dashboard</span>}
                        </li>
                        <li
                            onClick={() => handleNavigation('presence')}
                            className={`py-3 px-6 cursor-pointer w-full flex items-center ${
                                activeSection === 'presence' ? 'bg-red-500' : ''
                            }`}
                        >
                            {sidebarOpen && <span>Presence Report</span>}
                        </li>
                        <li
                            onClick={() => handleNavigation('leave')}
                            className={`py-3 px-6 cursor-pointer w-full flex items-center ${
                                activeSection === 'leave' ? 'bg-red-500' : ''
                            }`}
                        >
                            {sidebarOpen && <span>Leave</span>}
                        </li>
                        <li
                            onClick={() => handleNavigation('holiday')}
                            className={`py-3 px-6 cursor-pointer w-full flex items-center ${
                                activeSection === 'holiday' ? 'bg-red-500' : ''
                            }`}
                        >
                            {sidebarOpen && <span>Holiday</span>}
                        </li>
                    </ul>
                </div>

                {/* Main Content Area */}
                <div
                    className={`pt-16 flex-1 p-6 overflow-y-auto transition-all duration-300 ${
                        sidebarOpen ? 'ml-64' : 'ml-16'
                    }`}
                >
                    {activeSection === 'dashboard' && (
                        <div>
                            <h1 className="text-3xl font-bold">
                                Welcome to your Dashboard, Student ID: {studentId}
                            </h1>
                            <p className="mt-4 text-lg">
                                Select options on the left to view reports.
                            </p>
                        </div>
                    )}
                    {activeSection === 'presence' && (
                        <div>
                            <h2 className="text-2xl font-semibold">Presence Report</h2>
                            <p className="mt-4 text-lg">
                                Details of the student's presence report will go here.
                            </p>
                        </div>
                    )}
                    {activeSection === 'leave' && (
                        <div>
                            <h2 className="text-2xl font-semibold">Leave Information</h2>
                            <p className="mt-4 text-lg">
                                Details of the student's leaves will go here.
                            </p>
                        </div>
                    )}
                    {activeSection === 'holiday' && (
                        <div>
                            <h2 className="text-2xl font-semibold">Holiday Calendar</h2>
                            {/* React Big Calendar */}
                            <Calendar
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500 }}
                            />
                        </div>
                    )}
                </div>
            </div>  
        </div>
    );
};

export default StudentDashboard;
