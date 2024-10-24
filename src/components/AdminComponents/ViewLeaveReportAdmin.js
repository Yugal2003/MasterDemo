
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




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewLeaveReportAdmin = () => {
  const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
  const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
  const [hodError, setHodError] = useState('');
  const [studentError, setStudentError] = useState('');
  const [loadingHOD, setLoadingHOD] = useState(true);
  const [loadingStudent, setLoadingStudent] = useState(true);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  useEffect(() => {
    const fetchLeaveRequestsStudent = async () => {
      try {
        setLoadingStudent(true);
        const { data } = await API.get(`/userLeaveRequests`);
        setLeaveRequestsStudent(data);
        setLoadingStudent(false);
      } catch (err) {
        setStudentError('Error fetching student leave requests');
        setLoadingStudent(false);
      }
    };

    const fetchLeaveRequestsHOD = async () => {
      try {
        setLoadingHOD(true);
        const { data } = await API.get(`/hodLeaveRequests`);
        setLeaveRequestsHOD(data);
        setLoadingHOD(false);
      } catch (err) {
        setHodError('Error fetching HOD leave requests');
        setLoadingHOD(false);
      }
    };

    fetchLeaveRequestsStudent();
    fetchLeaveRequestsHOD();
  }, []);

  const handleStatusUpdate = async (id, status, type) => {
    try {
      await API.patch(`/hodLeaveRequests/${id}`, { status });
      if (type === 'HOD') {
        const updatedHODRequests = leaveRequestsHOD.map((request) =>
          request.id === id ? { ...request, status } : request
        );
        setLeaveRequestsHOD(updatedHODRequests);
      } else {
        const updatedStudentRequests = leaveRequestsStudent.map((request) =>
          request.id === id ? { ...request, status } : request
        );
        setLeaveRequestsStudent(updatedStudentRequests);
      }
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

  return (
    <div className="flex flex-col md:mt-8">
      {/* HOD */}
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <h1 className="mt-10 mb-6 flex justify-left items-center text-2xl font-bold">
            HOD Leave Report:
          </h1>

          {loadingHOD ? (
            <p>Loading HOD data...</p>
          ) : hodError ? (
            <p>{hodError}</p>
          ) : (
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
                  <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
                  <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
                  <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
                  <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
                  <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequestsHOD.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      No leave requests found.
                    </td>
                  </tr>
                ) : (
                  leaveRequestsHOD.map((request, index) => {
                    return (
                      <tr key={request.id}>
                        <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                        <td className="px-2 py-2 border border-gray-300">{request.name}</td>
                        <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
                        <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
                        <td className="px-2 py-2 border border-gray-300">
                          {/* Assuming there's a logic for calculating used leave */}
                          {leaveRequestsHOD.filter(r => r.name === request.name).length}
                        </td>
                        <td className="px-2 py-2 border border-gray-300">
                          <select
                            className={`rounded-md border-2 p-1 font-bold ${getRowBgColor(request.status)}`}
                            value={request.status}
                            onChange={(e) =>
                              handleStatusUpdate(request.id, e.target.value, 'HOD')
                            }
                          >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Reject">Reject</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewLeaveReportAdmin;