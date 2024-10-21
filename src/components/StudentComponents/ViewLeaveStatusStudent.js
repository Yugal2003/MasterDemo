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





import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

const ViewLeaveStatusStudent = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [totalLeave, setTotalLeave] = useState(0);
  const [balanceLeave, setBalanceLeave] = useState(0);
  const [error, setError] = useState('');

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        // Fetch user leave requests
        const response = await API.get(`/userLeaveRequests?name=${user.name}`);
        const filteredRequests = response.data.filter(
          (request) => request.name === user.name
        );
        setLeaveRequests(filteredRequests);

        // Fetch total and balance leaves
        const leaveDataResponse = await API.get('/userLeaveRequests');
        const totalLeaveData = leaveDataResponse.data.find(item => item.totalLeave);
        const balanceLeaveData = leaveDataResponse.data.find(item => item.balanceLeave);

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

    fetchLeaveData();
  }, []);

  const usedLeaves = leaveRequests.length;
  const leavePercentage = totalLeave > 0 ? ((totalLeave - usedLeaves) / totalLeave) * 100 : 0;

  // Define columns for react-table
  const columns = useMemo(() => [
    {
      Header: 'No',
      accessor: (row, i) => i + 1, // custom accessor for index
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
      Cell: ({ value }) => (
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
      ),
    },
  ], []);

  // Pass data and columns to react-table
  const tableInstance = useTable({ columns, data: leaveRequests });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="overflow-x-auto">
        <div className='mb-2 flex flex-row justify-between items-center w-[95%] mx-auto'>
          <h1 className='flex justify-left items-center text-2xl font-bold'>Leave List:</h1>
        </div>
        
        <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                {headerGroup.headers.map(column => (
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
                    {row.cells.map(cell => (
                      <td
                        {...cell.getCellProps()}
                        className="px-2 py-2 border border-gray-300"
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLeaveStatusStudent;