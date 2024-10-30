// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios'; // Import axios to fetch data dynamically

// const localizer = momentLocalizer(moment);

// const DashboardAdmin = () => {
//   const [events, setEvents] = useState([]);

//   // Fetch the events data dynamically from db.json
//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const userLeaveResponse = await axios.get('http://localhost:3001/userLeaveRequests');
//         const hodLeaveResponse = await axios.get('http://localhost:3001/hodLeaveRequests');

//         const userLeaveRequests = userLeaveResponse.data;
//         const hodLeaveRequests = hodLeaveResponse.data;

//         // Combine both user and HOD leave requests into one event array
//         const combinedEvents = [
//           ...userLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s ${leave.status}`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//           ...hodLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s ${leave.status}`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//         ];

//         // Set the combined events in the state
//         setEvents(combinedEvents);
//       } catch (error) {
//         console.error('Error fetching leave requests:', error);
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   // Function to style the event based on its status
//   const eventStyleGetter = (event) => {
//     let backgroundColor = '';
    
//     switch (event.status) {
//       case 'Approved':
//         backgroundColor = 'green'; // Approved leave
//         break;
//       case 'Reject':
//         backgroundColor = 'red'; // Rejected leave
//         break;
//       case 'Pending':
//         backgroundColor = 'gray'; // Pending leave
//         break;
//       default:
//         backgroundColor = 'blue'; // Default color if no status match
//         break;
//     }

//     return {
//       style: {
//         backgroundColor,
//         color: 'white', // Ensures the text is readable
//         borderRadius: '5px',
//         padding: '3px',
//         border: 'none',
//       },
//     };
//   };

//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 800 }}
//         eventPropGetter={eventStyleGetter} // Apply dynamic styles
//       />
//     </div>
//   );
// };

// export default DashboardAdmin;




// before responsive code


// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios'; // Import axios to fetch data dynamically

// const localizer = momentLocalizer(moment);

// const DashboardAdmin = () => {
//   const [events, setEvents] = useState([]);

//   // Fetch the events data dynamically from db.json
//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const userLeaveResponse = await axios.get('http://localhost:3001/userLeaveRequests');
//         const hodLeaveResponse = await axios.get('http://localhost:3001/hodLeaveRequests');

//         const userLeaveRequests = userLeaveResponse.data;
//         const hodLeaveRequests = hodLeaveResponse.data;

//         // Combine both user and HOD leave requests into one event array
//         const combinedEvents = [
//           ...userLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s (${leave.status})`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//           ...hodLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s (${leave.status})`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//         ];

//         // Set the combined events in the state
//         setEvents(combinedEvents);
//       } catch (error) {
//         console.error('Error fetching leave requests:', error);
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   // Function to style the event based on its status
//   const eventStyleGetter = (event) => {
//     let backgroundColor = '';

//     switch (event.status) {
//       case 'Approved':
//         backgroundColor = 'green'; // Approved leave
//         break;
//       case 'Reject':
//         backgroundColor = 'red'; // Rejected leave
//         break;
//       case 'Pending':
//         backgroundColor = 'gray'; // Pending leave
//         break;
//       default:
//         backgroundColor = 'blue'; // Default color if no status match
//         break;
//     }

//     return {
//       style: {
//         fontSize : '14px',
//         backgroundColor,
//         color: 'white', // Ensures the text is readable
//         borderRadius: '2px',
//         padding: '1px',
//         border: 'none',
//       },
//     };
//   };

//   return (
//     <div className="mt-8">
//         <h1 className="text-3xl font-bold flex justify-center items-center mb-4">Admin Calender</h1>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 580 }}
//         eventPropGetter={eventStyleGetter} // Apply dynamic styles
//         // Display all events on the calendar without collapsing them
//         popup={false} // Ensure no "+ more" popup
//         max={3} // This will ensure all events display within the same day.
//       />
//     </div>
//   );
// };

// export default DashboardAdmin;




// after responsive code

// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios'; // Import axios to fetch data dynamically

// const localizer = momentLocalizer(moment);

// const DashboardAdmin = () => {
//   const [events, setEvents] = useState([]);

//   // Fetch the events data dynamically from db.json
//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const userLeaveResponse = await axios.get('http://localhost:3001/userLeaveRequests');
//         const hodLeaveResponse = await axios.get('http://localhost:3001/hodLeaveRequests');

//         const userLeaveRequests = userLeaveResponse.data;
//         const hodLeaveRequests = hodLeaveResponse.data;

//         // Combine both user and HOD leave requests into one event array
//         const combinedEvents = [
//           ...userLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s (${leave.status})`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//           ...hodLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s (${leave.status})`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//         ];

//         // Set the combined events in the state
//         setEvents(combinedEvents);
//       } catch (error) {
//         console.error('Error fetching leave requests:', error);
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   // Function to style the event based on its status
//   const eventStyleGetter = (event) => {
//     let backgroundColor = '';

//     switch (event.status) {
//       case 'Approved':
//         backgroundColor = 'green'; // Approved leave
//         break;
//       case 'Reject':
//         backgroundColor = 'red'; // Rejected leave
//         break;
//       case 'Pending':
//         backgroundColor = 'gray'; // Pending leave
//         break;
//       default:
//         backgroundColor = 'blue'; // Default color if no status match
//         break;
//     }

