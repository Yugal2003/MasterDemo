

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


// current code 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';

// const ViewLeaveStatusHOD = () => {
//   const [studentLeaveRequests, setStudentLeaveRequests] = useState({});
//   const [hodError, setHodError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const totalLeave = 12; // Constant total leave for every student
//   const [statuses, setStatuses] = useState({});

//   const user = JSON.parse(localStorage.getItem('user'));

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
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
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLeaveRequests();
//   }, [user.name]);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       const leaveRequest = Object.values(studentLeaveRequests).flat().find((request) => request.id === id);

//       if (leaveRequest) {
//         setStatuses((prevStatuses) => ({
//           ...prevStatuses,
//           [id]: newStatus,
//         }));

//         await API.patch(`/userLeaveRequests/${id}`, {
//           ...leaveRequest,
//           status: newStatus,
//         });

//         setStudentLeaveRequests((prevRequests) => {
//           const updatedRequests = { ...prevRequests };
//           const studentName = leaveRequest.name;
//           if (updatedRequests[studentName]) {
//             updatedRequests[studentName] = updatedRequests[studentName].map((req) =>
//               req.id === id ? { ...req, status: newStatus } : req
//             );
//           }
//           return updatedRequests;
//         });
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
//       {hodError && <div className="text-red-500">{hodError}</div>}
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//             Students Leave List:
//           </h1>
//           <table className="min-w-full table-auto border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                 {/* <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th> */}
//                 <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 {/* <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {Object.keys(studentLeaveRequests).length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4">
//                     No leave requests found.
//                   </td>
//                 </tr>
//               ) : (
//                 Object.keys(studentLeaveRequests).map((studentName, index) => {
//                   const studentLeaves = studentLeaveRequests[studentName];
//                   const usedLeavesCount = studentLeaves.length; // Total leaves taken by the student
//                   console.log(usedLeavesCount);

//                   return studentLeaves.map((leaveRequest) => (
//                     <tr key={leaveRequest.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{studentName}</td>
//                       <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{leaveRequest.leaveType}</td>
//                       {/* <td className="px-2 py-2 border border-gray-300">{usedLeavesCount}</td>  */}
//                       <td className="px-2 py-2 border border-gray-300">
//                         <select
//                           className={`rounded-md border-2 p-1 ${getStatusBgColor(leaveRequest.status)}`}
//                           value={statuses[leaveRequest.id] || leaveRequest.status}
//                           onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
//                         >
//                           <option value="Pending">Pending</option>
//                           <option value="Approved">Approved</option>
//                           <option value="Reject">Reject</option>
//                         </select>
//                       </td>
//                       {/* <td className="px-2 py-2 border border-gray-300">{totalLeave}</td> */}
//                     </tr>
//                   ));
//                 })
//               )}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveStatusHOD;



// this code is show student all hod requestTo leaves
// that wrong bcz hod can cancel leave only their students not other hod leaves



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';

