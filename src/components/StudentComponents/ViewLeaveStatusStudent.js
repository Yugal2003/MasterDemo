// before leave apporvel code

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const ViewLeaveStatusStudent = () => {
//   return (
//     <div class="container mx-auto p-4">
//       <div class="overflow-x-auto">
//         <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Leave List :-</h1>
//         <table class="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr class="bg-gray-200">
//               <th class="px-2 py-2 border border-gray-300 text-left">Reason</th>
//               <th class="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
//               <th class="px-2 py-2 border border-gray-300 text-left">Leave From</th>
//               <th class="px-2 py-2 border border-gray-300 text-left">Leave To</th>
//               <th class="px-2 py-2 border border-gray-300 text-left">Request To</th>
//               <th class="px-1 py-2 border border-gray-300 text-left">Status</th>
//               <th class="px-0 py-2 border border-gray-300 text-left">Balance Leave</th>
//               <th class="px-0 py-2 border border-gray-300 text-left">Leave Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td class="px-1 py-2 border border-gray-300">Out of city</td>
//               <td class="px-4 py-2 border border-gray-300">Fullday</td>
//               <td class="px-4 py-2 border border-gray-300">07/10/2024</td>
//               <td class="px-4 py-2 border border-gray-300">07/10/2024</td>
//               <td class="px-4 py-2 border border-gray-300">Radhika Mam</td>
//               <td class="px-4 py-2 border border-gray-300">
//                 <button class="bg-green-500 text-white px-3 py-1 rounded">Approved</button>
//               </td>
//               <td class="px-4 py-2 border border-gray-300">8</td>
//               <td class="px-4 py-2 border border-gray-300">88%</td>
//             </tr>
//             <tr>
//               <td class="px-1 py-2 border border-gray-300">Health is not well</td>
//               <td class="px-4 py-2 border border-gray-300">Secondhalf</td>
//               <td class="px-4 py-2 border border-gray-300">18/09/2024</td>
//               <td class="px-4 py-2 border border-gray-300">18/09/2024</td>
//               <td class="px-4 py-2 border border-gray-300">Raman Sir</td>
//               <td class="px-4 py-2 border border-gray-300">
//                 <button class="bg-green-500 text-white px-3 py-1 rounded">Approved</button>
//               </td>
//               <td class="px-4 py-2 border border-gray-300">10</td>
//               <td class="px-0 py-2 border border-gray-300">80%</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default ViewLeaveStatusStudent













// current code

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewLeaveStatusStudent = () => {

  const [leaveRequests, setLeaveRequests] = useState([]);
  const [error, setError] = useState('');

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.name);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        // Replace with your API endpoint
        const response = await API.get(`/userLeaveRequests?name=${user.name}`);
        const filteredRequests = response.data.filter(
          (request) => request.name === user.name
        );
        if (filteredRequests) {
          setLeaveRequests(filteredRequests);
        }
        else {
          setError('No Leave Data Availbale !');
        }
      } 
      catch (err) {
        setError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Leave List:</h1>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Leave From</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Leave To</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Request To</th>
              <th className="px-1 py-2 border border-gray-300 text-left">Status</th>
              <th className="px-0 py-2 border border-gray-300 text-left">Balance Leave</th>
              <th className="px-0 py-2 border border-gray-300 text-left">Leave Percentage</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No leave requests found.
                </td>
              </tr>
            ) : (
              leaveRequests.map((request) => (
                <tr key={request.id}>
                  <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.leaveType}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.fromDate}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.toDate}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.requestTo}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLeaveStatusStudent;