//     return {
//       style: {
//         fontSize: '14px',
//         backgroundColor,
//         color: 'white', // Ensures the text is readable
//         borderRadius: '2px',
//         padding: '1px',
//         border: 'none',
//       },
//     };
//   };

//   return (
//     <div className="mt-8 md:mt-16">
//       <h1 className="text-3xl font-bold flex justify-center items-center mb-4">
//         Admin Calendar
//       </h1>
//       <div className="w-full lg:w-11/12 xl:w-10/12 mx-auto">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 580 }}
//           eventPropGetter={eventStyleGetter} // Apply dynamic styles
//           // Display all events on the calendar without collapsing them
//           popup={false} // Ensure no "+ more" popup
//           max={3} // This will ensure all events display within the same day.
//         />
//       </div>
//     </div>
//   );
// };

// export default DashboardAdmin;





// after authguard code

// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios'; 

// const localizer = momentLocalizer(moment);

// const DashboardAdmin = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const userLeaveResponse = await axios.get('http://localhost:3001/userLeaveRequests');
//         const hodLeaveResponse = await axios.get('http://localhost:3001/hodLeaveRequests');

//         const userLeaveRequests = userLeaveResponse.data;
//         const hodLeaveRequests = hodLeaveResponse.data;

//         const combinedEvents = [
//           ...userLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s (${leave.status})`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//           ...hodLeaveRequests.map((leave) => ({
//             title: `${leave.name}'s (${leave.status})`,
//             start: new Date(leave.fromDate),
//             end: new Date(leave.toDate),
//             allDay: true,
//             status: leave.status,
//           })),
//         ];

//         setEvents(combinedEvents);
//       } catch (error) {
//         console.error('Error fetching leave requests:', error);
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const eventStyleGetter = (event) => {
//     let backgroundColor = '';

//     switch (event.status) {
//       case 'Approved':
//         backgroundColor = 'green'; 
//         break;
//       case 'Reject':
//         backgroundColor = 'red'; 
//         break;
//       case 'Pending':
//         backgroundColor = 'gray'; 
//         break;
//       default:
//         backgroundColor = 'blue';
//         break;
//     }

//     return {
//       style: {
//         fontSize: '14px',
//         backgroundColor,
//         color: 'white',
//         borderRadius: '2px',
//         padding: '1px',
//         border: 'none',
//       },
//     };
//   };

//   return (
//     <div className="mt-8 md:mt-16">
//       <h1 className="text-3xl 2xl:text-4xl 2xl:pt-12 font-bold flex justify-center items-center mb-4">
//         Admin Calendar
//       </h1>
//       <div className="w-full lg:w-11/12 xl:w-10/12 mx-auto">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 580 }}
//           eventPropGetter={eventStyleGetter}
//           popup={false} 
//           max={3} 
//         />
//       </div>
//     </div>
//   );
// };

// export default DashboardAdmin;


import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const DashboardAdmin = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const userLeaveResponse = await axios.get('http://localhost:3001/userLeaveRequests');
        const hodLeaveResponse = await axios.get('http://localhost:3001/hodLeaveRequests');

        const userLeaveRequests = userLeaveResponse.data;
        const hodLeaveRequests = hodLeaveResponse.data;

        // Combine user and HOD leave events into a single array
        const combinedEvents = [
          ...userLeaveRequests.map((leave) => ({
            title: `${leave.name}'s (${leave.status})`,
            start: new Date(leave.fromDate),
            end: new Date(leave.toDate),
            allDay: true,
            status: leave.status,
          })),
          ...hodLeaveRequests.map((leave) => ({
            title: `${leave.name}'s (${leave.status})`,
            start: new Date(leave.fromDate),
            end: new Date(leave.toDate),
            allDay: true,
            status: leave.status,
          })),
        ];

        setEvents(combinedEvents);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };

    fetchLeaveRequests();
  }, []);

  // Custom styling for each event based on leave status
  const eventStyleGetter = (event) => {
    let backgroundColor = '';

    switch (event.status) {
      case 'Approved':
        backgroundColor = 'green';
        break;
      case 'Reject':
        backgroundColor = 'red';
        break;
      case 'Pending':
        backgroundColor = 'gray';
        break;
      default:
        backgroundColor = 'blue';
        break;
    }

    return {
      style: {
        fontSize: '14px',
        backgroundColor,
        color: 'white',
        borderRadius: '2px',
        padding: '1px',
        border: 'none',
      },
    };
  };

  return (
    <div className="mt-8 md:mt-16">
      <h1 className="text-3xl 2xl:text-4xl 2xl:pt-12 font-bold flex justify-center items-center mb-4">
        Admin Calendar
      </h1>
      <div className="w-full lg:w-11/12 xl:w-10/12 mx-auto">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 580 }}
          eventPropGetter={eventStyleGetter}
          popup={false} // Disable popup
          max={3} // Limit to display up to 3 overlapping events
        />
      </div>
    </div>
  );
};

export default DashboardAdmin;