// const ViewLeaveStatusHODStudent = () => {
//   const [studentLeaveRequests, setStudentLeaveRequests] = useState({});
//   const [hodError, setHodError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const user = JSON.parse(localStorage.getItem('user'));

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests`);
//         const groupedRequests = response.data.reduce((acc, request) => {
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
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLeaveRequests();
//   }, []);

//   const calculateUsedLeaves = (requests) => {
//     return requests.length; // Total leaves taken by the student
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       const leaveRequest = Object.values(studentLeaveRequests).flat().find((request) => request.id === id);

//       if (leaveRequest) {
//         await API.patch(`/userLeaveRequests/${id}`, {
//           ...leaveRequest,
//           status: newStatus,
//         });

//         setStudentLeaveRequests((prevRequests) => {
//           const updatedRequests = { ...prevRequests };
//           const studentName = leaveRequest.name;
//           if (updatedRequests[studentName]) {
//             updatedRequests[studentName] = updatedRequests[studentName].map((req) =>
//               req.id === id ? { ...req, status: newStatus } : req
//             );
//           }
//           return updatedRequests;
//         });
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
//       {hodError && <div className="text-red-500">{hodError}</div>}
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//             Students Leave List:
//           </h1>
//           <table className="min-w-full table-auto border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Attendance %</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.keys(studentLeaveRequests).length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4">
//                     No leave requests found.
//                   </td>
//                 </tr>
//               ) : (
//                 Object.keys(studentLeaveRequests).map((studentName, index) => {
//                   const studentLeaves = studentLeaveRequests[studentName];
//                   const usedLeavesCount = calculateUsedLeaves(studentLeaves); // Total leaves taken by the student
//                   const totalRemainingLeave = 12 - usedLeavesCount;
//                   const attendancePercentage = (totalRemainingLeave / 12) * 100;

//                   return studentLeaves.map((leaveRequest) => (
//                     <tr key={leaveRequest.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{studentName}</td>
//                       <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{leaveRequest.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">12</td> {/* Total leaves for the student */}
//                       <td className="px-2 py-2 border border-gray-300">{usedLeavesCount}</td> {/* Show used leaves */}
//                       <td className="px-2 py-2 border border-gray-300">{attendancePercentage.toFixed(2)}%</td> {/* Show used leaves */}
//                       <td className="px-2 py-2 border border-gray-300">
//                         <select
//                           className={`rounded-md border-2 p-1 ${getStatusBgColor(leaveRequest.status)}`}
//                           value={leaveRequest.status}
//                           onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
//                         >
//                           <option value="Pending">Pending</option>
//                           <option value="Approved">Approved</option>
//                           <option value="Reject">Reject</option>
//                         </select>
//                       </td>
//                     </tr>
//                   ));
//                 })
//               )}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveStatusHODStudent;




// after authguard code


// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import { CiEdit } from "react-icons/ci";

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
//   const [deleteRequestId, setDeleteRequestId] = useState(null); // ID of the leave request to delete

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get(`/hodLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);

//         if (filteredRequests.length === 0) {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       await API.delete(`/hodLeaveRequests/${deleteRequestId}`);
//       // Remove the deleted leave request from the state
//       setLeaveRequests((prevRequests) =>
//         prevRequests.filter((request) => request.id !== deleteRequestId)
//       );
//       setIsModalOpen(false); // Close the modal after deleting
//     } catch (error) {
//       setError('Failed to delete the leave request');
//     }
//   };

