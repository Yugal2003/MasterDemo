



// before leave apporvel code



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveStatusStudent = () => {

//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [error, setError] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));
//   console.log(user.name);

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Replace with your API endpoint
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         if (filteredRequests) {
//           setLeaveRequests(filteredRequests);
//         }
//         else {
//           setError('No Leave Data Availbale !');
//         }
//       } 
//       catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">

//         <div className='mb-2 flex flex-row justify-between items-center w-[95%] mx-auto'>
//           <h1 className='flex justify-left items-center text-2xl font-bold'>Leave List:</h1>
//           <h1 className='text-xl font-bold'>Balance Leave : 4</h1>
//         </div>

//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Leave From</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Leave To</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Request To</th>
//               <th className="px-1 py-2 border border-gray-300 text-left">Status</th>
//               {/* <th className="px-0 py-2 border border-gray-300 text-left"></th> */}
//               <th className="px-0 py-2 border border-gray-300 text-left">Leave Percentage</th>
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
//               leaveRequests.map((request) => (
//                 <tr key={request.id}>
//                   <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.fromDate}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.toDate}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.requestTo}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveStatusStudent;






// current code




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [error, setError] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));
//   console.log(user.name);

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         // Fetch user leave requests
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         console.log(filteredRequests);        
//         setLeaveRequests(filteredRequests);

//         // Fetch total and balance leaves
//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find(item => item.totalLeave); // get 12
//         const balanceLeaveData = leaveDataResponse.data.find(item => item.balanceLeave); // get 4

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave); // 12
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length); // 4 - 12 = -8
//           if(balanceLeave <= 0){
//             setBalanceLeave(0) // 0
//           }
//         } else {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   // Calculate used leaves
//   const usedLeaves = leaveRequests.length; // This assumes each request is for one day; adjust as needed. // 7
//   const leavePercentage = totalLeave > 0 ? ((totalLeave - usedLeaves) / totalLeave) * 100 : 0;
//                       // 12 > 0 ? 12 - 7 / 12 *100 = 42% 
//   console.log(totalLeave);
//   console.log(usedLeaves);


//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className='mb-2 flex flex-row justify-between items-center w-[95%] mx-auto'>
//           <h1 className='flex justify-left items-center text-2xl font-bold'>Leave List:</h1>

//           {/* <div className='gap-4'>
//             <h1 className='text-xl font-bold'>Balance Leave: {balanceLeave}</h1>
//             <h1 className='text-xl font-bold'>Leave Percentage: {leavePercentage.toFixed(0)}%</h1>
//           </div> */}
//         </div>

//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">No</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Leave From</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Leave To</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Request To</th>
//               <th className="px-1 py-2 border border-gray-300 text-left">Status</th>
//               {/* <th className="px-0 py-2 border border-gray-300 text-left">Leave Percentage</th> */}
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
//                   <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.fromDate}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.toDate}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.requestTo}</td>
//                   <td className={`px-2 py-2 border border-gray-300 ${
//                       request.status === 'Pending'
//                         ? 'bg-gray-400' : request.status === 'Approved' ? 'bg-green-400' : request.status === 'Reject' ? 'bg-red-400' : ''
//                     }`}
//                   >{request.status}</td>

//                   {/* <td className="px-2 py-2 border border-gray-300">{leavePercentage.toFixed(0)}%</td> Displaying percentage */}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewLeaveStatusStudent;



// use an react table npm package 



//current code

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [error, setError] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         // Fetch user leave requests
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);

//         // Fetch total and balance leaves
//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find(item => item.totalLeave);
//         const balanceLeaveData = leaveDataResponse.data.find(item => item.balanceLeave);

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave);
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//           if (balanceLeave <= 0) {
//             setBalanceLeave(0);
//           }
//         } else {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   const usedLeaves = leaveRequests.length;
//   const leavePercentage = totalLeave > 0 ? ((totalLeave - usedLeaves) / totalLeave) * 100 : 0;

//   // Define columns for react-table
//   const columns = useMemo(() => [
//     {
//       Header: 'No',
//       accessor: (row, i) => i + 1, // custom accessor for index
//     },
//     {
//       Header: 'Reason',
//       accessor: 'reason',
//     },
//     {
//       Header: 'Leave Type',
//       accessor: 'leaveType',
//     },
//     {
//       Header: 'Leave From',
//       accessor: 'fromDate',
//     },
//     {
//       Header: 'Leave To',
//       accessor: 'toDate',
//     },
//     {
//       Header: 'Request To',
//       accessor: 'requestTo',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       Cell: ({ value }) => (
//         <span
//           className={`px-2 py-1 rounded ${
//             value === 'Pending'
//               ? 'bg-gray-400'
//               : value === 'Approved'
//               ? 'bg-green-400'
//               : value === 'Reject'
//               ? 'bg-red-400'
//               : ''
//           }`}
//         >
//           {value}
//         </span>
//       ),
//     },
//   ], []);

//   // Pass data and columns to react-table
//   const tableInstance = useTable({ columns, data: leaveRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className='mb-2 flex flex-row justify-between items-center w-[95%] mx-auto'>
//           <h1 className='flex justify-left items-center text-2xl font-bold'>Leave List:</h1>
//         </div>

//         <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map(column => (
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
//                     {row.cells.map(cell => (
//                       <td
//                         {...cell.getCellProps()}
//                         className="px-2 py-2 border border-gray-300"
//                       >
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
//     </div>
//   );
// };

// export default ViewLeaveStatusStudent;



// after authguard code

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [error, setError] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);

//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find(item => item.totalLeave);
//         const balanceLeaveData = leaveDataResponse.data.find(item => item.balanceLeave);

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave);
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//           if (balanceLeave <= 0) {
//             setBalanceLeave(0);
//           }
//         } else {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   const usedLeaves = leaveRequests.length;
//   const leavePercentage = totalLeave > 0 ? ((totalLeave - usedLeaves) / totalLeave) * 100 : 0;

//   const columns = useMemo(() => [
//     {
//       Header: 'No',
//       accessor: (row, i) => i + 1, 
//     },
//     {
//       Header: 'Reason',
//       accessor: 'reason',
//     },
//     {
//       Header: 'Leave Type',
//       accessor: 'leaveType',
//     },
//     {
//       Header: 'Leave From',
//       accessor: 'fromDate',
//     },
//     {
//       Header: 'Leave To',
//       accessor: 'toDate',
//     },
//     {
//       Header: 'Request To',
//       accessor: 'requestTo',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       Cell: ({ value }) => (
//         <span
//           className={`px-2 py-1 rounded ${
//             value === 'Pending'
//               ? 'bg-gray-400'
//               : value === 'Approved'
//               ? 'bg-green-400'
//               : value === 'Reject'
//               ? 'bg-red-400'
//               : ''
//           }`}
//         >
//           {value}
//         </span>
//       ),
//     },
//   ], []);

//   const tableInstance = useTable({ columns, data: leaveRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className='mb-2 flex flex-row justify-between items-center w-[95%] mx-auto'>
//           <h1 className='flex justify-left items-center text-2xl font-bold'>Leave List:</h1>
//         </div>

//         <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map(column => (
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
//                     {row.cells.map(cell => (
//                       <td
//                         {...cell.getCellProps()}
//                         className="px-2 py-2 border border-gray-300"
//                       >
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
//     </div>
//   );
// };

// export default ViewLeaveStatusStudent;





// code for delete pending request also

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [error, setError] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);

//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find(item => item.totalLeave);
//         const balanceLeaveData = leaveDataResponse.data.find(item => item.balanceLeave);

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave);
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//           if (balanceLeave <= 0) {
//             setBalanceLeave(0);
//           }
//         } else {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       // Remove the leave request from the database
//       await API.delete(`/userLeaveRequests/${id}`);

//       // Update the state to reflect the deletion
//       setLeaveRequests(leaveRequests.filter(request => request.id !== id));
//     } catch (err) {
//       setError('Error deleting leave request');
//     }
//   };

//   const columns = useMemo(() => [
//     {
//       Header: 'No',
//       accessor: (row, i) => i + 1,
//     },
//     {
//       Header: 'Reason',
//       accessor: 'reason',
//     },
//     {
//       Header: 'Leave Type',
//       accessor: 'leaveType',
//     },
//     {
//       Header: 'Leave From',
//       accessor: 'fromDate',
//     },
//     {
//       Header: 'Leave To',
//       accessor: 'toDate',
//     },
//     {
//       Header: 'Request To',
//       accessor: 'requestTo',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       Cell: ({ row, value }) => (
//         <div className="flex items-center">
//           <span
//             className={`px-1 py-1 rounded ${
//               value === 'Pending'
//                 ? 'bg-gray-400'
//                 : value === 'Approved'
//                 ? 'bg-green-400'
//                 : value === 'Reject'
//                 ? 'bg-red-400'
//                 : ''
//             }`}
//           >
//             {value}
//           </span>
//           {value === 'Pending' && (
//             <button
//               onClick={() => handleDelete(row.original.id)}
//               className="ml-8 bg-red-500 text-black px-2 py-1 rounded"
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       ),
//     },
//   ], [leaveRequests]);

//   const tableInstance = useTable({ columns, data: leaveRequests });
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className='mb-2 flex flex-row justify-between items-center w-[95%] mx-auto'>
//           <h1 className='flex justify-left items-center text-2xl font-bold'>Leave List:</h1>
//         </div>

//         <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map(column => (
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
//                     {row.cells.map(cell => (
//                       <td
//                         {...cell.getCellProps()}
//                         className="px-2 py-2 border border-gray-300"
//                       >
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
//     </div>
//   );
// };

// export default ViewLeaveStatusStudent;



// before pagination and sorting code

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
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
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);

//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find((item) => item.totalLeave);
//         const balanceLeaveData = leaveDataResponse.data.find((item) => item.balanceLeave);

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave);
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//           if (balanceLeave <= 0) {
//             setBalanceLeave(0);
//           }
//         } else {
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
//       await API.delete(`/userLeaveRequests/${deleteRequestId}`);
//       // Remove the deleted leave request from the state
//       setLeaveRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
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

//   const columns = useMemo(() => [
//     {
//       Header: 'No',
//       accessor: (row, i) => i + 1,
//     },
//     {
//       Header: 'Reason',
//       accessor: 'reason',
//     },
//     {
//       Header: 'Leave Type',
//       accessor: 'leaveType',
//     },
//     {
//       Header: 'Leave From',
//       accessor: 'fromDate',
//     },
//     {
//       Header: 'Leave To',
//       accessor: 'toDate',
//     },
//     {
//       Header: 'Request To',
//       accessor: 'requestTo',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       Cell: ({ value, row }) => (
//         <div className="flex items-center">
//           <span
//             className={`px-2 py-1 rounded ${
//               value === 'Pending'
//                 ? 'bg-gray-400'
//                 : value === 'Approved'
//                 ? 'bg-green-400'
//                 : value === 'Reject'
//                 ? 'bg-red-400'
//                 : ''
//             }`}
//           >
//             {value}
//           </span>
//           {value === 'Pending' && (
//             <button
//               onClick={() => openModal(row.original.id)} // Open the modal on click
//               className="ml-4 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
//             >
//               <MdDelete size={20}/>
//             </button>
//           )}
//         </div>
//       ),
//     },
//   ], []);

//   const tableInstance = useTable({ columns, data: leaveRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">Leave List:</h1>
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

// export default ViewLeaveStatusStudent;



// after pagination and sorting code


// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [displayedRequests, setDisplayedRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [deleteRequestId, setDeleteRequestId] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOption, setSortOption] = useState("Sort By");

//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(leaveRequests.length / itemsPerPage);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);
//         setDisplayedRequests(filteredRequests.slice(0, itemsPerPage));

//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find((item) => item.totalLeave);
//         const balanceLeaveData = leaveDataResponse.data.find((item) => item.balanceLeave);

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave);
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//           if (balanceLeave <= 0) {
//             setBalanceLeave(0);
//           }
//         } else {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   useEffect(() => {
//     // Update displayed requests when page changes
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     setDisplayedRequests(leaveRequests.slice(startIndex, endIndex));
//   }, [currentPage, leaveRequests]);

//   const handleDelete = async () => {
//     try {
//       await API.delete(`/userLeaveRequests/${deleteRequestId}`);
//       setLeaveRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
//       setIsModalOpen(false);
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

//   const handleSortChange = (event) => {
//     const selectedOption = event.target.value;
//     setSortOption(selectedOption);

//     if (selectedOption === "Sort By Date") {
//       const sortedByDate = [...leaveRequests].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
//       setLeaveRequests(sortedByDate);
//     } else {
//       // Reset to original order (for this example, we are just re-fetching, but you may store the original order)
//       setCurrentPage(1);
//     }
//   };

//   const columns = useMemo(() => [
//     {
//       Header: 'No',
//       accessor: (row, i) => i + 1,
//     },
//     {
//       Header: 'Reason',
//       accessor: 'reason',
//     },
//     {
//       Header: 'Leave Type',
//       accessor: 'leaveType',
//     },
//     {
//       Header: 'Leave From',
//       accessor: 'fromDate',
//     },
//     {
//       Header: 'Leave To',
//       accessor: 'toDate',
//     },
//     {
//       Header: 'Request To',
//       accessor: 'requestTo',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       Cell: ({ value, row }) => (
//         <div className="flex items-center">
//           <span
//             className={`px-2 py-1 rounded ${
//               value === 'Pending'
//                 ? 'bg-gray-400'
//                 : value === 'Approved'
//                 ? 'bg-green-400'
//                 : value === 'Reject'
//                 ? 'bg-red-400'
//                 : ''
//             }`}
//           >
//             {value}
//           </span>
//           {value === 'Pending' && (
//             <button
//               onClick={() => openModal(row.original.id)}
//               className="ml-4 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
//             >
//               <MdDelete size={20}/>
//             </button>
//           )}
//         </div>
//       ),
//     },
//   ], []);

//   const tableInstance = useTable({ columns, data: displayedRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">Leave List:</h1>
//           <select
//             className="max-w-36 mt-4 mb-6 flex justify-left items-center text-md font-bold"
//             value={sortOption}
//             onChange={handleSortChange}
//           >
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

//       <div className="flex justify-center mt-4 space-x-2">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//         >
//           &lt;
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => setCurrentPage(index + 1)}
//             className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//         >
//           &gt;
//         </button>
//       </div>

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

// export default ViewLeaveStatusStudent;

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import toast from 'react-hot-toast';

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [originalRequests, setOriginalRequests] = useState([]); // Store the original list
//   const [displayedRequests, setDisplayedRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [deleteRequestId, setDeleteRequestId] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOption, setSortOption] = useState("Sort By");

//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(leaveRequests.length / itemsPerPage);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);
//         setOriginalRequests(filteredRequests); // Save the original list
//         setDisplayedRequests(filteredRequests.slice(0, itemsPerPage));

//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find((item) => item.totalLeave);
//         const balanceLeaveData = leaveDataResponse.data.find((item) => item.balanceLeave);

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave);
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//           if (balanceLeave <= 0) {
//             setBalanceLeave(0);
//           }
//         } else {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   useEffect(() => {
//     // Update displayed requests when page changes
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     setDisplayedRequests(leaveRequests.slice(startIndex, endIndex));
//   }, [currentPage, leaveRequests]);

//   const handleDelete = async () => {
//     try {
//       await API.delete(`/userLeaveRequests/${deleteRequestId}`);
//       setLeaveRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
//       setOriginalRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId)); // Update original list too
//       toast.success("Leave Delete SuccessFully !")
//       setIsModalOpen(false);
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

//   const handleSortChange = (event) => {
//     const selectedOption = event.target.value;
//     setSortOption(selectedOption);

//     if (selectedOption === "Sort By Date") {
//       const sortedByDate = [...leaveRequests].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
//       setLeaveRequests(sortedByDate);
//     } else if (selectedOption === "Sort By Name") {
//       const sortedByName = [...leaveRequests].sort((a, b) => a.name.localeCompare(b.name));
//       setLeaveRequests(sortedByName);
//     } else {
//       // Reset to original list if "Sort By" is selected
//       setLeaveRequests(originalRequests);
//       setCurrentPage(1);
//     }
//   };

//   const columns = useMemo(() => [
//     {
//       Header: 'No',
//       accessor: (row, i) => i + 1,
//     },
//     {
//       Header: 'Reason',
//       accessor: 'reason',
//     },
//     {
//       Header: 'Leave Type',
//       accessor: 'leaveType',
//     },
//     {
//       Header: 'Leave From',
//       accessor: 'fromDate',
//     },
//     {
//       Header: 'Leave To',
//       accessor: 'toDate',
//     },
//     {
//       Header: 'Request To',
//       accessor: 'requestTo',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       Cell: ({ value, row }) => (
//         <div className="flex items-center">
//           <span
//             className={`px-2 py-1 rounded ${
//               value === 'Pending'
//                 ? 'bg-gray-400'
//                 : value === 'Approved'
//                 ? 'bg-green-400'
//                 : value === 'Reject'
//                 ? 'bg-red-400'
//                 : ''
//             }`}
//           >
//             {value}
//           </span>
//           {value === 'Pending' && (
//            <>
//                 <button className="ml-1 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700">
//                     <CiEdit size={20} />
//                 </button>
//                 <button
//                 onClick={() => openModal(row.original.id)}
//                 className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700">
//                 <MdDelete size={20}/>
//                 </button>
//            </>
//           )}
//         </div>
//       ),
//     },
//   ], []);

//   const tableInstance = useTable({ columns, data: displayedRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">Leave List:</h1>
//           <select
//             className="max-w-36 mt-4 mb-6 flex justify-left items-center text-md font-bold"
//             value={sortOption}
//             onChange={handleSortChange}
//           >
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

//   <div className="flex justify-center mt-4 space-x-2">
//     <button
//       onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//       disabled={currentPage === 1}
//       className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//     >
//       &lt;
//     </button>
//     {Array.from({ length: totalPages }, (_, index) => (
//       <button
//         key={index + 1}
//         onClick={() => setCurrentPage(index + 1)}
//         className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
//       >
//         {index + 1}
//       </button>
//     ))}
//     <button
//       onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//       disabled={currentPage === totalPages}
//       className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//     >
//       &gt;
//     </button>
//   </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[40%]">
//             <h3 className="text-lg font-bold mb-4">Are you sure to Delete Leave Request?</h3>
//             <div className="flex justify-end space-x-4">
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

// export default ViewLeaveStatusStudent;

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import toast from 'react-hot-toast';

// const ViewLeaveStatusStudent = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [originalRequests, setOriginalRequests] = useState([]); // Store the original list
//   const [displayedRequests, setDisplayedRequests] = useState([]);
//   const [totalLeave, setTotalLeave] = useState(0);
//   const [balanceLeave, setBalanceLeave] = useState(0);
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [deleteRequestId, setDeleteRequestId] = useState(null);
//   const [editRequestData, setEditRequestData] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOption, setSortOption] = useState("Sort By");

//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(leaveRequests.length / itemsPerPage);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchLeaveData = async () => {
//       try {
//         const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//         const filteredRequests = response.data.filter(
//           (request) => request.name === user.name
//         );
//         setLeaveRequests(filteredRequests);
//         setOriginalRequests(filteredRequests); // Save the original list
//         setDisplayedRequests(filteredRequests.slice(0, itemsPerPage));

//         const leaveDataResponse = await API.get('/userLeaveRequests');
//         const totalLeaveData = leaveDataResponse.data.find((item) => item.totalLeave);
//         const balanceLeaveData = leaveDataResponse.data.find((item) => item.balanceLeave);

//         if (totalLeaveData && balanceLeaveData) {
//           setTotalLeave(totalLeaveData.totalLeave);
//           setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//           if (balanceLeave <= 0) {
//             setBalanceLeave(0);
//           }
//         } else {
//           setError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveData();
//   }, []);

//   useEffect(() => {
//     // Update displayed requests when page changes
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     setDisplayedRequests(leaveRequests.slice(startIndex, endIndex));
//   }, [currentPage, leaveRequests]);

//   const handleDelete = async () => {
//     try {
//       await API.delete(`/userLeaveRequests/${deleteRequestId}`);
//       setLeaveRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
//       setOriginalRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId)); // Update original list too
//       toast.success("Leave Delete SuccessFully !");
//       setIsModalOpen(false);
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

//   const openEditModal = (request) => {
//     setEditRequestData(request);
//     setIsEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setIsEditModalOpen(false);
//     setEditRequestData({});
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditRequestData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleEditSubmit = async () => {
//     try {
//       await API.put(`/userLeaveRequests/${editRequestData.id}`, editRequestData);
//       setLeaveRequests((prevRequests) =>
//         prevRequests.map((request) =>
//           request.id === editRequestData.id ? editRequestData : request
//         )
//       );
//       toast.success("Leave Request Updated Successfully!");
//       closeEditModal();
//     } catch (error) {
//       setError('Failed to update the leave request');
//     }
//   };

//   const handleSortChange = (event) => {
//     const selectedOption = event.target.value;
//     setSortOption(selectedOption);

//     if (selectedOption === "Sort By Date") {
//       const sortedByDate = [...leaveRequests].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
//       setLeaveRequests(sortedByDate);
//     } else if (selectedOption === "Sort By Name") {
//       const sortedByName = [...leaveRequests].sort((a, b) => a.name.localeCompare(b.name));
//       setLeaveRequests(sortedByName);
//     } else {
//       // Reset to original list if "Sort By" is selected
//       setLeaveRequests(originalRequests);
//       setCurrentPage(1);
//     }
//   };

//   const columns = useMemo(() => [
//     {
//       Header: 'No',
//       accessor: (row, i) => i + 1,
//     },
//     {
//       Header: 'Reason',
//       accessor: 'reason',
//     },
//     {
//       Header: 'Leave Type',
//       accessor: 'leaveType',
//     },
//     {
//       Header: 'Leave From',
//       accessor: 'fromDate',
//     },
//     {
//       Header: 'Leave To',
//       accessor: 'toDate',
//     },
//     {
//       Header: 'Request To',
//       accessor: 'requestTo',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//       Cell: ({ value, row }) => (
//         <div className="flex items-center">
//           <span
//             className={`px-2 py-1 rounded ${
//               value === 'Pending'
//                 ? 'bg-gray-400'
//                 : value === 'Approved'
//                 ? 'bg-green-400'
//                 : value === 'Reject'
//                 ? 'bg-red-400'
//                 : ''
//             }`}
//           >
//             {value}
//           </span>
//           {value === 'Pending' && (
//            <>
//                 <button
//                   onClick={() => openEditModal(row.original)}
//                   className="ml-1 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700"
//                 >
//                     <CiEdit size={20} />
//                 </button>
//                 <button
//                   onClick={() => openModal(row.original.id)}
//                   className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700"
//                 >
//                   <MdDelete size={20}/>
//                 </button>
//            </>
//           )}
//         </div>
//       ),
//     },
//   ], []);

//   const tableInstance = useTable({ columns, data: displayedRequests });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <div className="overflow-x-auto">
//         <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//           <h1 className="flex justify-left items-center text-2xl font-bold">Leave List:</h1>
//           <select
//             className="max-w-36 mt-4 mb-6 flex justify-left items-center text-md font-bold"
//             value={sortOption}
//             onChange={handleSortChange}
//           >
//             <option>Sort By</option>
//             <option>Sort By Date</option>
//           </select>
//         </div>

//     <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//             {headerGroup.headers.map((column) => (
//               <th
//                 {...column.getHeaderProps()}
//                 className="px-2 py-2 border border-gray-300 text-left"
//               >
//                 {column.render('Header')}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.length === 0 ? (
//           <tr>
//             <td colSpan="7" className="text-center py-4">
//               No leave requests found.
//             </td>
//           </tr>
//         ) : (
//           rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()} className="px-2 py-2 border border-gray-300">
//                     {cell.render('Cell')}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })
//         )}
//       </tbody>
//     </table>

//     {/* Pagination */}
//     <div className="mt-4 flex justify-center">
//       <button
//         onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
//         disabled={currentPage === 1}
//         className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2"
//       >
//         Previous
//       </button>
//       <button
//         onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
//         disabled={currentPage === totalPages}
//         className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
//       >
//         Next
//       </button>
//     </div>
//   </div>

//   {/* Delete Modal */}
//   {isModalOpen && (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="bg-white p-6 rounded-md">
//         <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
//         <p>Are you sure you want to delete this leave request?</p>
//         <div className="flex justify-end mt-4">
//           <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Delete</button>
//           <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
//         </div>
//       </div>
//     </div>
//   )}

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-md w-80">
//             <h2 className="text-lg font-bold mb-4">Edit Leave Request</h2>
//             <div className="flex flex-col space-y-4">
//               <input
//                 type="text"
//                 name="reason"
//                 value={editRequestData.reason || ''}
//                 onChange={handleEditChange}
//                 placeholder="Reason"
//                 className="border p-2 rounded-md"
//               />
//               <input
//                 type="date"
//                 name="fromDate"
//                 value={editRequestData.fromDate || ''}
//                 onChange={handleEditChange}
//                 className="border p-2 rounded-md"
//               />
//               <input
//                 type="date"
//                 name="toDate"
//                 value={editRequestData.toDate || ''}
//                 onChange={handleEditChange}
//                 className="border p-2 rounded-md"
//               />
//               <select
//                 name="leaveType"
//                 value={editRequestData.leaveType || ''}
//                 onChange={handleEditChange}
//                 className="border p-2 rounded-md"
//               >
//                 <option value="">Select Leave Type</option>
//                 <option value="Full Day">Full Day</option>
//                 <option value="First Half">First Half</option>
//                 <option value="Second Half">Second Half</option>
//               </select>
//               <div className="flex justify-end mt-4">
//                 <button onClick={handleEditSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
//                 <button onClick={closeEditModal} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewLeaveStatusStudent;


// without chart code

// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import toast from 'react-hot-toast';

// const ViewLeaveStatusStudent = () => {
//     const [leaveRequests, setLeaveRequests] = useState([]);
//     const [originalRequests, setOriginalRequests] = useState([]);
//     const [displayedRequests, setDisplayedRequests] = useState([]);
//     const [totalLeave, setTotalLeave] = useState(0);
//     const [balanceLeave, setBalanceLeave] = useState(0);
//     const [error, setError] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [deleteRequestId, setDeleteRequestId] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [sortOption, setSortOption] = useState("Sort By");
//     const [editRequestData, setEditRequestData] = useState({});

//     const itemsPerPage = 5;
//     const totalPages = Math.ceil(leaveRequests.length / itemsPerPage);

//     const API = axios.create({
//         baseURL: 'http://localhost:3001',
//     });

//     const user = JSON.parse(localStorage.getItem('user'));

//     useEffect(() => {
//         const fetchLeaveData = async () => {
//             try {
//                 const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//                 const filteredRequests = response.data.filter(
//                     (request) => request.name === user.name
//                 );
//                 setLeaveRequests(filteredRequests);
//                 setOriginalRequests(filteredRequests);
//                 setDisplayedRequests(filteredRequests.slice(0, itemsPerPage));

//                 const leaveDataResponse = await API.get('/userLeaveRequests');
//                 const totalLeaveData = leaveDataResponse.data.find((item) => item.totalLeave);
//                 const balanceLeaveData = leaveDataResponse.data.find((item) => item.balanceLeave);

//                 if (totalLeaveData && balanceLeaveData) {
//                     setTotalLeave(totalLeaveData.totalLeave);
//                     setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
//                     if (balanceLeave <= 0) {
//                         setBalanceLeave(0);
//                     }
//                 } else {
//                     setError('No Leave Data Available!');
//                 }
//             } catch (err) {
//                 setError('Error fetching leave requests');
//             }
//         };

//         fetchLeaveData();
//     }, []);

//     useEffect(() => {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         setDisplayedRequests(leaveRequests.slice(startIndex, endIndex));
//     }, [currentPage, leaveRequests]);

//     const handleDelete = async () => {
//         try {
//             await API.delete(`/userLeaveRequests/${deleteRequestId}`);
//             setLeaveRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
//             setOriginalRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
//             toast.success("Leave Deleted Successfully!")
//             setIsModalOpen(false);
//         } catch (error) {
//             setError('Failed to delete the leave request');
//         }
//     };

//     const openModal = (id) => {
//         setDeleteRequestId(id);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setDeleteRequestId(null);
//     };

//     const openEditModal = (request) => {
//         setEditRequestData(request);
//         setIsEditModalOpen(true);
//     };

//     const closeEditModal = () => {
//         setIsEditModalOpen(false);
//         setEditRequestData({});
//     };

//     const handleEditChange = (e) => {
//         const { name, value } = e.target;
//         setEditRequestData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleEditSubmit = async () => {
//         if (!editRequestData.reason) {
//             toast.error("Reason are required!");
//             return;
//           }
//         try {
//             await API.put(`/userLeaveRequests/${editRequestData.id}`, editRequestData);
//             setLeaveRequests((prevRequests) =>
//                 prevRequests.map((request) =>
//                     request.id === editRequestData.id ? editRequestData : request
//                 )
//             );
//             toast.success("Leave Updated Successfully!");
//             closeEditModal();
//         } catch (error) {
//             setError("Failed to update the leave request");
//         }
//     };

//     const handleSortChange = (event) => {
//         const selectedOption = event.target.value;
//         setSortOption(selectedOption);

//         if (selectedOption === "Sort By Date") {
//             const sortedByDate = [...leaveRequests].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
//             setLeaveRequests(sortedByDate);
//         } else if (selectedOption === "Sort By Name") {
//             const sortedByName = [...leaveRequests].sort((a, b) => a.name.localeCompare(b.name));
//             setLeaveRequests(sortedByName);
//         } else {
//             setLeaveRequests(originalRequests);
//             setCurrentPage(1);
//         }
//     };

//     const columns = useMemo(() => [
//         {
//             Header: 'No',
//             accessor: (row, i) => i + 1,
//         },
//         {
//             Header: 'Reason',
//             accessor: 'reason',
//         },
//         {
//             Header: 'Leave Type',
//             accessor: 'leaveType',
//         },
//         {
//             Header: 'Leave From',
//             accessor: 'fromDate',
//         },
//         {
//             Header: 'Leave To',
//             accessor: 'toDate',
//         },
//         {
//             Header: 'Request To',
//             accessor: 'requestTo',
//         },
//         {
//             Header: 'Status',
//             accessor: 'status',
//             Cell: ({ value, row }) => (
//                 <div className="flex items-center">
//                     <span
//                         className={`px-2 py-1 rounded ${value === 'Pending'
//                             ? 'bg-gray-400'
//                             : value === 'Approved'
//                                 ? 'bg-green-400'
//                                 : value === 'Reject'
//                                     ? 'bg-red-400'
//                                     : ''
//                             }`}
//                     >
//                         {value}
//                     </span>
//                     {value === 'Pending' && (
//                         <>
//                             <button onClick={() => openEditModal(row.original)} className="ml-1 bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-700">
//                                 <CiEdit size={20} />
//                             </button>
//                             <button
//                                 onClick={() => openModal(row.original.id)}
//                                 className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700">
//                                 <MdDelete size={20} />
//                             </button>
//                         </>
//                     )}
//                 </div>
//             ),
//         },
//     ], []);

//     const tableInstance = useTable({ columns, data: displayedRequests });
//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//     return (
//         <div className="container mx-auto p-4 mt-20">
//             <div className="overflow-x-auto">
//                 <div className="mb-2 flex flex-row justify-between items-center w-[95%] mx-auto">
//                     <h1 className="flex justify-left items-center text-2xl font-bold">Leave List:</h1>
//                     <select
//                         className="max-w-36 mt-4 mb-6 flex justify-left items-center text-md font-bold"
//                         value={sortOption}
//                         onChange={handleSortChange}
//                     >
//                         <option>Sort By</option>
//                         <option>Sort By Date</option>
//                     </select>
//                 </div>

//                 <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
//                     <thead>
//                         {headerGroups.map((headerGroup) => (
//                             <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                                 {headerGroup.headers.map((column) => (
//                                     <th
//                                         {...column.getHeaderProps()}
//                                         className="px-2 py-2 border border-gray-300 text-left"
//                                     >
//                                         {column.render('Header')}
//                                     </th>
//                                 ))}
//                             </tr>
//                         ))}
//                     </thead>
//                     <tbody {...getTableBodyProps()}>
//                         {rows.length === 0 ? (
//                             <tr>
//                                 <td colSpan="7" className="text-center py-4">
//                                     No leave requests found.
//                                 </td>
//                             </tr>
//                         ) : (
//                             rows.map((row) => {
//                                 prepareRow(row);
//                                 return (
//                                     <tr {...row.getRowProps()}>
//                                         {row.cells.map((cell) => (
//                                             <td {...cell.getCellProps()} className="px-2 py-2 border border-gray-300">
//                                                 {cell.render('Cell')}
//                                             </td>
//                                         ))}
//                                     </tr>
//                                 );
//                             })
//                         )}
//                     </tbody>
//                 </table>

//                 {/* Pagination */}
//                 <div className="flex justify-center mt-4 space-x-2">
//                     <button
//                         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                         disabled={currentPage === 1}
//                         className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                     >
//                         &lt;
//                     </button>
//                     {Array.from({ length: totalPages }, (_, index) => (
//                         <button
//                             key={index + 1}
//                             onClick={() => setCurrentPage(index + 1)}
//                             className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
//                         >
//                             {index + 1}
//                         </button>
//                     ))}
//                     <button
//                         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                         className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                     >
//                         &gt;
//                     </button>
//                 </div>
//             </div>

//             <div>
//                 <h1>Students Attendance Graph</h1>
//             </div>
//             {/* Delete Modal */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//                     <div className="bg-white p-6 rounded-md">
//                         <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
//                         <p>Are you sure you want to delete this leave request?</p>
//                         <div className="flex justify-end mt-4">
//                             <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
//                             <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Delete</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Edit Modal */}
//             {isEditModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[40%]">
//                         <h3 className="text-lg font-bold mb-4">Edit Leave Request</h3>
//                         <label>Reason :</label>
//                         <input
//                             type="text"
//                             name="reason"
//                             value={editRequestData.reason || ''}
//                             onChange={handleEditChange}
//                             placeholder="Reason"
//                             className="border p-2 rounded-md mb-4 w-full"
//                         />
//                         <label>From Date :</label>
//                         <input
//                             type="date"
//                             name="fromDate"
//                             value={editRequestData.fromDate || ''}
//                             onChange={handleEditChange}
//                             className="border p-2 rounded-md mb-4 w-full"
//                         />
//                         <label>To Date :</label>
//                         <input
//                             type="date"
//                             name="toDate"
//                             value={editRequestData.toDate || ''}
//                             onChange={handleEditChange}
//                             className="border p-2 rounded-md mb-4 w-full"
//                         />
//                         <label>Leave Type :</label>
//                         <select
//                             name="leaveType"
//                             value={editRequestData.leaveType || ''}
//                             onChange={handleEditChange}
//                             className="w-full px-4 py-2 mb-4 border border-gray-300"
//                         >
//                             <option value="Full Day">Full Day</option>
//                             <option value="First Half">First Half</option>
//                             <option value="Second Half">Second Half</option>
//                         </select>
//                         <button onClick={handleEditSubmit} className="bg-blue-500 text-white p-2 rounded mr-2">Save</button>
//                         <button onClick={closeEditModal} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default ViewLeaveStatusStudent;


// with chart code


import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import toast from 'react-hot-toast';
import ApexCharts from 'react-apexcharts';

const ViewLeaveStatusStudent = () => {
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [originalRequests, setOriginalRequests] = useState([]);
    const [displayedRequests, setDisplayedRequests] = useState([]);
    const [totalLeave, setTotalLeave] = useState(0);
    const [balanceLeave, setBalanceLeave] = useState(0);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [deleteRequestId, setDeleteRequestId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("Sort By");
    const [editRequestData, setEditRequestData] = useState({});

    const itemsPerPage = 4;
    const totalPages = Math.ceil(leaveRequests.length / itemsPerPage);

    const API = axios.create({
        baseURL: 'http://localhost:3001',
    });

    const user = JSON.parse(localStorage.getItem('user'));

   
    const fetchLeaveData = async () => {
        try {
            const response = await API.get(`/userLeaveRequests?name=${user.name}`);
            const filteredRequests = response.data.filter(
                (request) => request.name === user.name
            );
            setLeaveRequests(filteredRequests);
            setOriginalRequests(filteredRequests);
            setDisplayedRequests(filteredRequests.slice(0, itemsPerPage));

            const leaveDataResponse = await API.get('/userLeaveRequests');
            const totalLeaveData = leaveDataResponse.data.find((item) => item.totalLeave);
            const balanceLeaveData = leaveDataResponse.data.find((item) => item.balanceLeave);

            if (totalLeaveData && balanceLeaveData) {
                setTotalLeave(totalLeaveData.totalLeave);
                setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
                if (balanceLeave <= 0) {
                    setBalanceLeave(0);
                }
            } else {
                setError('No Leave Data Available!');
            }
        } catch (err) {
            setError('Error fetching leave requests');
        }
    };

    useEffect(() => {
        fetchLeaveData();
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayedRequests(leaveRequests.slice(startIndex, endIndex));
    }, [currentPage, leaveRequests]);

    const handleDelete = async () => {
        try {
            await API.delete(`/userLeaveRequests/${deleteRequestId}`);
            setLeaveRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
            setOriginalRequests((prevRequests) => prevRequests.filter((request) => request.id !== deleteRequestId));
            toast.success("Leave Deleted Successfully!")
            setIsModalOpen(false);
        } catch (error) {
            setError('Failed to delete the leave request');
        }
    };

    const openModal = (id) => {
        setDeleteRequestId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setDeleteRequestId(null);
    };

    const openEditModal = (request) => {
        setEditRequestData(request);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditRequestData({});
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditRequestData((prevData) => ({ ...prevData, [name]: value }));
    };
        
    // after sort by chnages code

    const handleEditSubmit = async () => {
        if (!editRequestData.reason) {
            toast.error("Reason is required!");
            return;
        }
    
        const fromDate = new Date(editRequestData.fromDate);
        const toDate = new Date(editRequestData.toDate);
    
        if (fromDate > toDate) {
            toast.error("'From' date cannot be later than the 'To' date.");
            return;
        }
    
        try {
            await API.put(`/userLeaveRequests/${editRequestData.id}`, editRequestData);
            
            // Update both leaveRequests and originalRequests to reflect the change
            const updatedRequests = leaveRequests.map((request) =>
                request.id === editRequestData.id ? editRequestData : request
            );
            setLeaveRequests(updatedRequests);
            setOriginalRequests(updatedRequests); // Update the originalRequests as well
    
            toast.success("Leave Updated Successfully!");
            closeEditModal();
        } catch (error) {
            setError("Failed to update the leave request");
        }
    };

    // (const handleEditSubmit = async () => {
    //     if (!editRequestData.reason) {
    //         toast.error("Reason are required!");
    //         return;
    //     }

    //      // Convert date strings to Date objects for comparison
    //     const fromDate = new Date(editRequestData.fromDate);
    //     const toDate = new Date(editRequestData.toDate);
    
    //     if (fromDate > toDate) {
    //     toast.error("'From' date cannot be later than the 'To' date.");
    //     return;
    //     }
        
    //     try {
    //         await API.put(`/userLeaveRequests/${editRequestData.id}`, editRequestData);
    //         setLeaveRequests((prevRequests) =>
    //             prevRequests.map((request) =>
    //                 request.id === editRequestData.id ? editRequestData : request
    //             )
    //         );
    //         toast.success("Leave Updated Successfully!");
    //         closeEditModal();
    //     } catch (error) {
    //         setError("Failed to update the leave request");
    //     }
    // };)

    // after sort by chnages code

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
    
        let sortedRequests = [...leaveRequests];
    
        if (selectedOption === "Sort By Date") {
            sortedRequests.sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
        } else if (selectedOption === "Sort By Name") {
            sortedRequests.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sortedRequests = [...originalRequests]; // Reset to originalRequests if "Sort By" is selected
        }
    
        setLeaveRequests(sortedRequests);
        setDisplayedRequests(sortedRequests.slice(0, itemsPerPage)); // Reflect the sorting in displayedRequests as well
    };
    
    // const handleSortChange = (event) => {
    //     const selectedOption = event.target.value;
    //     setSortOption(selectedOption);

    //     if (selectedOption === "Sort By Date") {
    //         const sortedByDate = [...leaveRequests].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
    //         setLeaveRequests(sortedByDate);
    //     } else if (selectedOption === "Sort By Name") {
    //         const sortedByName = [...leaveRequests].sort((a, b) => a.name.localeCompare(b.name));
    //         setLeaveRequests(sortedByName);
    //     } else {
    //         setLeaveRequests(originalRequests);
    //         setCurrentPage(1);
    //     }
    // };

    const columns = useMemo(() => [
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
                        className={`px-2 py-1 rounded ${value === 'Pending'
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
                                onClick={() => openModal(row.original.id)}
                                className="ml-1 bg-red-500 text-white px-1 py-1 rounded hover:bg-red-700">
                                <MdDelete size={20} />
                            </button>
                        </>
                    )}
                </div>
            ),
        },
    ], [currentPage,itemsPerPage]);

    const tableInstance = useTable({ columns, data: displayedRequests });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    // Data for the pie chart
    const pieChartData = {
        series: [leaveRequests.length, totalLeave - balanceLeave - leaveRequests.length],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Used Leave', 'Balance Leave'],
            colors: ['#F44336', '#FFEB3B'],
            legend: {
                position: 'top',
                horizontalAlign: 'center',
            },
        },
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="overflow-x-auto">
                <div className="mt-4 mb-0 flex flex-row justify-between items-center w-[95%] mx-auto">
                    <h1 className="flex justify-left items-center text-2xl font-bold">Leave List:</h1>
                    <select
                        className="max-w-36 mt-4 mb-6 flex justify-left items-center text-md font-bold"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
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
                                    No leave requests found.
                                </td>
                            </tr>
                        ) : (
                            rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()} className="px-2 py-2 border border-gray-300">
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
                <div className="flex justify-center mt-2 space-x-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        &gt;
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-2'>
                <h1 className='text-2xl font-bold'>Students Leave Graph</h1>
                <ApexCharts
                    options={pieChartData.options}
                    series={pieChartData.series}
                    type="pie"
                    height={250}
                />
            </div>
            {/* Delete Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-md">
                        <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
                        <p>Are you sure To Delete this Leave Request?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
                            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Delete</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[40%]">
                        <h3 className="text-lg font-bold mb-4">Edit Leave Request</h3>
                        <label>Reason :</label>
                        <input
                            type="text"
                            name="reason"
                            value={editRequestData.reason || ''}
                            onChange={handleEditChange}
                            placeholder="Reason"
                            className="border p-2 rounded-md mb-4 w-full"
                        />
                        <label>From Date :</label>
                        <input
                            type="date"
                            name="fromDate"
                            value={editRequestData.fromDate || ''}
                            onChange={handleEditChange}
                            className="border p-2 rounded-md mb-4 w-full"
                        />
                        <label>To Date :</label>
                        <input
                            type="date"
                            name="toDate"
                            value={editRequestData.toDate || ''}
                            onChange={handleEditChange}
                            className="border p-2 rounded-md mb-4 w-full"
                        />
                        <label>Leave Type :</label>
                        <select
                            name="leaveType"
                            value={editRequestData.leaveType || ''}
                            onChange={handleEditChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300"
                        >
                            <option value="Full Day">Full Day</option>
                            <option value="First Half">First Half</option>
                            <option value="Second Half">Second Half</option>
                        </select>
                        <button onClick={handleEditSubmit} className="bg-blue-500 text-white p-2 rounded mr-2">Save</button>
                        <button onClick={closeEditModal} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewLeaveStatusStudent;