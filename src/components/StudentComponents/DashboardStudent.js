
// import moment from 'moment';
// import React,{ useEffect, useState } from 'react'
// import axios from 'axios';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Ensure this is included

// const localizer = momentLocalizer(moment);


// const DashboardStudent = () => {
//   const [applyStudentLeave, setApplyStudentLeave] = useState([]);
//   const [studentError, setStudentError] = useState('');
//   const [error, setError] = useState('');
//   const [totalLeave, setTotalLeave] = useState(12); // Assuming total leave
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [usedLeave, setUsedLeave] = useState(0);
//   const [totalWorkingDays,setTotalWorkingDays] = useState(0);
//   const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
//   const [attendancePercentage, setAttendancePercentage] = useState(0);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         console.log(filteredRequests);
//         if (filteredRequests.length > 0) {
//           setApplyStudentLeave(filteredRequests);
//           calculateLeaveData(filteredRequests);
//         }
//         else {
//           setStudentError('No Leave Data Availbale !');
//         }
//       }
//       catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, [user.name]);


//   const calculateLeaveData = (requests) => {
//     let usedLeavesCount = requests.length;
//     let totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//     setTotalDaysInMonth(totalDaysMonth)

//     // Add a check to prevent negative working days
//     if (usedLeavesCount > totalDaysMonth) {
//         setError("Used leaves cannot exceed total days in the month");
//         usedLeavesCount = totalDaysMonth; // Adjust the used leaves
//     }

//     // Calculate balance leave and attendance percentage
//     let availableLeavesCount = totalLeave - usedLeavesCount;
//     let attendancePercent = ((totalDaysMonth - usedLeavesCount) / totalDaysMonth) * 100;

//     // Update state with calculated values
//     setUsedLeave(usedLeavesCount);
//     setBalanceLeave(availableLeavesCount);
//     setTotalWorkingDays(totalDaysMonth - usedLeavesCount); // Ensure this doesn't go negative
//     setAttendancePercentage(attendancePercent.toFixed(2)); // Keep two decimal places

//     console.log("Total Days in Month:", totalDaysMonth);
//     console.log("Used Leaves Count:", usedLeavesCount);
//     console.log("Total Working Days:", totalDaysMonth - usedLeavesCount);
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
//       <h3>{studentError ? studentError : <span className='text-3xl font-bold flex justify-center items-center mb-4'>Student Calendar</span>}</h3>
//       <div className="flex flex-row justify-between items-center">
//           <div>
//             <h1 className="font-bold text-lg">Total Leave : {totalLeave}</h1>
//             <h1 className="font-bold text-lg mb-2">Used Leave : {usedLeave}</h1>
//           </div>
//           <div>
//             <h1 className="font-bold text-lg mb-2">Balance Leave :{balanceLeave}</h1>
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

// export default DashboardStudent;



// color implement in calender row



import moment from 'moment';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Ensure this is included

const localizer = momentLocalizer(moment);

const DashboardStudent = () => {
  const [applyStudentLeave, setApplyStudentLeave] = useState([]);
  const [studentError, setStudentError] = useState('');
  const [error, setError] = useState('');
  const [totalLeave, setTotalLeave] = useState(12); // Assuming total leave
  const [balanceLeave, setBalanceLeave] = useState(0);
  const [usedLeave, setUsedLeave] = useState(0);
  const [totalWorkingDays, setTotalWorkingDays] = useState(0);
  const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await API.get(`/userLeaveRequests?name=${user.name}`);
        const filteredRequests = response.data.filter(
          (request) => request.name === user.name
        );
        console.log(filteredRequests);
        if (filteredRequests.length > 0) {
          setApplyStudentLeave(filteredRequests);
          calculateLeaveData(filteredRequests);
        } else {
          setStudentError('No Leave Data Available !');
        }
      } catch (err) {
        setStudentError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, [user.name]);

  const calculateLeaveData = (requests) => {
    let usedLeavesCount = requests.length;
    let totalDaysMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();
    setTotalDaysInMonth(totalDaysMonth);

    // Add a check to prevent negative working days
    if (usedLeavesCount > totalDaysMonth) {
      setError('Used leaves cannot exceed total days in the month');
      usedLeavesCount = totalDaysMonth; // Adjust the used leaves
    }

    // Calculate balance leave and attendance percentage
    let availableLeavesCount = totalLeave - usedLeavesCount;
    let attendancePercent =
      ((totalDaysMonth - usedLeavesCount) / totalDaysMonth) * 100;

    // Update state with calculated values
    setUsedLeave(usedLeavesCount);
    setBalanceLeave(availableLeavesCount);
    setTotalWorkingDays(totalDaysMonth - usedLeavesCount); // Ensure this doesn't go negative
    setAttendancePercentage(attendancePercent.toFixed(2)); // Keep two decimal places

    console.log('Total Days in Month:', totalDaysMonth);
    console.log('Used Leaves Count:', usedLeavesCount);
    console.log('Total Working Days:', totalDaysMonth - usedLeavesCount);
  };

  const events = applyStudentLeave.map((leave) => ({
    title: `${leave.name}'s leave ${leave.status.toLowerCase()}`,
    start: new Date(leave.fromDate),
    end: new Date(leave.toDate),
    allDay: true, // Since it’s a full-day event
    status: leave.status,
  }));

  const eventPropGetter = (event) => {
    let newStyle = {
      padding : '1px',
      fontSize : '14px',
      color: 'white',
      borderRadius: '0px',
      border: 'none',
    };

    // Handle leave status for styling
    if (event.status === 'Approved') {
      newStyle.backgroundColor = 'green'; // bg-green-400
    } 
    else if (event.status === 'Reject') {
      newStyle.backgroundColor = 'red'; // bg-red-400
    } 
    else {
      newStyle.backgroundColor = 'gray'; // bg-gray-400
    }

    return {
      style: newStyle,
    };
  };

  return (
    <div className='mt-8'>
      <h3>
        {studentError ? (
          studentError
        ) : (
          <span className='text-3xl font-bold flex justify-center items-center mb-4'>
            Student Calendar
          </span>
        )}
      </h3>
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">Total Leave : {totalLeave}</h1>
          <h1 className="font-bold text-lg mb-2">Used Leave : {usedLeave}</h1>
        </div>
        <div>
          <h1 className="font-bold text-lg mb-2">Balance Leave :{balanceLeave}</h1>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventPropGetter} // Add custom event styling
      />
    </div>
  );
};

export default DashboardStudent;
