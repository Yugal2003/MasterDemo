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
  const [totalLeave, setTotalLeave] = useState(12);
  const [balanceLeave, setBalanceLeave] = useState(0);
  const [usedLeave, setUsedLeave] = useState(0);
  const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user')); 

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const studentResponse = await API.get('/userLeaveRequests');
        
        const filteredStudentRequests = studentResponse.data.filter(
          (request) => request.requestTo === user.name
        );

        const hodResponse = await API.get('/hodLeaveRequests');

        const filteredHodRequests = hodResponse.data.filter(
          (request) => request.name === user.name
        );

        if (filteredStudentRequests.length === 0 && filteredHodRequests.length === 0) {
          setHodError('No Leave Data Available for this HOD!');
        }

        setApplyStudentLeave(filteredStudentRequests);
        setApplyHodLeave(filteredHodRequests);

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
      backgroundColor: 'green', 
      color: 'white',
      borderRadius: '0px',
      border: 'none',
    };

    if (event.status === 'Pending') {
      newStyle.backgroundColor = 'gray'; 
    } else if (event.status === 'Reject') {
      newStyle.backgroundColor = 'red'; 
    }

    return {
      style: newStyle,
    };
  };

  return (
    <div className='mt-8 md:mt-16'>
      <h3>{hodError ? hodError : <span className='text-3xl 2xl:text-4xl 2xl:pt-12 font-bold flex justify-center items-center mb-4'>HOD Calendar</span>}</h3>
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
        eventPropGetter={eventPropGetter} 
      />
    </div>
  );
};

export default DashboardHOD;