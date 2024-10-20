import moment from 'moment';
import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Ensure this is included

const localizer = momentLocalizer(moment);


const DashboardStudent = () => {
  const [applyStudentLeave, setApplyStudentLeave] = useState([]);
  const [studentError, setStudentError] = useState('');

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
        }
        else {
          setStudentError('No Leave Data Availbale !');
        }
      }
      catch (err) {
        setStudentError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, [user.name]);

  const events = applyStudentLeave.map((leave) => ({
    title: `${leave.name}'s leave approved`,
    start: new Date(leave.fromDate),
    end: new Date(leave.toDate),
    allDay: true, // Since it’s a full-day event
    status: leave.status,
  }));
    
  const eventPropGetter = (event) => {
    let newStyle = {
      backgroundColor: 'green', // Default green for approved leaves
      color: 'white',
      borderRadius: '0px',
      border: 'none',
    };

    if (event.status !== 'Approved') {
      newStyle.backgroundColor = 'gray'; // Change color if leave is pending or other status
    }

    return {
      style: newStyle,
    };
  };

  return (
    <div className='mt-8'>
      <h3>{studentError ? studentError : <span className='text-3xl font-bold flex justify-center items-center mb-8'>Student Calendar</span>}</h3>
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