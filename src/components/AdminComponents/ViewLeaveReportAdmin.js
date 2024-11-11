

//without change an status by admin code 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [studentError, setStudentError] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests`);

//         if (response) {
//           console.log("user data :",response.data);
//           setLeaveRequestsStudent(response.data);
//         }
//         else {
//           setStudentError('No Leave Data Availbale !');
//         }
//       } 
//       catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };
//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         const response = await API.get(`/hodLeaveRequests`);

//         if (response) {
//           console.log("hod data :",response.data);
//           setLeaveRequestsHOD(response.data);
//         }
//         else {
//           setHodError('No Leave Data Availbale !');
//         }
//       } 
//       catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   return (
//     <div className='flex flex-col'>
//       {/* HOD */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className='mt-10 mb-6 flex justify-left items-center text-2xl font-bold'>HOD Leave Report :-</h1>
//           <table className="min-w-full table-auto border-collapse border border-gray-300">
//             <thead>
//               <tr class="bg-gray-200">
//                 <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                 {/* <th className="px-0 py-2 border border-gray-300 text-left">Total Working Days</th> */}
//                 <th className="px-0 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//               </tr>
//             </thead>
//               <tbody>
//               {leaveRequestsHOD.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4">
//                     No leave requests found.
//                   </td>
//                 </tr>
//               ) : (
//                 leaveRequestsHOD.map((request,index) => (
//                 <tr key={request.id}>
//                   <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                   <td className="px-2 py-2 border border-gray-300">12</td>
//                   <td className="px-2 py-2 border border-gray-300">2</td>
//                   <td className="px-2 py-2 border border-gray-300">88%</td>
//                   <td className="px-2 py-2 border border-gray-300">
//                       <select>
//                         <option value="Pending" className="font-bold">Pending</option>
//                         <option value="Approved" className="font-bold">Approved</option>
//                         <option value="Reject" className="font-bold">Reject</option>
//                       </select>
//                   </td>
//                 </tr>
//                 ))
//                 )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Students */}
//       <div class="container mx-auto p-4">
//         <div class="overflow-x-auto">
//           <h1 className='mt-0 mb-6 flex justify-left items-center text-2xl font-bold'>Students Leave Report :-</h1>
//           <table class="min-w-full table-auto border-collapse border border-gray-300">
//             <thead>
//               <tr class="bg-gray-200">
//                 <th class="px-2 py-2 border border-gray-300 text-left">ID</th>
//                 <th class="px-2 py-2 border border-gray-300 text-left">Name</th>
//                 <th class="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                 <th class="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//                 <th class="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                 {/* <th class="px-0 py-2 border border-gray-300 text-left">Total Working Days</th> */}
//                 <th class="px-0 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//                 <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//               {leaveRequestsStudent.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                 leaveRequestsStudent.map((request,index) => (              
//                 <tr key={request.id}>
//                   <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                   <td className="px-2 py-2 border border-gray-300">12</td>
//                   <td className="px-2 py-2 border border-gray-300">2</td>
//                   <td className="px-2 py-2 border border-gray-300">88%</td>
//                   <td className="px-2 py-2 border border-gray-300">
//                       <select>
//                         <option value="Pending" className="font-bold">Pending</option>
//                         <option value="Approved" className="font-bold">Approved</option>
//                         <option value="Reject" className="font-bold">Reject</option>
//                       </select>
//                   </td>
//                 </tr>
//                 ))
//                 )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ViewLeaveReportAdmin;





//{
//   "totalLeave": 12,
//   "id": "0045"
// },
// {
//   "balanceLeave": 4,
//   "id": "8bbc"
// }  also  show on td data that wrong


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true); // Loading for HOD data
//   const [loadingStudent, setLoadingStudent] = useState(true); // Loading for Student data
//   const totalLeave = 12; // Fixed total leave for all

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         setLoadingStudent(true); // Start loading spinner
//         const { data } = await API.get(`/userLeaveRequests`);
//         console.log(data);
//         setLeaveRequestsStudent(data);
//         setLoadingStudent(false); // Stop loading spinner
//       } catch (err) {
//         setStudentError('Error fetching student leave requests');
//         setLoadingStudent(false);
//       }
//     };

//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         setLoadingHOD(true); // Start loading spinner
//         const { data } = await API.get(`/hodLeaveRequests`);
//         console.log(data);
//         setLeaveRequestsHOD(data);
//         setLoadingHOD(false); // Stop loading spinner
//       } catch (err) {
//         setHodError('Error fetching HOD leave requests');
//         setLoadingHOD(false);
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   // Function to calculate used leave based on the number of leave requests for a particular user
//   const calculateUsedLeave = (leaveRequests, userName) => {
//     const userRequests = leaveRequests.filter((request) => request.name === userName);
//     return userRequests.length; // Number of leaves used by the particular user
//   };

//   // Function to handle status update
//   const handleStatusUpdate = async (id, status, type) => {
//     try {
//       await API.patch(`/updateLeaveRequest/${id}`, { status });
//       if (type === 'HOD') {
//         const updatedHODRequests = leaveRequestsHOD.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsHOD(updatedHODRequests);
//       } else {
//         const updatedStudentRequests = leaveRequestsStudent.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsStudent(updatedStudentRequests);
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       {/* HOD */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//             HOD Leave Report :-
//           </h1>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Attendance %</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD.map((request, index) => {
//                     const usedLeave = calculateUsedLeave(leaveRequestsHOD, request.name); // Calculate used leave for this particular HOD
//                     return (
//                       <tr key={request.id}>
//                         <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                         <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                         <td className="px-2 py-2 border border-gray-300">{usedLeave}</td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           {request.attendance || '88%'}
//                         </td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           <select
//                             value={request.status}
//                             onChange={(e) =>
//                               handleStatusUpdate(request.id, e.target.value, 'HOD')
//                             }
//                           >
//                             <option value="Pending" className="font-bold">
//                               Pending
//                             </option>
//                             <option value="Approved" className="font-bold">
//                               Approved
//                             </option>
//                             <option value="Reject" className="font-bold">
//                               Reject
//                             </option>
//                           </select>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Students */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className="mt-0 mb-6 flex justify-left items-center text-2xl font-bold">
//             Students Leave Report :-
//           </h1>

//           {loadingStudent ? (
//             <p>Loading student data...</p>
//           ) : studentError ? (
//             <p>{studentError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Attendance %</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsStudent.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsStudent.map((request, index) => {
//                     const usedLeave = calculateUsedLeave(leaveRequestsStudent, request.name); // Calculate used leave for this particular student
//                     return (
//                      {request.name === ''
//                        ?
//                         <tr key={request.id}>
//                         <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                         <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                         <td className="px-2 py-2 border border-gray-300">{usedLeave}</td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           {request.attendance || '88%'}
//                         </td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           <select
//                             value={request.status}
//                             onChange={(e) =>
//                               handleStatusUpdate(request.id, e.target.value, 'HOD')
//                             }
//                           >
//                             <option value="Pending" className="font-bold">
//                               Pending
//                             </option>
//                             <option value="Approved" className="font-bold">
//                               Approved
//                             </option>
//                             <option value="Reject" className="font-bold">
//                               Reject
//                             </option>
//                           </select>
//                         </td>
//                       </tr> 
//                     :
//                       ''}
//                   )})
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;




// current code with student and admin both


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);
//   const totalLeave = 12;

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         setLoadingStudent(true);
//         const { data } = await API.get(`/userLeaveRequests`);
//         setLeaveRequestsStudent(data);
//         setLoadingStudent(false);
//       } catch (err) {
//         setStudentError('Error fetching student leave requests');
//         setLoadingStudent(false);
//       }
//     };

