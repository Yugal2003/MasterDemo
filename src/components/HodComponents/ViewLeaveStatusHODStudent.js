
// before totalleave balance leave and attendancePercentage code

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveStatusHOD = () => {

//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [error, setError] = useState('');
//   const [totalLeave, setTotalLeave] = useState(12); // Assuming total leave
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [totalWorkingDays,setTotalWorkingDays] = useState(0);
//   const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
//   const [attendancePercentage, setAttendancePercentage] = useState(0);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));
//   console.log(user.name);

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Replace with your API endpoint
//         const response = await API.get(`/userLeaveRequests?requestTo=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.requestTo === user.name
//         );
//         console.log(filteredRequests);
//         if (filteredRequests) {
//           setLeaveRequests(filteredRequests);
//           calculateLeaveData(filteredRequests);
//         }
//         else {
//           setHodError('No Leave Data Availbale !');
//         }
//       }
//       catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, [user.name]);

//   const calculateLeaveData = (requests) => {
//     let usedLeavesCount = requests.length;
//     console.log(usedLeavesCount);
    
//     let totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//     console.log(totalDaysMonth);
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
//     setBalanceLeave(availableLeavesCount);
//     setTotalWorkingDays(totalDaysMonth - usedLeavesCount); // Ensure this doesn't go negative
//     setAttendancePercentage(attendancePercent.toFixed(2)); // Keep two decimal places

//     console.log("Total Days in Month:", totalDaysMonth);
//     console.log("Used Leaves Count:", usedLeavesCount);
//     console.log("Total Working Days:", totalDaysMonth - usedLeavesCount);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Students Leave List:</h1>
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//             <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequests.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center py-4">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               leaveRequests.map((request,index) => (
//                 <tr key={request.id}>
//                   <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                   <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                   <td className="px-2 py-2 border border-gray-300">{balanceLeave}</td>
//                   <td className="px-2 py-2 border border-gray-300">{attendancePercentage}%</td>
//                   <td className="px-2 py-2 border border-gray-300">
//                     <select className='rounded-md border-2 p-1 border-black font-bold'>
//                       <option className='bg-gray-400 px-2 py-1 rounded-md font-bold'>Select</option>
//                       <option className='bg-gray-400 px-2 py-1 rounded-md font-bold'>Pending</option>
//                       <option className='bg-green-400 px-2 py-1 rounded-md font-bold'>Approved</option>
//                       <option className='bg-red-400 px-2 py-1 rounded-md font-bold'>Reject</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// export default ViewLeaveStatusHOD




// for no reason with 1 data hitesh


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [totalLeave] = useState(12); // Assuming total leave for students

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests`);
//         // Group leave requests by student name
//         const groupedRequests = response.data.reduce((acc, request) => {
//           if (request.name) {  // Check if request has a valid name
//             if (!acc[request.name]) {
//               acc[request.name] = [];
//             }
//             acc[request.name].push(request);
//           }
//           return acc;
//         }, {});
//         setLeaveRequests(groupedRequests);
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const calculateLeaveData = (requests) => {
//     const usedLeavesCount = requests.length;

//     const totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

//     const validUsedLeavesCount = Math.min(usedLeavesCount, totalDaysMonth);
//     const availableLeavesCount = totalLeave - validUsedLeavesCount;
//     const attendancePercent = ((totalDaysMonth - validUsedLeavesCount) / totalDaysMonth) * 100;

//     return {
//       availableLeavesCount,
//       attendancePercent: attendancePercent.toFixed(2),
//       totalWorkingDays: totalDaysMonth - validUsedLeavesCount,
//     };
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//           Students Leave List:
//         </h1>
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(leaveRequests).length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               Object.keys(leaveRequests).map((studentName, index) => {
//                 const studentLeaves = leaveRequests[studentName];
//                 const leaveData = calculateLeaveData(studentLeaves);

//                 return (
//                   <tr key={studentLeaves[0].id}>
//                     <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                     <td className="px-2 py-2 border border-gray-300">{studentName}</td>
//                     <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.availableLeavesCount}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.attendancePercent}%</td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default ViewLeaveStatusHOD;






//for all reason show in one row     => very bad


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [totalLeave] = useState(12); // Assuming total leave for students

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests`);
//         // Group leave requests by student name
//         const groupedRequests = response.data.reduce((acc, request) => {
//           if (request.name) {  // Check if request has a valid name
//             if (!acc[request.name]) {
//               acc[request.name] = {
//                 totalLeave: 0,
//                 reasons: [],
//                 id: request.id, // Assuming ID can be taken from any of the requests
//               };
//             }
//             acc[request.name].totalLeave += 1; // Count the total leave requests
//             acc[request.name].reasons.push(request.reason); // Collect reasons
//           }
//           return acc;
//         }, {});
//         setLeaveRequests(groupedRequests);
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const calculateLeaveData = (leaveCount) => {
//     const availableLeavesCount = totalLeave - leaveCount;
//     const attendancePercent = ((totalLeave - leaveCount) / totalLeave) * 100;

//     return {
//       availableLeavesCount,
//       attendancePercent: attendancePercent.toFixed(2),
//     };
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//           Students Leave List:
//         </h1>
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Total Leave Requests</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Reasons</th> {/* Added Reason Column */}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(leaveRequests).length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center py-4"> {/* Updated colspan to 6 */}
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               Object.keys(leaveRequests).map((studentName, index) => {
//                 const studentData = leaveRequests[studentName];
//                 const leaveData = calculateLeaveData(studentData.totalLeave);
                
//                 return (
//                   <tr key={studentData.id}>
//                     <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                     <td className="px-2 py-2 border border-gray-300">{studentName}</td>
//                     <td className="px-2 py-2 border border-gray-300">{studentData.totalLeave}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.availableLeavesCount}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.attendancePercent}%</td>
//                     <td className="px-2 py-2 border border-gray-300">{studentData.reasons.join(', ')}</td> {/* Concatenate reasons */}
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default ViewLeaveStatusHOD;




// for reason with 8 data hitesh



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [totalLeave] = useState(12); // Assuming total leave for students
//   const [statuses, setStatuses] = useState({}); // To track selected statuses per request

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests`);
//         // Group leave requests by student name
//         const groupedRequests = response.data.reduce((acc, request) => {
//           if (request.name) {  // Check if request has a valid name
//             if (!acc[request.name]) {
//               acc[request.name] = [];
//             }
//             acc[request.name].push(request);
//           }
//           return acc;
//         }, {});
//         setLeaveRequests(groupedRequests);
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const calculateLeaveData = (requests) => {
//     const usedLeavesCount = requests.length;
//     const totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//     const validUsedLeavesCount = Math.min(usedLeavesCount, totalDaysMonth);
//     const availableLeavesCount = totalLeave - validUsedLeavesCount;
//     const attendancePercent = ((totalDaysMonth - validUsedLeavesCount) / totalDaysMonth) * 100;

//     return {
//       availableLeavesCount,
//       attendancePercent: attendancePercent.toFixed(2),
//       totalWorkingDays: totalDaysMonth - validUsedLeavesCount,
//     };
//   };

//   const handleStatusChange = (id, newStatus) => {
//     setStatuses(prevStatuses => ({
//       ...prevStatuses,
//       [id]: newStatus,
//     }));
//   };

//   const getStatusBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//           Students Leave List:
//         </h1>
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Reason</th> 
//               <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(leaveRequests).length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center py-4">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               Object.keys(leaveRequests).map((studentName, index) => {
//                 const studentLeaves = leaveRequests[studentName];
//                 const leaveData = calculateLeaveData(studentLeaves);
                
//                 return studentLeaves.map((leaveRequest) => (
//                   <tr key={leaveRequest.id}>
//                     <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                     <td className="px-2 py-2 border border-gray-300">{studentName}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td> 
//                     <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.availableLeavesCount}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.attendancePercent}%</td>
//                     <td className="px-2 py-2 border border-gray-300">
//                       <select
//                         className={`rounded-md border-2 p-1 font-bold ${getStatusBgColor(statuses[leaveRequest.id])}`}
//                         value={statuses[leaveRequest.id] || 'Pending'}
//                         onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
//                       >
//                         <option value="Pending" className="font-bold">Pending</option>
//                         <option value="Approved" className="font-bold">Approved</option>
//                         <option value="Reject" className="font-bold">Reject</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ));
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default ViewLeaveStatusHOD;




//without hod leave approved or reject


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Navigate} from 'react-router-dom';

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [totalLeave] = useState(12); // Assuming total leave for students
//   const [statuses, setStatuses] = useState({}); // To track selected statuses per request

//   // Simulating logged-in HOD's name; you can replace this with actual logic
//   const user = JSON.parse(localStorage.getItem('user'));  // Change this dynamically based on login

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests`);
//         // Filter requests based on logged-in HOD
//         const filteredRequests = response.data.filter((request) => request.requestTo === user.name);
        
//         // Group leave requests by student name
//         const groupedRequests = filteredRequests.reduce((acc, request) => {
//           if (request.name) {  // Check if request has a valid name
//             if (!acc[request.name]) {
//               acc[request.name] = [];
//             }
//             acc[request.name].push(request);
//           }
//           return acc;
//         }, {});
        
//         setLeaveRequests(groupedRequests);
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const calculateLeaveData = (requests) => {
//     const usedLeavesCount = requests.length;
//     const totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//     const validUsedLeavesCount = Math.min(usedLeavesCount, totalDaysMonth);
//     const availableLeavesCount = totalLeave - validUsedLeavesCount;
//     const attendancePercent = ((totalDaysMonth - validUsedLeavesCount) / totalDaysMonth) * 100;

//     return {
//       availableLeavesCount,
//       attendancePercent: attendancePercent.toFixed(2),
//       totalWorkingDays: totalDaysMonth - validUsedLeavesCount,
//     };
//   };

//   const handleStatusChange = (id, newStatus) => {
//     setStatuses(prevStatuses => ({
//       ...prevStatuses,
//       [id]: newStatus,
//     }));
//   };

//   const getStatusBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   if (user.role !== 'hod') {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//           Students Leave List :
//         </h1>
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Reason</th> 
//               <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(leaveRequests).length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               Object.keys(leaveRequests).map((studentName, index) => {
//                 const studentLeaves = leaveRequests[studentName];
//                 const leaveData = calculateLeaveData(studentLeaves);
                
//                 return studentLeaves.map((leaveRequest) => (
//                   <tr key={leaveRequest.id}>
//                     <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                     <td className="px-2 py-2 border border-gray-300">{studentName}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td> 
//                     <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.availableLeavesCount}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.attendancePercent}%</td>
//                     <td className="px-2 py-2 border border-gray-300">
//                       <select
//                         className={`rounded-md border-2 p-1 font-bold ${getStatusBgColor(statuses[leaveRequest.id])}`}
//                         value={statuses[leaveRequest.id] || 'Pending'}
//                         onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
//                       >
//                         <option value="Pending" className="font-bold">Pending</option>
//                         <option value="Approved" className="font-bold">Approved</option>
//                         <option value="Reject" className="font-bold">Reject</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ));
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveStatusHOD;





//current code 
//with hod leave approved or reject


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';

// const ViewLeaveStatusHODStudent = () => {
  
//   const [studentLeaveRequests, setStudentLeaveRequests] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [totalLeave] = useState(12); // Assuming total leave for students
//   const [statuses, setStatuses] = useState({}); // To track selected statuses per request

//   // Simulating logged-in HOD's name; you can replace this with actual logic
//   const user = JSON.parse(localStorage.getItem('user')); // Change this dynamically based on login

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests`);
//         // Filter requests based on logged-in HOD
//         const filteredRequests = response.data.filter((request) => request.requestTo === user.name);
//         console.log(filteredRequests);
//         // Group leave requests by student name
//         const groupedRequests = filteredRequests.reduce((acc, request) => {
//           if (request.name) {
//             if (!acc[request.name]) {
//               acc[request.name] = [];
//             }
//             acc[request.name].push(request);
//           }
//           return acc;
//         }, {});

//         setStudentLeaveRequests(groupedRequests);
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };
//     // const fetchTotalLeaveApply = async() =>{
//     //   try {
//     //     const response = await API.get(`/userLeaveRequests`);
//     //   } catch (error) {
        
//     //   }
//     // }

//     fetchLeaveRequests();
//     // fetchTotalLeaveApply();
//   }, [user.name]);

//   const calculateLeaveData = (requests) => {
//     const usedLeavesCount = requests.length;
//     const totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//     const validUsedLeavesCount = Math.min(usedLeavesCount, totalDaysMonth);
//     const availableLeavesCount = totalLeave - validUsedLeavesCount;
//     const attendancePercent = ((totalDaysMonth - validUsedLeavesCount) / totalDaysMonth) * 100;

    
//     return {
//       availableLeavesCount,
//       attendancePercent: attendancePercent.toFixed(2),
//       totalWorkingDays: totalDaysMonth - validUsedLeavesCount,
//     };
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       // Find the specific leave request by id
//       const leaveRequest = Object.values(studentLeaveRequests).flat().find((request) => request.id === id);

//       if (leaveRequest) {
//         // Update the status locally
//         setStatuses((prevStatuses) => ({
//           ...prevStatuses,
//           [id]: newStatus,
//         }));

//         // Make an API request to update the status in the db.json
//         await API.patch(`/userLeaveRequests/${id}`, {
//           ...leaveRequest,
//           status: newStatus,
//         });

//         // Refresh the leave requests after the update
//         const response = await API.get(`/userLeaveRequests`);
//         const filteredRequests = response.data.filter((request) => request.requestTo === user.name);
//         const groupedRequests = filteredRequests.reduce((acc, request) => {
//           if (request.name) {
//             if (!acc[request.name]) {
//               acc[request.name] = [];
//             }
//             acc[request.name].push(request);
//           }
//           return acc;
//         }, {});
//         setStudentLeaveRequests(groupedRequests);
//       }
//     } catch (error) {
//       setHodError('Error updating leave status');
//     }
//   };
  
//   const getStatusBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   if (user.role !== 'hod') {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//           Students Leave List:
//         </h1>
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(studentLeaveRequests).length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               Object.keys(studentLeaveRequests).map((studentName, index) => {
//                 const studentLeaves = studentLeaveRequests[studentName];
//                 const leaveData = calculateLeaveData(studentLeaves);

//                 return studentLeaves.map((leaveRequest) => (
//                   <tr key={leaveRequest.id}>
//                     <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                     <td className="px-2 py-2 border border-gray-300">{studentName}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td>
//                     <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.availableLeavesCount}</td>
//                     <td className="px-2 py-2 border border-gray-300">{leaveData.attendancePercent}%</td>
//                     {/* <td className="px-2 py-2 border border-gray-300">
//                       <select
//                         className={`rounded-md border-2 p-1 font-bold ${getStatusBgColor(statuses[leaveRequest.id])}`}
//                         value={statuses[leaveRequest.id] || leaveRequest.status}
//                         onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
//                       >
//                         <option value="Pending" className="font-bold">Pending</option>
//                         <option value="Approved" className="font-bold">Approved</option>
//                         <option value="Reject" className="font-bold">Reject</option>
//                       </select>
//                     </td> */}
//                     <td className="px-2 py-2 border border-gray-300">
//                       <select
//                         className={`rounded-md border-2 p-1 font-bold ${getStatusBgColor(statuses[leaveRequest.id] || leaveRequest.status)}`}
//                         value={statuses[leaveRequest.id] || leaveRequest.status} // Use status from state or server
//                         onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
//                       >
//                         <option value="Pending" className="font-bold">Pending</option>
//                         <option value="Approved" className="font-bold">Approved</option>
//                         <option value="Reject" className="font-bold">Reject</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ));
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveStatusHODStudent;




// after authguard code


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const ViewLeaveStatusHODStudent = () => {
  
  const [studentLeaveRequests, setStudentLeaveRequests] = useState([]);
  const [hodError, setHodError] = useState('');
  const [totalLeave] = useState(12); 
  const [statuses, setStatuses] = useState({}); 

  const user = JSON.parse(localStorage.getItem('user')); 

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await API.get(`/userLeaveRequests`);
        const filteredRequests = response.data.filter((request) => request.requestTo === user.name);
        const groupedRequests = filteredRequests.reduce((acc, request) => {
          if (request.name) {
            if (!acc[request.name]) {
              acc[request.name] = [];
            }
            acc[request.name].push(request);
          }
          return acc;
        }, {});

        setStudentLeaveRequests(groupedRequests);
      } catch (err) {
        setHodError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, [user.name]);

  const calculateLeaveData = (requests) => {
    const usedLeavesCount = requests.length;
    const totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const validUsedLeavesCount = Math.min(usedLeavesCount, totalDaysMonth);
    const availableLeavesCount = totalLeave - validUsedLeavesCount;
    const attendancePercent = ((totalDaysMonth - validUsedLeavesCount) / totalDaysMonth) * 100;

    
    return {
      availableLeavesCount,
      attendancePercent: attendancePercent.toFixed(2),
      totalWorkingDays: totalDaysMonth - validUsedLeavesCount,
    };
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const leaveRequest = Object.values(studentLeaveRequests).flat().find((request) => request.id === id);

      if (leaveRequest) {
        setStatuses((prevStatuses) => ({
          ...prevStatuses,
          [id]: newStatus,
        }));

        await API.patch(`/userLeaveRequests/${id}`, {
          ...leaveRequest,
          status: newStatus,
        });

        const response = await API.get(`/userLeaveRequests`);
        const filteredRequests = response.data.filter((request) => request.requestTo === user.name);
        const groupedRequests = filteredRequests.reduce((acc, request) => {
          if (request.name) {
            if (!acc[request.name]) {
              acc[request.name] = [];
            }
            acc[request.name].push(request);
          }
          return acc;
        }, {});
        setStudentLeaveRequests(groupedRequests);
      }
    } catch (error) {
      setHodError('Error updating leave status');
    }
  };
  
  const getStatusBgColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-400';
      case 'Reject':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

  if (user.role !== 'hod') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
          Students Leave List:
        </h1>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(studentLeaveRequests).length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No leave requests found.
                </td>
              </tr>
            ) : (
              Object.keys(studentLeaveRequests).map((studentName, index) => {
                const studentLeaves = studentLeaveRequests[studentName];
                const leaveData = calculateLeaveData(studentLeaves);

                return studentLeaves.map((leaveRequest) => (
                  <tr key={leaveRequest.id}>
                    <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                    <td className="px-2 py-2 border border-gray-300">{studentName}</td>
                    <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td>
                    <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
                    <td className="px-2 py-2 border border-gray-300">{leaveData.availableLeavesCount}</td>
                    <td className="px-2 py-2 border border-gray-300">{leaveData.attendancePercent}%</td>
                    <td className="px-2 py-2 border border-gray-300">
                      <select
                        className={`rounded-md border-2 p-1 font-bold ${getStatusBgColor(statuses[leaveRequest.id] || leaveRequest.status)}`}
                        value={statuses[leaveRequest.id] || leaveRequest.status} 
                        onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
                      >
                        <option value="Pending" className="font-bold">Pending</option>
                        <option value="Approved" className="font-bold">Approved</option>
                        <option value="Reject" className="font-bold">Reject</option>
                      </select>
                    </td>
                  </tr>
                ));
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLeaveStatusHODStudent;