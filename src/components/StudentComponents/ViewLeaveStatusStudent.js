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

import React from 'react';

const ViewLeaveStatusStudent = () => {
  const leaveRequests = [
    {
      reason: "Out of city",
      leaveType: "Fullday",
      fromDate: "07/10/2024",
      toDate: "07/10/2024",
      requestTo: "Radhika Mam",
      status: "Approved",
      balanceLeave: 8,
      leavePercentage: "88%",
    },
    {
      reason: "Health is not well",
      leaveType: "Second Half",
      fromDate: "18/09/2024",
      toDate: "18/09/2024",
      requestTo: "Raman Sir",
      status: "Approved",
      balanceLeave: 10,
      leavePercentage: "80%",
    },
  ];

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
            {leaveRequests.map((request, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2 py-2">{request.reason}</td>
                <td className="border border-gray-300 px-2 py-2">{request.leaveType}</td>
                <td className="border border-gray-300 px-2 py-2">{request.fromDate}</td>
                <td className="border border-gray-300 px-2 py-2">{request.toDate}</td>
                <td className="border border-gray-300 px-2 py-2">{request.requestTo}</td>
                <td className="border border-gray-300 px-2 py-2">
                  <button className={`px-2 py-1 text-white rounded ${request.status === "Approved" ? "bg-green-500" : "bg-red-500"}`}>
                    {request.status}
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2">{request.balanceLeave}</td>
                <td className="border border-gray-300 px-2 py-2">{request.leavePercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLeaveStatusStudent;