//   const openModal = (id) => {
//     setDeleteRequestId(id);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setDeleteRequestId(null);
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: 'No',
//         accessor: (row, i) => i + 1,
//       },
//       {
//         Header: 'Reason',
//         accessor: 'reason',
//       },
//       {
//         Header: 'Leave Type',
//         accessor: 'leaveType',
//       },
//       {
//         Header: 'Leave From',
//         accessor: 'fromDate',
//       },
//       {
//         Header: 'Leave To',
//         accessor: 'toDate',
//       },
//       {
//         Header: 'Request To',
//         accessor: 'requestTo',
//       },
//       {
//         Header: 'Status',
//         accessor: 'status',
//         Cell: ({ value, row }) => (
//           <div className="flex items-center">
//             <span
//               className={`px-2 py-1 rounded ${
//                 value === 'Pending'
//                   ? 'bg-gray-400'
//                   : value === 'Approved'
//                   ? 'bg-green-400'
//                   : value === 'Reject'
//                   ? 'bg-red-400'
//                   : ''
//               }`}
//             >
//               {value}
//             </span>
//             <button className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"><CiEdit size={20}/></button>
//             {value === 'Pending' && (
//               <button
//                 onClick={() => openModal(row.original.id)} // Open the modal on click
//                 className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
//               >
//                 <MdDelete size={20}/>
//               </button>
//             )}
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const tableInstance = useTable({ columns, data: leaveRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">HOD Leave List:</h1>
//         </div>

//         <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map((column) => (
//                   <th
//                     {...column.getHeaderProps()}
//                     className="px-2 py-2 border border-gray-300 text-left"
//                   >
//                     {column.render('Header')}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()}>
//                     {row.cells.map((cell) => (
//                       <td {...cell.getCellProps()} className="px-2 py-2 border border-gray-300">
//                         {cell.render('Cell')}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Inline Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded p-6 w-80">
//             <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
//             <p className="mb-4">Are you sure to Delete Leave Request?</p>
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveStatusHOD;


// without pagination code but perfect code

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import toast from 'react-hot-toast';

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [error, setError] = useState('');
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [deleteRequestId, setDeleteRequestId] = useState(null);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editData, setEditData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get('/hodLeaveRequests');
//         console.log('API Response:', response.data);  // Log API response
//         if (response.data) {
//           const filteredRequests = response.data.filter(
//             (request) => request.name === user.id  // Ensure 'name' matches user.name
//           );
//           console.log('Filtered Requests:', filteredRequests);  // Log filtered data
//           setLeaveRequests(filteredRequests);

//           if (filteredRequests.length === 0) {
//             setError('No Leave Data Available!');
//           }
//         } else {
//           setError('No data received from API!');
//         }
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, [user.name]);

//   const handleDelete = async () => {
//     try {
//       await API.delete(`/hodLeaveRequests/${deleteRequestId}`);
//       setLeaveRequests((prevRequests) =>
//         prevRequests.filter((request) => request.id !== deleteRequestId)
//       );
//       setIsDeleteModalOpen(false);
//       toast.success("Leave Deleted Successfully!");
//     } catch (error) {
//       setError('Failed to delete the leave request');
//     }
//   };

//   const openDeleteModal = (id) => {
//     setDeleteRequestId(id);
//     setIsDeleteModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setDeleteRequestId(null);
//   };

//   const openEditModal = (request) => {
//     setEditData(request);
//     setIsEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setIsEditModalOpen(false);
//     setEditData({});
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditSubmit = async () => {
//     // Check if the Reason is empty
//     if (!editData.reason) {
//       toast.error("Reason is required!");
//       return;
//     }
//     try {
//       await API.put(`/hodLeaveRequests/${editData.id}`, editData);
//       setLeaveRequests((prevRequests) =>
//         prevRequests.map((request) =>
//           request.id === editData.id ? editData : request
//         )
//       );
//       setIsEditModalOpen(false);
//       toast.success("Leave Updated Successfully!");
//     } catch (error) {
//       setError('Failed to update the leave request');
//     }
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: 'No',
//         accessor: (row, i) => i + 1,
//       },
//       {
//         Header: 'Reason',
//         accessor: 'reason',
//       },
//       {
//         Header: 'Leave Type',
//         accessor: 'leaveType',
//       },
//       {
//         Header: 'Leave From',
//         accessor: 'fromDate',
//       },
//       {
//         Header: 'Leave To',
//         accessor: 'toDate',
//       },
//       {
//         Header: 'Request To',
//         accessor: 'requestTo',
//       },
//       {
//         Header: 'Status',
//         accessor: 'status',
//         Cell: ({ value, row }) => (
//           <div className="flex items-center">
//             <span
//               className={`px-2 py-1 rounded ${
//                 value === 'Pending'
//                   ? 'bg-gray-400'
//                   : value === 'Approved'
//                   ? 'bg-green-400'
//                   : value === 'Reject'
//                   ? 'bg-red-400'
//                   : ''
//               }`}
//             >
//               {value}
//             </span>
//             {value === 'Pending' && (
//               <>
//                 <button onClick={() => openEditModal(row.original)} className="ml-1 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700">
//                   <CiEdit size={20} />
//                 </button>
//                 <button
//                   onClick={() => openDeleteModal(row.original.id)}
//                   className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
//                 >
//                   <MdDelete size={20} />
//                 </button>
//               </>
//             )}
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const tableInstance = useTable({ columns, data: leaveRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">HOD Leave List:</h1>
//         </div>

//         <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map((column) => (
//                   <th
//                     {...column.getHeaderProps()}
//                     className="px-2 py-2 border border-gray-300 text-left"
//                   >
//                     {column.render('Header')}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">
//                   {error || 'No leave requests found.'}
//                 </td>
//               </tr>
//             ) : (
//               rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()}>
//                     {row.cells.map((cell) => (
//                       <td {...cell.getCellProps()} className="px-2 py-2 border border-gray-300">
//                         {cell.render('Cell')}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Delete Modal */}
//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded p-6 w-80">
//             <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
//             <p className="mb-4">Are you sure to Delete Leave Request?</p>
//             <div className="flex justify-end space-x-2">
//               <button onClick={closeDeleteModal} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
//               <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded p-6 w-80">
//             <h1 className="text-xl font-bold mb-4">Edit Leaves</h1>
//             <div className="mb-4">
//               <label className="block mb-2">Reason</label>
//               <input
//                 type="text"
//                 name="reason"
//                 value={editData.reason || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2">Leave From</label>
//               <input
//                 type="date"
//                 name="fromDate"
//                 value={editData.fromDate || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2">Leave To</label>
//               <input
//                 type="date"
//                 name="toDate"
//                 value={editData.toDate || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2">Leave Type</label>
//               <input
//                 type="text"
//                 name="leaveType"
//                 value={editData.leaveType || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               />
//             </div>

//             <div className="flex justify-end space-x-2">
//               <button onClick={closeEditModal} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
//               <button onClick={handleEditSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveStatusHOD;

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import toast from 'react-hot-toast';

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [error, setError] = useState('');
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [deleteRequestId, setDeleteRequestId] = useState(null);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editData, setEditData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get('/hodLeaveRequests');
//         console.log('API Response:', response.data);  // Log API response
//         if (response.data) {
//           const filteredRequests = response.data.filter(
//             (request) => request.name === user.id  // Ensure 'name' matches user.name
//           );
//           console.log('Filtered Requests:', filteredRequests);  // Log filtered data
//           setLeaveRequests(filteredRequests);

//           if (filteredRequests.length === 0) {
//             setError('No Leave Data Available!');
//           }
//         } else {
//           setError('No data received from API!');
//         }
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, [user.name]);

//   const handleDelete = async () => {
//     try {
//       await API.delete(`/hodLeaveRequests/${deleteRequestId}`);
//       setLeaveRequests((prevRequests) =>
//         prevRequests.filter((request) => request.id !== deleteRequestId)
//       );
//       setIsDeleteModalOpen(false);
//       toast.success("Leave Deleted Successfully!");
//     } catch (error) {
//       setError('Failed to delete the leave request');
//     }
//   };

//   const openDeleteModal = (id) => {
//     setDeleteRequestId(id);
//     setIsDeleteModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setDeleteRequestId(null);
//   };

//   const openEditModal = (request) => {
//     setEditData(request);
//     setIsEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setIsEditModalOpen(false);
//     setEditData({});
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditSubmit = async () => {
//     // Check if the Reason is empty
//     if (!editData.reason) {
//       toast.error("Reason is required!");
//       return;
//     }
//     try {
//       await API.put(`/hodLeaveRequests/${editData.id}`, editData);
//       setLeaveRequests((prevRequests) =>
//         prevRequests.map((request) =>
//           request.id === editData.id ? editData : request
//         )
//       );
//       setIsEditModalOpen(false);
//       toast.success("Leave Updated Successfully!");
//     } catch (error) {
//       setError('Failed to update the leave request');
//     }
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: 'No',
//         accessor: (row, i) => i + 1,
//       },
//       {
//         Header: 'Reason',
//         accessor: 'reason',
//       },
//       {
//         Header: 'Leave Type',
//         accessor: 'leaveType',
//       },
//       {
//         Header: 'Leave From',
//         accessor: 'fromDate',
//       },
//       {
//         Header: 'Leave To',
//         accessor: 'toDate',
//       },
//       {
//         Header: 'Request To',
//         accessor: 'requestTo',
//       },
//       {
//         Header: 'Status',
//         accessor: 'status',
//         Cell: ({ value, row }) => (
//           <div className="flex items-center">
//             <span
//               className={`px-2 py-1 rounded ${
//                 value === 'Pending'
//                   ? 'bg-gray-400'
//                   : value === 'Approved'
//                   ? 'bg-green-400'
//                   : value === 'Reject'
//                   ? 'bg-red-400'
//                   : ''
//               }`}
//             >
//               {value}
//             </span>
//             {value === 'Pending' && (
//               <>
//                 <button onClick={() => openEditModal(row.original)} className="ml-1 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700">
//                   <CiEdit size={20} />
//                 </button>
//                 <button
//                   onClick={() => openDeleteModal(row.original.id)}
//                   className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
//                 >
//                   <MdDelete size={20} />
//                 </button>
//               </>
//             )}
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const tableInstance = useTable({ columns, data: leaveRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">HOD Leave List:</h1>
//         </div>

//         <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map((column) => (
//                   <th
//                     {...column.getHeaderProps()}
//                     className="px-2 py-2 border border-gray-300 text-left"
//                   >
//                     {column.render('Header')}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">
//                   {error || 'No leave requests found.'}
//                 </td>
//               </tr>
//             ) : (
//               rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()}>
//                     {row.cells.map((cell) => (
//                       <td {...cell.getCellProps()} className="px-2 py-2 border border-gray-300">
//                         {cell.render('Cell')}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Delete Modal */}
//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded p-6 w-80">
//             <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
//             <p className="mb-4">Are you sure to Delete Leave Request?</p>
//             <div className="flex justify-end space-x-2">
//               <button onClick={closeDeleteModal} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
//               <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded p-6 w-80">
//             <h1 className="text-xl font-bold mb-4">Edit Leaves</h1>
//             <div className="mb-4">
//               <label className="block mb-2">Reason</label>
//               <input
//                 type="text"
//                 name="reason"
//                 value={editData.reason || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2">Leave From</label>
//               <input
//                 type="date"
//                 name="fromDate"
//                 value={editData.fromDate || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2">Leave To</label>
//               <input
//                 type="date"
//                 name="toDate"
//                 value={editData.toDate || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-2">Leave Type</label>
//               <select
//                 name="leaveType"
//                 value={editData.leaveType || ''}
//                 onChange={handleEditChange}
//                 className="px-4 py-2 border border-gray-300 rounded w-full"
//               >
//                 <option value="Full Day">Full Day</option>
//                 <option value="First Half">First Half</option>
//                 <option value="Second Half">Second Half</option>
//               </select>
//             </div>

//             <div className="flex justify-end space-x-2">
//               <button onClick={closeEditModal} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
//               <button onClick={handleEditSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveStatusHOD;





// with pagination code

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import toast from 'react-hot-toast';

// const ViewLeaveStatusHOD = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [error, setError] = useState('');
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [deleteRequestId, setDeleteRequestId] = useState(null);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editData, setEditData] = useState({});
  
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5); // You can adjust this number as needed

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get('/hodLeaveRequests');
//         console.log('API Response:', response.data);  // Log API response
//         if (response.data) {
//           const filteredRequests = response.data.filter(
//             (request) => request.name === user.id  // Ensure 'name' matches user.name
//           );
//           console.log('Filtered Requests:', filteredRequests);  // Log filtered data
//           setLeaveRequests(filteredRequests);

//           if (filteredRequests.length === 0) {
//             setError('No Leave Data Available!');
//           }
//         } else {
//           setError('No data received from API!');
//         }
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, [user.name]);

//   const handleDelete = async () => {
//     try {
//       await API.delete(`/hodLeaveRequests/${deleteRequestId}`);
//       setLeaveRequests((prevRequests) =>
//         prevRequests.filter((request) => request.id !== deleteRequestId)
//       );
//       setIsDeleteModalOpen(false);
//       toast.success("Leave Deleted Successfully!");
//     } catch (error) {
//       setError('Failed to delete the leave request');
//     }
//   };

//   const openDeleteModal = (id) => {
//     setDeleteRequestId(id);
//     setIsDeleteModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setDeleteRequestId(null);
//   };

//   const openEditModal = (request) => {
//     setEditData(request);
//     setIsEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setIsEditModalOpen(false);
//     setEditData({});
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditSubmit = async () => {
//     if (!editData.reason) {
//       toast.error("Reason is required!");
//       return;
//     }
//     try {
//       await API.put(`/hodLeaveRequests/${editData.id}`, editData);
//       setLeaveRequests((prevRequests) =>
//         prevRequests.map((request) =>
//           request.id === editData.id ? editData : request
//         )
//       );
//       setIsEditModalOpen(false);
//       toast.success("Leave Updated Successfully!");
//     } catch (error) {
//       setError('Failed to update the leave request');
//     }
//   };

//   // Pagination logic
//   const indexOfLastRequest = currentPage * itemsPerPage;
//   const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
//   const currentRequests = leaveRequests.slice(indexOfFirstRequest, indexOfLastRequest);

//   const totalPages = Math.ceil(leaveRequests.length / itemsPerPage);
  
//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: 'No',
//         accessor: (row, i) => i + 1,
//       },
//       {
//         Header: 'Reason',
//         accessor: 'reason',
//       },
//       {
//         Header: 'Leave Type',
//         accessor: 'leaveType',
//       },
//       {
//         Header: 'Leave From',
//         accessor: 'fromDate',
//       },
//       {
//         Header: 'Leave To',
//         accessor: 'toDate',
//       },
//       {
//         Header: 'Request To',
//         accessor: 'requestTo',
//       },
//       {
//         Header: 'Status',
//         accessor: 'status',
//         Cell: ({ value, row }) => (
//           <div className="flex items-center">
//             <span
//               className={`px-2 py-1 rounded ${
//                 value === 'Pending'
//                   ? 'bg-gray-400'
//                   : value === 'Approved'
//                   ? 'bg-green-400'
//                   : value === 'Reject'
//                   ? 'bg-red-400'
//                   : ''
//               }`}
//             >
//               {value}
//             </span>
//             {value === 'Pending' && (
//               <>
//                 <button onClick={() => openEditModal(row.original)} className="ml-1 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700">
//                   <CiEdit size={20} />
//                 </button>
//                 <button
//                   onClick={() => openDeleteModal(row.original.id)}
//                   className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
//                 >
//                   <MdDelete size={20} />
//                 </button>
//               </>
//             )}
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const tableInstance = useTable({ columns, data: currentRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">HOD Leave List:</h1>
//           <select className="max-w-36 mt-4 mb-6 flex justify-left items-center text-md font-bold">
//             <option>Sort By</option>
//             <option>Sort By Date</option>
//           </select>
//         </div>

//         <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map((column) => (
//                   <th
//                     {...column.getHeaderProps()}
//                     className="px-2 py-2 border border-gray-300 text-left"
//                   >
//                     {column.render('Header')}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">
//                   {error || 'No leave requests found.'}
//                 </td>
//               </tr>
//             ) : (
//               rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()}>
//                     {row.cells.map((cell) => (
//                       <td {...cell.getCellProps()} className="px-2 py-2 border border-gray-300">
//                         {cell.render('Cell')}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex justify-center space-x-2 mt-4">
//           <button
//             onClick={() => handlePageClick(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:bg-gray-200"
//           >
//             {'<'}
//           </button>
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageClick(index + 1)}
//               className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageClick(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:bg-gray-200"
//           >
//             {'>'}
//           </button>
//         </div>
//       </div>

      // {/* Delete Modal */}
      // {isDeleteModalOpen && (
      //   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      //     <div className="bg-white px-4 py-8 rounded-lg shadow-lg">
      //       <h3 className="text-lg font-semibold">Are you sure you want to delete request?</h3>
      //       <div className="flex mt-4">
      //         <button
      //           onClick={closeDeleteModal}
      //           className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
      //         >
      //           Cancel
      //         </button>
      //         <button
      //           onClick={handleDelete}
      //           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
      //         >
      //           Delete
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // )}

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white px-12 py-12 rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold">Edit Leave Request</h3>
//             <div className="mt-4">
//               <label className="block text-sm">Reason</label>
//               <input
//                 type="text"
//                 name="reason"
//                 value={editData.reason}
//                 onChange={handleEditChange}
//                 className="border px-2 py-1 w-full mb-2"
//                 placeholder="Reason for leave"
//               />

//               <label className="block text-sm">Leave From</label>
//               <input
//                 type="date"
//                 name="fromDate"
//                 value={editData.fromDate}
//                 onChange={handleEditChange}
//                 className="border px-2 py-1 w-full mb-2"
//               />

//               <label className="block text-sm">Leave To</label>
//               <input
//                 type="date"
//                 name="toDate"
//                 value={editData.toDate}
//                 onChange={handleEditChange}
//                 className="border px-2 py-1 w-full mb-2"
//               />

//               <label className="block text-sm">Leave Type</label>
//               <select
//                 name="leaveType"
//                 value={editData.leaveType}
//                 onChange={handleEditChange}
//                 className="border px-2 py-1 w-full mb-2"
//               >
//                 <option value="Full Day">Full Day</option>
//                 <option value="First Half">First Half</option>
//                 <option value="Second Half">Second Half</option>
//               </select>
//             </div>
//             <div className="flex mt-4">
//               <button
//                 onClick={handleEditSubmit}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
//               >
//                 Save Changes
//               </button>
//               <button
//                 onClick={closeEditModal}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveStatusHOD;



import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import toast from 'react-hot-toast';

const ViewLeaveStatusHOD = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [error, setError] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteRequestId, setDeleteRequestId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    reason: '',
    fromDate: '',
    toDate: '',
    leaveType: ''
  });
  const [sortOrder, setSortOrder] = useState(''); // Added state for sorting
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // You can adjust this number as needed

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const response = await API.get('/hodLeaveRequests');
        console.log('API Response:', response.data);  // Log API response
        if (response.data) {
          const filteredRequests = response.data.filter(
            (request) => request.name === user.id  // Ensure 'name' matches user.name
          );
          console.log('Filtered Requests:', filteredRequests);  // Log filtered data
          setLeaveRequests(filteredRequests);

          if (filteredRequests.length === 0) {
            setError('No Leave Data Available!');
          }
        } else {
          setError('No data received from API!');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching leave requests');
      }
    };

    fetchLeaveData();
  }, [user.name]);

  const handleDelete = async () => {
    try {
      await API.delete(`/hodLeaveRequests/${deleteRequestId}`);
      setLeaveRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== deleteRequestId)
      );
      setIsDeleteModalOpen(false);
      toast.success("Leave Deleted Successfully!");
    } catch (error) {
      setError('Failed to delete the leave request');
    }
  };

  const openDeleteModal = (id) => {
    setDeleteRequestId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteRequestId(null);
  };

  const openEditModal = (request) => {
    setEditData(request);  // Pre-fill with the selected request data
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditData({
      reason: '',
      fromDate: '',
      toDate: '',
      leaveType: ''
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async () => {
    if (!editData.reason) {
      toast.error("Reason is required!");
      return;
    }
  
    // Convert date strings to Date objects for comparison
    const fromDate = new Date(editData.fromDate);
    const toDate = new Date(editData.toDate);
  
    if (fromDate > toDate) {
      toast.error("'From' date cannot be later than the 'To' date.");
      return;
    }
  
    try {
      await API.put(`/hodLeaveRequests/${editData.id}`, editData);
      setLeaveRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === editData.id ? editData : request
        )
      );
      setIsEditModalOpen(false);
      toast.success("Leave Updated Successfully!");
    } catch (error) {
      setError('Failed to update the leave request');
    }
  };

  // Sorting logic by Date
  // const handleSortByDate = (e) => {
  //   if (e.target.value === 'Sort By Date') {
  //     setSortOrder(''); // Reset sort order when "Sort By" is selected
  //   } else {
  //     setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  //   }
  // };

  // const sortedRequests = useMemo(() => {
  //   if (sortOrder === '') return leaveRequests;

  //   return [...leaveRequests].sort((a, b) => {
  //     const dateA = new Date(a.fromDate);
  //     const dateB = new Date(b.fromDate);

  //     if (sortOrder === 'asc') {
  //       return dateA - dateB;
  //     } else {
  //       return dateB - dateA;
  //     }
  //   });
  // }, [leaveRequests, sortOrder]);

  // Inside your component

  const handleSortByDate = (e) => {
    const value = e.target.value;
    
    if (value === 'Sort By') {
      // Reset sort order
      setSortOrder('');
    } else if (value === 'Sort By Date') {
      // Toggle between ascending and descending
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    }
  };

  const sortedRequests = useMemo(() => {
    if (sortOrder === '') return leaveRequests; // Return original order if no sort
  
    return [...leaveRequests].sort((a, b) => {
      const dateA = new Date(a.fromDate);
      const dateB = new Date(b.fromDate);
  
      if (sortOrder === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }, [leaveRequests, sortOrder]);


  // Pagination logic
  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = sortedRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  const totalPages = Math.ceil(sortedRequests.length / itemsPerPage);
  
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'No',
        accessor: (row, i) => (currentPage - 1) * itemsPerPage + i + 1,
      },
      {
        Header: 'Reason',
        accessor: 'reason',
      },
      {
        Header: 'Leave Type',
        accessor: 'leaveType',
      },
      {
        Header: 'Leave From',
        accessor: 'fromDate',
      },
      {
        Header: 'Leave To',
        accessor: 'toDate',
      },
      {
        Header: 'Request To',
        accessor: 'requestTo',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value, row }) => (
          <div className="flex items-center">
            <span
              className={`px-2 py-1 rounded ${
                value === 'Pending'
                  ? 'bg-gray-400'
                  : value === 'Approved'
                  ? 'bg-green-400'
                  : value === 'Reject'
                  ? 'bg-red-400'
                  : ''
              }`}
            >
              {value}
            </span>
            {value === 'Pending' && (
              <>
                <button onClick={() => openEditModal(row.original)} className="ml-1 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700">
                  <CiEdit size={20} />
                </button>
                <button
                  onClick={() => openDeleteModal(row.original.id)}
                  className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
                >
                  <MdDelete size={20} />
                </button>
              </>
            )}
          </div>
        ),
      },
    ],
    [currentPage, itemsPerPage]
  );

  const tableInstance = useTable({ columns, data: currentRequests });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="overflow-x-auto">
        <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
          <h1 className="flex justify-left items-center text-2xl font-bold">HOD Leave List:</h1>
          <select onChange={handleSortByDate} className="max-w-36 mt-4 mb-6 flex justify-left items-center text-md font-bold">
            <option>Sort By</option>
            <option>Sort By Date</option>
          </select>
        </div>

        <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-2 py-2 border border-gray-300 text-left"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  {error || 'No leave requests found.'}
                </td>
              </tr>
            ) : (
              rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border-b border-gray-200">
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="px-4 py-2 border border-gray-300">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-4">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            {'<'}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            {'>'}
          </button>
        </div>
      </div>

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white px-4 py-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Are you sure you want to delete request?</h3>
            <div className="flex mt-4">
              <button
                onClick={closeDeleteModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-55 flex justify-center items-center z-50">
          <div className="w-[35%] rounded-xl bg-white py-6 px-12 rounded flex flex-col">
            <h2 className="text-2xl mb-4">Edit Leave Request</h2>
            <label>Reason :</label>
            <input
              type="text"
              name="reason"
              value={editData.reason}
              onChange={handleEditChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300"
              placeholder="Reason"
            />
            <label>From Date :</label>
            <input
              type="date"
              name="fromDate"
              value={editData.fromDate}
              onChange={handleEditChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300"
            />
            <label>To Date :</label>
            <input
              type="date"
              name="toDate"
              value={editData.toDate}
              onChange={handleEditChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300"
            />
            <label>Leave Type :</label>
            <select
              name="leaveType"
              value={editData.leaveType}
              onChange={handleEditChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300"
            >
              <option value="Full Day">Full Day</option>
              <option value="First Half">First Half</option>
              <option value="Second Half">Second Half</option>
            </select>
            <div className="flex justify-between">
              <button onClick={closeEditModal} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleEditSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLeaveStatusHOD;