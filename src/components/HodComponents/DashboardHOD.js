// show hod leave in calender that wrong


// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const DashboardHOD = () => {
//   const [applyStudentLeave, setApplyStudentLeave] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [totalLeave, setTotalLeave] = useState(12); // Assuming total leave
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [usedLeave, setUsedLeave] = useState(0);
//   const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
//   const [attendancePercentage, setAttendancePercentage] = useState(0);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/hodLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );

//         if (filteredRequests.length > 0) {
//           setApplyStudentLeave(filteredRequests);
//           calculateLeaveData(filteredRequests);
//         } else {
//           setHodError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, [user.name]);

//   const calculateLeaveData = (requests) => {
//     let usedLeavesCount = requests.length;
//     let totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//     setTotalDaysInMonth(totalDaysMonth);

//     // Adjust the used leaves if it exceeds total days in the month
//     if (usedLeavesCount > totalDaysMonth) {
//       usedLeavesCount = totalDaysMonth; // Adjust the used leaves
//     }

//     // Calculate balance leave and attendance percentage
//     const availableLeavesCount = totalLeave - usedLeavesCount;
//     const attendancePercent = ((totalDaysMonth - usedLeavesCount) / totalDaysMonth) * 100;

//     // Update state with calculated values
//     setUsedLeave(usedLeavesCount);
//     setBalanceLeave(availableLeavesCount);
//     setAttendancePercentage(attendancePercent.toFixed(2)); // Keep two decimal places
//   };

//   const events = applyStudentLeave.map((leave) => ({
//     title: `${leave.name}'s leave approved`,
//     start: new Date(leave.fromDate),
//     end: new Date(leave.toDate),
//     allDay: true, // Since it’s a full-day event
//     status: leave.status,
//   }));

//   const eventPropGetter = (event) => {
//     let newStyle = {
//       backgroundColor: 'green', // Default green for approved leaves
//       color: 'white',
//       borderRadius: '0px',
//       border: 'none',
//     };

//     if (event.status !== 'Approved') {
//       newStyle.backgroundColor = 'gray'; // Change color if leave is pending or other status
//     }

//     return {
//       style: newStyle,
//     };
//   };

//   return (
//     <div className='mt-8'>
//       <h3>{hodError ? hodError : <span className='text-3xl font-bold flex justify-center items-center mb-4'>HOD Calendar</span>}</h3>
//       <div className="flex flex-row justify-between items-center">
//           <div>
//             <h1 className="font-bold text-lg">Total Leave : {totalLeave}</h1>
//             <h1 className="font-bold text-lg mb-2">Used Leave : {usedLeave}</h1>
//           </div>
//           <div>
//             <h1 className="font-bold text-lg mb-2">Balance Leave : {balanceLeave}</h1>
//           </div>
//       </div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         eventPropGetter={eventPropGetter} // Add custom event styling
//       />
//     </div>
//   );
// };

// export default DashboardHOD;





// show student leave in calender that true


// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const DashboardHOD = () => {
//   const [applyStudentLeave, setApplyStudentLeave] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [totalLeave, setTotalLeave] = useState(12); // Assuming total leave
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [usedLeave, setUsedLeave] = useState(0);
//   const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
//   const [attendancePercentage, setAttendancePercentage] = useState(0);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user')); // Assuming user is the HOD

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Fetch all leave requests
//         const response = await API.get('/userLeaveRequests');
        
//         // Filter the requests where the requestTo field matches the HOD's name (user.name)
//         const filteredRequests = response.data.filter(
//           (request) => request.requestTo === user.name
//         );

//         if (filteredRequests.length > 0) {
//           setApplyStudentLeave(filteredRequests);
//           calculateLeaveData(filteredRequests);
//         } else {
//           setHodError('No Leave Data Available for this HOD!');
//         }
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, [user.name]);

//   const calculateLeaveData = (requests) => {
//     let usedLeavesCount = requests.length;
//     let totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//     setTotalDaysInMonth(totalDaysMonth);

//     if (usedLeavesCount > totalDaysMonth) {
//       usedLeavesCount = totalDaysMonth;
//     }

//     const availableLeavesCount = totalLeave - usedLeavesCount;
//     const attendancePercent = ((totalDaysMonth - usedLeavesCount) / totalDaysMonth) * 100;

//     setUsedLeave(usedLeavesCount);
//     setBalanceLeave(availableLeavesCount);
//     setAttendancePercentage(attendancePercent.toFixed(2));
//   };

//   const events = applyStudentLeave.map((leave) => ({
//     title: `${leave.name}'s leave ${leave.status}`,
//     start: new Date(leave.fromDate),
//     end: new Date(leave.toDate),
//     allDay: true,
//     status: leave.status,
//   }));

//   const eventPropGetter = (event) => {
//     let newStyle = {
//       backgroundColor: 'green', // Default green for approved leaves
//       color: 'white',
//       borderRadius: '0px',
//       border: 'none',
//     };

//     if (event.status === 'Pending') {
//       newStyle.backgroundColor = 'gray'; // Gray for pending leaves
//     } else if (event.status === 'Reject') {
//       newStyle.backgroundColor = 'red'; // Red for rejected leaves
//     }

//     return {
//       style: newStyle,
//     };
//   };

//   return (
//     <div className='mt-8'>
//       <h3>{hodError ? hodError : <span className='text-3xl font-bold flex justify-center items-center mb-4'>HOD Calendar</span>}</h3>
//       <div className="flex flex-row justify-between items-center">
//         <div>
//           <h1 className="font-bold text-lg">Total Leave: {totalLeave}</h1>
//           <h1 className="font-bold text-lg mb-2">Used Leave: {usedLeave}</h1>
//         </div>
//         <div>
//           <h1 className="font-bold text-lg mb-2">Balance Leave: {balanceLeave}</h1>
//         </div>
//       </div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         eventPropGetter={eventPropGetter} // Custom event styling
//       />
//     </div>
//   );
// };

// export default DashboardHOD;




// show student leave + hod leave in calender that true


import moment from 'moment';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const DashboardHOD = () => {
  const [applyStudentLeave, setApplyStudentLeave] = useState([]);
  const [applyHodLeave, setApplyHodLeave] = useState([]);
  const [hodError, setHodError] = useState('');
  const [totalLeave, setTotalLeave] = useState(12); // Assuming total leave
  const [balanceLeave, setBalanceLeave] = useState(0);
  const [usedLeave, setUsedLeave] = useState(0);
  const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user')); // Assuming user is the HOD

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        // Fetch all student leave requests
        const studentResponse = await API.get('/userLeaveRequests');
        
        // Filter the requests where the requestTo field matches the HOD's name (user.name)
        const filteredStudentRequests = studentResponse.data.filter(
          (request) => request.requestTo === user.name
        );

        // Fetch HOD's own leave requests
        const hodResponse = await API.get('/hodLeaveRequests');

        // Filter HOD's leaves by their name
        const filteredHodRequests = hodResponse.data.filter(
          (request) => request.name === user.name
        );

        // If there are no requests, set an error message
        if (filteredStudentRequests.length === 0 && filteredHodRequests.length === 0) {
          setHodError('No Leave Data Available for this HOD!');
        }

        // Combine both student and HOD leaves
        setApplyStudentLeave(filteredStudentRequests);
        setApplyHodLeave(filteredHodRequests);

        // Calculate leave data
        calculateLeaveData(filteredHodRequests);

      } catch (err) {
        setHodError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, [user.name]);

  const calculateLeaveData = (hodRequests) => {
    let usedLeavesCount = hodRequests.length;
    let totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    setTotalDaysInMonth(totalDaysMonth);

    if (usedLeavesCount > totalDaysMonth) {
      usedLeavesCount = totalDaysMonth;
    }

    const availableLeavesCount = totalLeave - usedLeavesCount;
    const attendancePercent = ((totalDaysMonth - usedLeavesCount) / totalDaysMonth) * 100;

    setUsedLeave(usedLeavesCount);
    setBalanceLeave(availableLeavesCount);
    setAttendancePercentage(attendancePercent.toFixed(2));
  };

  // Combine student and HOD leave events for the calendar
  const events = [
    ...applyStudentLeave.map((leave) => ({
      title: `${leave.name}'s leave ${leave.status}`,
      start: new Date(leave.fromDate),
      end: new Date(leave.toDate),
      allDay: true,
      status: leave.status,
    })),
    ...applyHodLeave.map((leave) => ({
      title: `${leave.name} (HOD) leave ${leave.status}`,
      start: new Date(leave.fromDate),
      end: new Date(leave.toDate),
      allDay: true,
      status: leave.status,
    })),
  ];

  const eventPropGetter = (event) => {
    let newStyle = {
      padding : '1px',
      fontSize : '14px',
      backgroundColor: 'green', // Default green for approved leaves
      color: 'white',
      borderRadius: '0px',
      border: 'none',
    };

    if (event.status === 'Pending') {
      newStyle.backgroundColor = 'gray'; // Gray for pending leaves
    } else if (event.status === 'Reject') {
      newStyle.backgroundColor = 'red'; // Red for rejected leaves
    }

    return {
      style: newStyle,
    };
  };

  return (
    <div className='mt-8 md:mt-16'>
      <h3>{hodError ? hodError : <span className='text-3xl font-bold flex justify-center items-center mb-4'>HOD Calendar</span>}</h3>
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">Total Leave: {totalLeave}</h1>
          <h1 className="font-bold text-lg mb-2">Used Leave: {usedLeave}</h1>
        </div>
        <div>
          <h1 className="font-bold text-lg mb-2">Balance Leave: {balanceLeave}</h1>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventPropGetter} // Custom event styling
      />
    </div>
  );
};

export default DashboardHOD;