//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         setLoadingHOD(true);
//         const { data } = await API.get(`/hodLeaveRequests`);
//         setLeaveRequestsHOD(data);
//         setLoadingHOD(false);
//       } catch (err) {
//         setHodError('Error fetching HOD leave requests');
//         setLoadingHOD(false);
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const calculateUsedLeave = (leaveRequests, userName) => {
//     const userRequests = leaveRequests.filter((request) => request.name === userName);
//     return userRequests.length;
//   };

//   const handleStatusUpdate = async (id, status, type) => {
//     try {
//       await API.patch(`/updateLeaveRequest/${id}`, { status });
//       if (type === 'HOD') {
//         const updatedHODRequests = leaveRequestsHOD.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsHOD(updatedHODRequests);
//       } else {
//         const updatedStudentRequests = leaveRequestsStudent.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsStudent(updatedStudentRequests);
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       {/* HOD */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//             HOD Leave Report:
//           </h1>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   {/* <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th> */}
//                   {/* <th className="px-2 py-2 border border-gray-300 text-left">Attendance %</th> */}
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD
//                     .filter(request => !request.totalLeave && !request.balanceLeave) // Filter out unwanted requests
//                     .map((request, index) => {
//                       const usedLeave = calculateUsedLeave(leaveRequestsHOD, request.name);
//                       return (
//                         <tr key={request.id}>
//                           <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                           <td className="px-2 py-2 border border-gray-300">{usedLeave}</td>
//                           {/* <td className="px-2 py-2 border border-gray-300">{totalLeave}</td> */}
//                           {/* <td className="px-2 py-2 border border-gray-300">{request.attendance || '88%'}</td> */}
//                           <td className="px-2 py-2 border border-gray-300">
//                             <select
//                               value={request.status}
//                               onChange={(e) =>
//                                 handleStatusUpdate(request.id, e.target.value, 'HOD')
//                               }
//                             >
//                               <option value="Pending" className="font-bold">Pending</option>
//                               <option value="Approved" className="font-bold">Approved</option>
//                               <option value="Reject" className="font-bold">Reject</option>
//                             </select>
//                           </td>
//                         </tr>
//                       );
//                     })
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Students */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className="mt-0 mb-6 flex justify-left items-center text-2xl font-bold">
//             Students Leave Report:
//           </h1>

//           {loadingStudent ? (
//             <p>Loading student data...</p>
//           ) : studentError ? (
//             <p>{studentError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Attendance %</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsStudent.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsStudent
//                     .filter(request => !request.totalLeave && !request.balanceLeave) // Filter out unwanted requests
//                     .map((request, index) => {
//                       const usedLeave = calculateUsedLeave(leaveRequestsStudent, request.name);
//                       return (
//                         <tr key={request.id}>
//                           <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                           <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
//                           <td className="px-2 py-2 border border-gray-300">{usedLeave}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.attendance || '88%'}</td>
//                           <td className="px-2 py-2 border border-gray-300">
//                             <select
//                               value={request.status}
//                               onChange={(e) =>
//                                 handleStatusUpdate(request.id, e.target.value, 'Student')
//                               }
//                             >
//                               <option value="Pending" className="font-bold">Pending</option>
//                               <option value="Approved" className="font-bold">Approved</option>
//                               <option value="Reject" className="font-bold">Reject</option>
//                             </select>
//                           </td>
//                         </tr>
//                       );
//                     })
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;





// current code with admin only


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);
//   const totalLeave = 12;

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         setLoadingStudent(true);
//         const { data } = await API.get(`/userLeaveRequests`);
//         setLeaveRequestsStudent(data);
//         setLoadingStudent(false);
//       } catch (err) {
//         setStudentError('Error fetching student leave requests');
//         setLoadingStudent(false);
//       }
//     };

//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         setLoadingHOD(true);
//         const { data } = await API.get(`/hodLeaveRequests`);
//         setLeaveRequestsHOD(data);
//         setLoadingHOD(false);
//       } catch (err) {
//         setHodError('Error fetching HOD leave requests');
//         setLoadingHOD(false);
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const calculateUsedLeave = (leaveRequests, userName) => {
//     const userRequests = leaveRequests.filter((request) => request.name === userName);
//     return userRequests.length;
//   };

//   const handleStatusUpdate = async (id, status, type) => {
//     try {
//       await API.patch(`/updateLeaveRequest/${id}`, { status });
//       if (type === 'HOD') {
//         const updatedHODRequests = leaveRequestsHOD.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsHOD(updatedHODRequests);
//       } else {
//         const updatedStudentRequests = leaveRequestsStudent.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsStudent(updatedStudentRequests);
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       {/* HOD */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//             HOD Leave Report:
//           </h1>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD
//                     .filter(request => !request.totalLeave && !request.balanceLeave) // Filter out unwanted requests
//                     .map((request, index) => {
//                       const usedLeave = calculateUsedLeave(leaveRequestsHOD, request.name);
//                       return (
//                         <tr key={request.id}>
//                           <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                           <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                           <td className="px-2 py-2 border border-gray-300">{usedLeave}</td>
//                           <td className="px-2 py-2 border border-gray-300">
//                             <select
//                               value={request.status}
//                               onChange={(e) =>
//                                 handleStatusUpdate(request.id, e.target.value, 'HOD')
//                               }
//                             >
//                               <option value="Pending" className="font-bold">Pending</option>
//                               <option value="Approved" className="font-bold">Approved</option>
//                               <option value="Reject" className="font-bold">Reject</option>
//                             </select>
//                           </td>
//                         </tr>
//                       );
//                     })
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         setLoadingStudent(true);
//         const { data } = await API.get(`/userLeaveRequests`);
//         setLeaveRequestsStudent(data);
//         setLoadingStudent(false);
//       } catch (err) {
//         setStudentError('Error fetching student leave requests');
//         setLoadingStudent(false);
//       }
//     };

//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         setLoadingHOD(true);
//         const { data } = await API.get(`/hodLeaveRequests`);
//         setLeaveRequestsHOD(data);
//         setLoadingHOD(false);
//       } catch (err) {
//         setHodError('Error fetching HOD leave requests');
//         setLoadingHOD(false);
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status, type) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       if (type === 'HOD') {
//         const updatedHODRequests = leaveRequestsHOD.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsHOD(updatedHODRequests);
//       } else {
//         const updatedStudentRequests = leaveRequestsStudent.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsStudent(updatedStudentRequests);
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   const getRowBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       case 'Pending':
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   return (
//     <div className="flex flex-col md:mt-8">
//       {/* HOD */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//             HOD Leave Report:
//           </h1>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD.map((request, index) => {
//                     return (
//                       <tr key={request.id}>
//                         <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           {/* Assuming there's a logic for calculating used leave */}
//                           {leaveRequestsHOD.filter(r => r.name === request.name).length}
//                         </td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           <select
//                             className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
//                             value={request.status}
//                             onChange={(e) =>
//                               handleStatusUpdate(request.id, e.target.value, 'HOD')
//                             }
//                           >
//                             <option value="Pending">Pending</option>
//                             <option value="Approved">Approved</option>
//                             <option value="Reject">Reject</option>
//                           </select>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         setLoadingStudent(true);
//         const { data } = await API.get(`/userLeaveRequests`);
//         setLeaveRequestsStudent(data);
//         setLoadingStudent(false);
//       } catch (err) {
//         setStudentError('Error fetching student leave requests');
//         setLoadingStudent(false);
//       }
//     };

//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         setLoadingHOD(true);
//         const { data } = await API.get(`/hodLeaveRequests`);
//         setLeaveRequestsHOD(data);
//         setLoadingHOD(false);
//       } catch (err) {
//         setHodError('Error fetching HOD leave requests');
//         setLoadingHOD(false);
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status, type) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       if (type === 'HOD') {
//         const updatedHODRequests = leaveRequestsHOD.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsHOD(updatedHODRequests);
//       } else {
//         const updatedStudentRequests = leaveRequestsStudent.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsStudent(updatedStudentRequests);
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   const getRowBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       case 'Pending':
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   return (
//     <div className="flex flex-col md:mt-8">

//       <h2 className="text-2xl font-semibold mb-4">HOD Leave Report</h2>
//       {loadingHOD ? (
//         <p>Loading HOD leave requests...</p>
//       ) : hodError ? (
//         <p>{hodError}</p>
//       ) : (
//         <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">ID</th>
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Department</th>
//               <th className="border border-gray-300 px-4 py-2">Leave Type</th>
//               <th className="border border-gray-300 px-4 py-2">Start Date</th>
//               <th className="border border-gray-300 px-4 py-2">End Date</th>
//               <th className="border border-gray-300 px-4 py-2">Reason</th>
//               <th className="border border-gray-300 px-4 py-2">Status</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsHOD.map((request) => (
//               <tr key={request.id} className={getRowBgColor(request.status)}>
//                 <td className="border border-gray-300 px-4 py-2">{request.id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.department}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.leaveType}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.startDate}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.endDate}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.reason}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.status}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button onClick={() => handleStatusUpdate(request.id, 'Approved', 'HOD')} className="bg-green-500 text-white px-2 py-1 mr-2">Approve</button>
//                   <button onClick={() => handleStatusUpdate(request.id, 'Reject', 'HOD')} className="bg-red-500 text-white px-2 py-1">Reject</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h2 className="text-2xl font-semibold mb-4">Student Leave Report</h2>
//       {loadingStudent ? (
//         <p>Loading student leave requests...</p>
//       ) : studentError ? (
//         <p>{studentError}</p>
//       ) : (
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">ID</th>
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Department</th>
//               <th className="border border-gray-300 px-4 py-2">Leave Type</th>
//               <th className="border border-gray-300 px-4 py-2">Start Date</th>
//               <th className="border border-gray-300 px-4 py-2">End Date</th>
//               <th className="border border-gray-300 px-4 py-2">Reason</th>
//               <th className="border border-gray-300 px-4 py-2">Status</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudent.map((request) => (
//               <tr key={request.id} className={getRowBgColor(request.status)}>
//                 <td className="border border-gray-300 px-4 py-2">{request.id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.department}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.leaveType}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.startDate}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.endDate}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.reason}</td>
//                 <td className="border border-gray-300 px-4 py-2">{request.status}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button onClick={() => handleStatusUpdate(request.id, 'Approved', 'Student')} className="bg-green-500 text-white px-2 py-1 mr-2">Approve</button>
//                   <button onClick={() => handleStatusUpdate(request.id, 'Reject', 'Student')} className="bg-red-500 text-white px-2 py-1">Reject</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;




// after authguard code

// only hod leaves show

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         setLoadingStudent(true);
//         const { data } = await API.get(`/userLeaveRequests`);
//         setLeaveRequestsStudent(data);
//         setLoadingStudent(false);
//       } catch (err) {
//         setStudentError('Error fetching student leave requests');
//         setLoadingStudent(false);
//       }
//     };

//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         setLoadingHOD(true);
//         const { data } = await API.get(`/hodLeaveRequests`);
//         setLeaveRequestsHOD(data);
//         setLoadingHOD(false);
//       } catch (err) {
//         setHodError('Error fetching HOD leave requests');
//         setLoadingHOD(false);
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status, type) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       if (type === 'HOD') {
//         const updatedHODRequests = leaveRequestsHOD.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsHOD(updatedHODRequests);
//       } else {
//         const updatedStudentRequests = leaveRequestsStudent.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsStudent(updatedStudentRequests);
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   const getRowBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       case 'Pending':
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   return (
//     <div className="flex flex-col md:mt-8">
//       {/* HOD */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//             HOD Leave Report:
//           </h1>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD.map((request, index) => {
//                     return (
//                       <tr key={request.id}>
//                         <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                         <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           {leaveRequestsHOD.filter(r => r.name === request.name).length}
//                         </td>
//                         <td className="px-2 py-2 border border-gray-300">
//                           <select
//                             className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
//                             value={request.status}
//                             onChange={(e) =>
//                               handleStatusUpdate(request.id, e.target.value, 'HOD')
//                             }
//                           >
//                             <option value="Pending">Pending</option>
//                             <option value="Approved">Approved</option>
//                             <option value="Reject">Reject</option>
//                           </select>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;











//both student and hod leaves show


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequestsStudent = async () => {
//       try {
//         setLoadingStudent(true);
//         const { data } = await API.get(`/userLeaveRequests`);
        
//         // Filter out invalid student objects
//         const filteredStudentRequests = data.filter(
//           (request) => request.reason && request.leaveType && request.name
//         );

//         setLeaveRequestsStudent(filteredStudentRequests);
//         setLoadingStudent(false);
//       } catch (err) {
//         setStudentError('Error fetching student leave requests');
//         setLoadingStudent(false);
//       }
//     };

//     const fetchLeaveRequestsHOD = async () => {
//       try {
//         setLoadingHOD(true);
//         const { data } = await API.get(`/hodLeaveRequests`);
//         setLeaveRequestsHOD(data);
//         setLoadingHOD(false);
//       } catch (err) {
//         setHodError('Error fetching HOD leave requests');
//         setLoadingHOD(false);
//       }
//     };

//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status, type) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       if (type === 'HOD') {
//         const updatedHODRequests = leaveRequestsHOD.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsHOD(updatedHODRequests);
//       } else {
//         const updatedStudentRequests = leaveRequestsStudent.map((request) =>
//           request.id === id ? { ...request, status } : request
//         );
//         setLeaveRequestsStudent(updatedStudentRequests);
//       }
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   const getRowBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       case 'Pending':
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   return (
//     <div className="flex flex-col md:mt-8">
//       {/* HOD Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//             <div className='flex flex-row justify-between items-center'>
//               <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//                 HOD Leave Report:
//               </h1>
//               <select className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold">
//                 <option>Sort By</option>
//                 <option>Sort By Name</option>
//                 <option>Sort By Leaves</option>
//               </select>
//             </div>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         {leaveRequestsHOD.filter(r => r.name === request.name).length}
//                       </td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         <select
//                           className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
//                           value={request.status}
//                           onChange={(e) =>
//                             handleStatusUpdate(request.id, e.target.value, 'HOD')
//                           }
//                         >
//                           <option value="Pending">Pending</option>
//                           <option value="Approved">Approved</option>
//                           <option value="Reject">Reject</option>
//                         </select>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Student Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//             <div className='flex flex-row justify-between items-center'>
//               <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//                 Students Leave Report:
//               </h1>
//               <select className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold">
//                 <option>Sort By</option>
//                 <option>Sort By Name</option>
//                 <option>Sort By Leaves</option>
//               </select>
//             </div>

//           {loadingStudent ? (
//             <p>Loading student data...</p>
//           ) : studentError ? (
//             <p>{studentError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Total Leaves Used</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsStudent.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsStudent.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         {leaveRequestsStudent.filter(r => r.name === request.name).length}
//                       </td>
//                       <td className={`px-2 py-2 border border-gray-300 ${getRowBgColor(request.status)}`}>
//                         {request.status}
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;


// perfect but without pagination

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const [hodSortOption, setHodSortOption] = useState('Sort By');
//   const [studentSortOption, setStudentSortOption] = useState('Sort By');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const fetchLeaveRequestsStudent = async () => {
//     try {
//       setLoadingStudent(true);
//       const { data } = await API.get(`/userLeaveRequests`);
      
//       const filteredStudentRequests = data.filter(
//         (request) => request.reason && request.leaveType && request.name
//       );

//       setLeaveRequestsStudent(filteredStudentRequests);
//       setLoadingStudent(false);
//     } catch (err) {
//       setStudentError('Error fetching student leave requests');
//       setLoadingStudent(false);
//     }
//   };

//   const fetchLeaveRequestsHOD = async () => {
//     try {
//       setLoadingHOD(true);
//       const { data } = await API.get(`/hodLeaveRequests`);
//       setLeaveRequestsHOD(data);
//       setLoadingHOD(false);
//     } catch (err) {
//       setHodError('Error fetching HOD leave requests');
//       setLoadingHOD(false);
//     }
//   };

//   useEffect(() => {
//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       const updatedHODRequests = leaveRequestsHOD.map((request) =>
//         request.id === id ? { ...request, status } : request
//       );
//       setLeaveRequestsHOD(updatedHODRequests);
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   const getRowBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       case 'Pending':
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   const sortHODRequests = () => {
//     if (hodSortOption === 'Sort By Name') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     } else if (hodSortOption === 'Sort By Leaves') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           leaveRequestsHOD.filter((r) => r.name === b.name).length -
//           leaveRequestsHOD.filter((r) => r.name === a.name).length
//         )
//       );
//     } else {
//       // Reset to original order
//       fetchLeaveRequestsHOD();
//     }
//   };

//   const sortStudentRequests = () => {
//     if (studentSortOption === 'Sort By Name') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     } else if (studentSortOption === 'Sort By Leaves') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           leaveRequestsStudent.filter((r) => r.name === b.name).length -
//           leaveRequestsStudent.filter((r) => r.name === a.name).length
//         )
//       );
//     } else {
//       // Reset to original order
//       fetchLeaveRequestsStudent();
//     }
//   };

//   useEffect(sortHODRequests, [hodSortOption]);
//   useEffect(sortStudentRequests, [studentSortOption]);

//   return (
//     <div className="flex flex-col md:mt-8">
//       {/* HOD Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className='flex flex-row justify-between items-center'>
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               HOD Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={hodSortOption}
//               onChange={(e) => setHodSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         {leaveRequestsHOD.filter(r => r.name === request.name).length}
//                       </td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         <select
//                           className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
//                           value={request.status}
//                           onChange={(e) =>
//                             handleStatusUpdate(request.id, e.target.value)
//                           }
//                         >
//                           <option value="Pending">Pending</option>
//                           <option value="Approved">Approved</option>
//                           <option value="Reject">Reject</option>
//                         </select>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Student Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className='flex flex-row justify-between items-center'>
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               Students Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={studentSortOption}
//               onChange={(e) => setStudentSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingStudent ? (
//             <p>Loading student data...</p>
//           ) : studentError ? (
//             <p>{studentError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsStudent.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsStudent.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         {leaveRequestsStudent.filter(r => r.name === request.name).length}
//                       </td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         <span className={`rounded-md p-1 font-bold ${getRowBgColor(request.status)}`}>
//                           {request.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const [hodSortOption, setHodSortOption] = useState('Sort By');
//   const [studentSortOption, setStudentSortOption] = useState('Sort By');

//   const [hodCurrentPage, setHodCurrentPage] = useState(1);
//   const [studentCurrentPage, setStudentCurrentPage] = useState(1);
//   const [hodItemsPerPage, setHodItemsPerPage] = useState(8);
//   const [studentItemsPerPage, setStudentItemsPerPage] = useState(8);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const fetchLeaveRequestsStudent = async () => {
//     try {
//       setLoadingStudent(true);
//       const { data } = await API.get(`/userLeaveRequests`);
//       const filteredStudentRequests = data.filter(
//         (request) => request.reason && request.leaveType && request.name
//       );

//       setLeaveRequestsStudent(filteredStudentRequests);
//       setLoadingStudent(false);
//     } catch (err) {
//       setStudentError('Error fetching student leave requests');
//       setLoadingStudent(false);
//     }
//   };

//   const fetchLeaveRequestsHOD = async () => {
//     try {
//       setLoadingHOD(true);
//       const { data } = await API.get(`/hodLeaveRequests`);
//       setLeaveRequestsHOD(data);
//       setLoadingHOD(false);
//     } catch (err) {
//       setHodError('Error fetching HOD leave requests');
//       setLoadingHOD(false);
//     }
//   };

//   useEffect(() => {
//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       const updatedHODRequests = leaveRequestsHOD.map((request) =>
//         request.id === id ? { ...request, status } : request
//       );
//       setLeaveRequestsHOD(updatedHODRequests);
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   const getRowBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       case 'Pending':
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   const hodNameMapping = {
//     hod1: 'Raman',
//     hod2: 'Shyam',
//     hod3: 'Radhika',
//     hod4: 'Karina',
//   };

//   const getHODName = (hodName) => hodNameMapping[hodName] || hodName;

//   const calculateUsedLeaveCount = (hodName) => {
//     return leaveRequestsHOD.filter((request) => request.name === hodName).length;
//   };

//   const sortHODRequests = () => {
//     if (hodSortOption === 'Sort By Name') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) => getHODName(a.name).localeCompare(getHODName(b.name)))
//       );
//     } else if (hodSortOption === 'Sort By Leaves') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           calculateUsedLeaveCount(b.name) - calculateUsedLeaveCount(a.name)
//         )
//       );
//     } else {
//       fetchLeaveRequestsHOD();
//     }
//   };  

//   const sortStudentRequests = () => {
//     if (studentSortOption === 'Sort By Name') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     } else if (studentSortOption === 'Sort By Leaves') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           leaveRequestsStudent.filter((r) => r.name === b.name).length -
//           leaveRequestsStudent.filter((r) => r.name === a.name).length
//         )
//       );
//     } else {
//       fetchLeaveRequestsStudent();
//     }
//   };

//   useEffect(sortHODRequests, [hodSortOption]);
//   useEffect(sortStudentRequests, [studentSortOption]);

//   return (
//     <div className="flex flex-col md:mt-8">
//       {/* HOD Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className='flex flex-row justify-between items-center'>
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               HOD Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={hodSortOption}
//               onChange={(e) => setHodSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{getHODName(request.name)}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         {calculateUsedLeaveCount(request.name)}
//                       </td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         <select
//                           className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
//                           value={request.status}
//                           onChange={(e) =>
//                             handleStatusUpdate(request.id, e.target.value)
//                           }
//                         >
//                           <option value="Pending">Pending</option>
//                           <option value="Approved">Approved</option>
//                           <option value="Reject">Reject</option>
//                         </select>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Student Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className='flex flex-row justify-between items-center'>
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               Student Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={studentSortOption}
//               onChange={(e) => setStudentSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingStudent ? (
//             <p>Loading Student data...</p>
//           ) : studentError ? (
//             <p>{studentError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsStudent.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsStudent.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.status}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const [hodSortOption, setHodSortOption] = useState('Sort By');
//   const [studentSortOption, setStudentSortOption] = useState('Sort By');

//   const [hodCurrentPage, setHodCurrentPage] = useState(1);
//   const [studentCurrentPage, setStudentCurrentPage] = useState(1);
//   const [hodItemsPerPage, setHodItemsPerPage] = useState(8);
//   const [studentItemsPerPage, setStudentItemsPerPage] = useState(8);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const fetchLeaveRequestsStudent = async () => {
//     try {
//       setLoadingStudent(true);
//       const { data } = await API.get(`/userLeaveRequests`);
//       const filteredStudentRequests = data.filter(
//         (request) => request.reason && request.leaveType && request.name
//       );

//       setLeaveRequestsStudent(filteredStudentRequests);
//       setLoadingStudent(false);
//     } catch (err) {
//       setStudentError('Error fetching student leave requests');
//       setLoadingStudent(false);
//     }
//   };

//   const fetchLeaveRequestsHOD = async () => {
//     try {
//       setLoadingHOD(true);
//       const { data } = await API.get(`/hodLeaveRequests`);
//       setLeaveRequestsHOD(data);
//       setLoadingHOD(false);
//     } catch (err) {
//       setHodError('Error fetching HOD leave requests');
//       setLoadingHOD(false);
//     }
//   };

//   useEffect(() => {
//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       const updatedHODRequests = leaveRequestsHOD.map((request) =>
//         request.id === id ? { ...request, status } : request
//       );
//       setLeaveRequestsHOD(updatedHODRequests);
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

//   const getRowBgColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-400';
//       case 'Reject':
//         return 'bg-red-400';
//       case 'Pending':
//       default:
//         return 'bg-gray-400';
//     }
//   };

//   const calculateUsedLeaveCount = (requests, name) => {
//     return requests.filter((request) => request.name === name).length;
//   };

//   const sortHODRequests = () => {
//     if (hodSortOption === 'Sort By Name') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     } else if (hodSortOption === 'Sort By Leaves') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           calculateUsedLeaveCount(leaveRequestsHOD, b.name) - calculateUsedLeaveCount(leaveRequestsHOD, a.name)
//         )
//       );
//     } else {
//       fetchLeaveRequestsHOD();
//     }
//   };

//   const sortStudentRequests = () => {
//     if (studentSortOption === 'Sort By Name') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     } else if (studentSortOption === 'Sort By Leaves') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           calculateUsedLeaveCount(leaveRequestsStudent, b.name) - calculateUsedLeaveCount(leaveRequestsStudent, a.name)
//         )
//       );
//     } else {
//       fetchLeaveRequestsStudent();
//     }
//   };

//   useEffect(sortHODRequests, [hodSortOption]);
//   useEffect(sortStudentRequests, [studentSortOption]);

//   return (
//     <div className="flex flex-col md:mt-8">
//       {/* HOD Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className='flex flex-row justify-between items-center'>
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               HOD Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={hodSortOption}
//               onChange={(e) => setHodSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsHOD.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsHOD.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         {calculateUsedLeaveCount(leaveRequestsHOD, request.name)}
//                       </td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         <select
//                           className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
//                           value={request.status}
//                           onChange={(e) =>
//                             handleStatusUpdate(request.id, e.target.value)
//                           }
//                         >
//                           <option value="Pending">Pending</option>
//                           <option value="Approved">Approved</option>
//                           <option value="Reject">Reject</option>
//                         </select>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Student Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className='flex flex-row justify-between items-center'>
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               Student Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={studentSortOption}
//               onChange={(e) => setStudentSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingStudent ? (
//             <p>Loading Student data...</p>
//           ) : studentError ? (
//             <p>{studentError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaveRequestsStudent.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center py-4">
//                       No leave requests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   leaveRequestsStudent.map((request, index) => (
//                     <tr key={request.id}>
//                       <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                       <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                       <td className="px-2 py-2 border border-gray-300">
//                         {calculateUsedLeaveCount(leaveRequestsStudent, request.name)}
//                       </td>
//                       <td className="px-2 py-2 border border-gray-300">{request.status}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;


// with pagination code


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveReportAdmin = () => {
//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [studentError, setStudentError] = useState('');
//   const [loadingHOD, setLoadingHOD] = useState(true);
//   const [loadingStudent, setLoadingStudent] = useState(true);

//   const [hodSortOption, setHodSortOption] = useState('Sort By');
//   const [studentSortOption, setStudentSortOption] = useState('Sort By');

//   const [hodCurrentPage, setHodCurrentPage] = useState(1);
//   const [studentCurrentPage, setStudentCurrentPage] = useState(1);
//   const [hodItemsPerPage, setHodItemsPerPage] = useState(8);
//   const [studentItemsPerPage, setStudentItemsPerPage] = useState(8);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const fetchLeaveRequestsStudent = async () => {
//     try {
//       setLoadingStudent(true);
//       const { data } = await API.get('/userLeaveRequests');
//       const filteredStudentRequests = data.filter(
//         (request) => request.reason && request.leaveType && request.name
//       );

//       setLeaveRequestsStudent(filteredStudentRequests);
//       setLoadingStudent(false);
//     } catch (err) {
//       setStudentError('Error fetching student leave requests');
//       setLoadingStudent(false);
//     }
//   };

//   const fetchLeaveRequestsHOD = async () => {
//     try {
//       setLoadingHOD(true);
//       const { data } = await API.get('/hodLeaveRequests');
//       setLeaveRequestsHOD(data);
//       setLoadingHOD(false);
//     } catch (err) {
//       setHodError('Error fetching HOD leave requests');
//       setLoadingHOD(false);
//     }
//   };

//   useEffect(() => {
//     fetchLeaveRequestsStudent();
//     fetchLeaveRequestsHOD();
//   }, []);

//   const handleStatusUpdate = async (id, status) => {
//     try {
//       await API.patch(`/hodLeaveRequests/${id}`, { status });
//       const updatedHODRequests = leaveRequestsHOD.map((request) =>
//         request.id === id ? { ...request, status } : request
//       );
//       setLeaveRequestsHOD(updatedHODRequests);
//     } catch (err) {
//       alert('Failed to update status. Please try again later.');
//     }
//   };

  // const getRowBgColor = (status) => {
  //   switch (status) {
  //     case 'Approved':
  //       return 'bg-green-400';
  //     case 'Reject':
  //       return 'bg-red-400';
  //     case 'Pending':
  //     default:
  //       return 'bg-gray-400';
  //   }
  // };

//   const calculateUsedLeaveCount = (requests, name) => {
//     return requests.filter((request) => request.name === name).length;
//   };

//   const paginate = (data, currentPage, itemsPerPage) => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return data.slice(startIndex, startIndex + itemsPerPage);
//   };

//   const sortHODRequests = () => {
//     if (hodSortOption === 'Sort By Name') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     } else if (hodSortOption === 'Sort By Leaves') {
//       setLeaveRequestsHOD((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           calculateUsedLeaveCount(leaveRequestsHOD, b.name) - calculateUsedLeaveCount(leaveRequestsHOD, a.name)
//         )
//       );
//     } else {
//       fetchLeaveRequestsHOD();
//     }
//   };

//   const sortStudentRequests = () => {
//     if (studentSortOption === 'Sort By Name') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     } else if (studentSortOption === 'Sort By Leaves') {
//       setLeaveRequestsStudent((prevRequests) =>
//         [...prevRequests].sort((a, b) =>
//           calculateUsedLeaveCount(leaveRequestsStudent, b.name) - calculateUsedLeaveCount(leaveRequestsStudent, a.name)
//         )
//       );
//     } else {
//       fetchLeaveRequestsStudent();
//     }
//   };

//   useEffect(sortHODRequests, [hodSortOption]);
//   useEffect(sortStudentRequests, [studentSortOption]);

//   const handlePageChangeHOD = (pageNumber) => {
//     setHodCurrentPage(pageNumber);
//   };

//   const handlePageChangeStudent = (pageNumber) => {
//     setStudentCurrentPage(pageNumber);
//   };

//   const totalHODPages = Math.ceil(leaveRequestsHOD.length / hodItemsPerPage);
//   const totalStudentPages = Math.ceil(leaveRequestsStudent.length / studentItemsPerPage);

//   return (
//     <div className="flex flex-col md:mt-8">
//       {/* HOD Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className='flex flex-row justify-between items-center'>
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               HOD Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={hodSortOption}
//               onChange={(e) => setHodSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingHOD ? (
//             <p>Loading HOD data...</p>
//           ) : hodError ? (
//             <p>{hodError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginate(leaveRequestsHOD, hodCurrentPage, hodItemsPerPage).map((request, index) => (
//                   <tr key={request.id}>
//                     <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                     <td className="px-2 py-2 border border-gray-300">
//                       {calculateUsedLeaveCount(leaveRequestsHOD, request.name)}
//                     </td>
//                     <td className="px-2 py-2 border border-gray-300">
//                       <select
//                         className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
//                         value={request.status}
//                         onChange={(e) =>
//                           handleStatusUpdate(request.id, e.target.value)
//                         }
//                       >
//                         <option value="Pending">Pending</option>
//                         <option value="Approved">Approved</option>
//                         <option value="Reject">Reject</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//           <div className="flex justify-center mt-4 gap-2">
//             <button className='p-2 border' onClick={() => handlePageChangeHOD(Math.max(1, hodCurrentPage - 1))}>&lt;</button>
//             {[...Array(totalHODPages)].map((_, i) => (
//               <button
//                 key={i + 1}
//                 onClick={() => handlePageChangeHOD(i + 1)}
//                 className={i + 1 === hodCurrentPage ? 'font-bold p-2 border' : 'p-2 border'}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             <button className='p-2 border' onClick={() => handlePageChangeHOD(Math.min(totalHODPages, hodCurrentPage + 1))}>&gt;</button>
//           </div>
//         </div>
//       </div>

//       {/* Student Table */}
//       <div className="container mx-auto p-4">
//         <div className="overflow-x-auto">
//           <div className="flex flex-row justify-between items-center">
//             <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
//               Student Leave Report:
//             </h1>
//             <select
//               className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
//               value={studentSortOption}
//               onChange={(e) => setStudentSortOption(e.target.value)}
//             >
//               <option>Sort By</option>
//               <option>Sort By Name</option>
//               <option>Sort By Leaves</option>
//             </select>
//           </div>

//           {loadingStudent ? (
//             <p>Loading student data...</p>
//           ) : studentError ? (
//             <p>{studentError}</p>
//           ) : (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//                   <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginate(leaveRequestsStudent, studentCurrentPage, studentItemsPerPage).map((request, index) => (
//                   <tr key={request.id}>
//                     <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//           <div className="flex justify-center mt-4 gap-2">
//             <button className='p-2 border' onClick={() => handlePageChangeStudent(Math.max(1, studentCurrentPage - 1))}>&lt;</button>
//             {[...Array(totalStudentPages)].map((_, i) => (
//               <button
//                 key={i + 1}
//                 onClick={() => handlePageChangeStudent(i + 1)}
//                 className={i + 1 === studentCurrentPage ? 'font-bold text-white bg-red-600 p-2 border' : 'p-2 border'}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             <button className='p-2 border' onClick={() => handlePageChangeStudent(Math.min(totalStudentPages, studentCurrentPage + 1))}>&gt;</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveReportAdmin;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewLeaveReportAdmin = () => {
  const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
  const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
  const [hodError, setHodError] = useState('');
  const [studentError, setStudentError] = useState('');
  const [loadingHOD, setLoadingHOD] = useState(true);
  const [loadingStudent, setLoadingStudent] = useState(true);

  const [hodSortOption, setHodSortOption] = useState('Sort By');
  const [studentSortOption, setStudentSortOption] = useState('Sort By');

  const [hodCurrentPage, setHodCurrentPage] = useState(1);
  const [studentCurrentPage, setStudentCurrentPage] = useState(1);
  const [hodItemsPerPage, setHodItemsPerPage] = useState(8);
  const [studentItemsPerPage, setStudentItemsPerPage] = useState(8);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const fetchLeaveRequestsStudent = async () => {
    try {
      setLoadingStudent(true);
      const { data } = await API.get('/userLeaveRequests');
      const filteredStudentRequests = data.filter(
        (request) => request.reason && request.leaveType && request.name
      );

      setLeaveRequestsStudent(filteredStudentRequests);
      setLoadingStudent(false);
    } catch (err) {
      setStudentError('Error fetching student leave requests');
      setLoadingStudent(false);
    }
  };

  const fetchLeaveRequestsHOD = async () => {
    try {
      setLoadingHOD(true);
      const { data } = await API.get('/hodLeaveRequests');
      setLeaveRequestsHOD(data);
      setLoadingHOD(false);
    } catch (err) {
      setHodError('Error fetching HOD leave requests');
      setLoadingHOD(false);
    }
  };

  useEffect(() => {
    fetchLeaveRequestsStudent();
    fetchLeaveRequestsHOD();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await API.patch(`/hodLeaveRequests/${id}`, { status });
      const updatedHODRequests = leaveRequestsHOD.map((request) =>
        request.id === id ? { ...request, status } : request
      );
      setLeaveRequestsHOD(updatedHODRequests);
    } catch (err) {
      alert('Failed to update status. Please try again later.');
    }
  };

  const getRowBgColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-400';
      case 'Reject':
        return 'bg-red-400';
      case 'Pending':
      default:
        return 'bg-gray-400';
    }
  };

  const calculateUsedLeaveCount = (requests, name) => {
    return requests.filter((request) => request.name === name).length;
  };

  const paginate = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const sortHODRequests = () => {
    if (hodSortOption === 'Sort By Name') {
      setLeaveRequestsHOD((prevRequests) =>
        [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (hodSortOption === 'Sort By Leaves') {
      setLeaveRequestsHOD((prevRequests) =>
        [...prevRequests].sort((a, b) =>
          calculateUsedLeaveCount(leaveRequestsHOD, b.name) - calculateUsedLeaveCount(leaveRequestsHOD, a.name)
        )
      );
    } else {
      fetchLeaveRequestsHOD();
    }
  };

  const sortStudentRequests = () => {
    if (studentSortOption === 'Sort By Name') {
      setLeaveRequestsStudent((prevRequests) =>
        [...prevRequests].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (studentSortOption === 'Sort By Leaves') {
      setLeaveRequestsStudent((prevRequests) =>
        [...prevRequests].sort((a, b) =>
          calculateUsedLeaveCount(leaveRequestsStudent, b.name) - calculateUsedLeaveCount(leaveRequestsStudent, a.name)
        )
      );
    } else {
      fetchLeaveRequestsStudent();
    }
  };

  useEffect(sortHODRequests, [hodSortOption]);
  useEffect(sortStudentRequests, [studentSortOption]);

  const handlePageChangeHOD = (pageNumber) => {
    setHodCurrentPage(pageNumber);
  };

  const handlePageChangeStudent = (pageNumber) => {
    setStudentCurrentPage(pageNumber);
  };

  const totalHODPages = Math.ceil(leaveRequestsHOD.length / hodItemsPerPage);
  const totalStudentPages = Math.ceil(leaveRequestsStudent.length / studentItemsPerPage);

  return (
    <div className="flex flex-col md:mt-8">
      {/* HOD Table */}
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <div className='flex flex-row justify-between items-center'>
            <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
              HOD Leave Report:
            </h1>
            <select
              className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
              value={hodSortOption}
              onChange={(e) => setHodSortOption(e.target.value)}
            >
              <option>Sort By</option>
              <option>Sort By Name</option>
              <option>Sort By Leaves</option>
            </select>
          </div>

          {loadingHOD ? (
            <p>Loading HOD data...</p>
          ) : hodError ? (
            <p>{hodError}</p>
          ) : (
            <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-2 border border-gray-300">ID</th>
                  <th className="px-2 py-2 border border-gray-300">Name</th>
                  <th className="px-2 py-2 border border-gray-300">Reason</th>
                  <th className="px-2 py-2 border border-gray-300">Leave Type</th>
                  <th className="px-2 py-2 border border-gray-300">Used Leave</th>
                  <th className="px-2 py-2 border border-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginate(leaveRequestsHOD, hodCurrentPage, hodItemsPerPage).map((request, index) => (
                  <tr key={request.id}>
                    <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                    <td className="px-2 py-2 border border-gray-300">{request.name}</td>
                    <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
                    <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
                    <td className="px-2 py-2 border border-gray-300">
                      {calculateUsedLeaveCount(leaveRequestsHOD, request.name)}
                    </td>
                    <td className="px-2 py-2 border border-gray-300">
                      <select
                        className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
                        value={request.status}
                        onChange={(e) =>
                          handleStatusUpdate(request.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Reject">Reject</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="flex justify-center mt-4 gap-1">
            <button className='px-4 py-2 bg-gray-300 text-black rounded-l' onClick={() => handlePageChangeHOD(Math.max(1, hodCurrentPage - 1))}>&lt;</button>
            {[...Array(totalHODPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChangeHOD(i + 1)}
                className={i + 1 === hodCurrentPage ? 'font-bold text-white bg-blue-500 px-4 py-2 rounded' : 'px-4 py-2 bg-gray-200 rounded'}
              >
                {i + 1}
              </button>
            ))}
            <button className='px-4 py-2 bg-gray-300 text-black rounded-r' onClick={() => handlePageChangeHOD(Math.min(totalHODPages, hodCurrentPage + 1))}>&gt;</button>
          </div>
        </div>
      </div>

      {/* Student Table */}
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <div className="flex flex-row justify-between items-center">
            <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
              Student Leave Report:
            </h1>
            <select
              className="max-w-36 mt-10 mb-6 flex justify-left items-center text-md font-bold"
              value={studentSortOption}
              onChange={(e) => setStudentSortOption(e.target.value)}
            >
              <option>Sort By</option>
              <option>Sort By Name</option>
              <option>Sort By Leaves</option>
            </select>
          </div>

          {loadingStudent ? (
            <p>Loading student data...</p>
          ) : studentError ? (
            <p>{studentError}</p>
          ) : (
            <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-2 border border-gray-300">ID</th>
                  <th className="px-2 py-2 border border-gray-300">Name</th>
                  <th className="px-2 py-2 border border-gray-300">Reason</th>
                  <th className="px-2 py-2 border border-gray-300">Leave Type</th>
                  <th className="px-2 py-2 border border-gray-300">Used Leave</th>
                  <th className="px-2 py-2 border border-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginate(leaveRequestsStudent, studentCurrentPage, studentItemsPerPage).map((request, index) => (
                  <tr key={request.id}>
                    <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                    <td className="px-2 py-2 border border-gray-300">{request.name}</td>
                    <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
                    <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
                    <td className="px-2 py-2 border border-gray-300">
                      {calculateUsedLeaveCount(leaveRequestsStudent, request.name)}
                    </td>
                    <td className={`px-2 py-2 border border-gray-300`}>
                      <span className={`rounded-md border-2 py-1 px-2 font-bold  ${getRowBgColor(request.status)}`}>{request.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="flex justify-center mt-4 gap-1">
            <button className='px-4 py-2 bg-gray-300 text-black rounded-l' onClick={() => handlePageChangeStudent(Math.max(1, studentCurrentPage - 1))}>&lt;</button>
            {[...Array(totalStudentPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChangeStudent(i + 1)}
                className={i + 1 === studentCurrentPage ? 'font-bold text-white bg-blue-500 px-4 py-2 rounded' : 'px-4 py-2 bg-gray-200 rounded'}
              >
                {i + 1}
              </button>
            ))}
            <button className='px-4 py-2 bg-gray-300 text-black rounded-r' onClick={() => handlePageChangeStudent(Math.min(totalStudentPages, studentCurrentPage + 1))}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLeaveReportAdmin;