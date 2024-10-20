//old code

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewLeaveBalanceStudent = () => {

//     const [leaveRequests, setLeaveRequests] = useState([]);
//     const [error, setError] = useState('');

//     const API = axios.create({
//         baseURL: 'http://localhost:3001',
//     });

//     const user = JSON.parse(localStorage.getItem('user'));
//     console.log(user.name);

//     useEffect(() => {
//         const fetchLeaveRequests = async () => {
//             try {
//                 // Replace with your API endpoint
//                 const response = await API.get(`/userLeaveRequests?name=${user.name}`);
//                 const filteredRequests = response.data.filter(
//                     (request) => request.name === user.name
//                 );
//                 if (filteredRequests) {
//                     console.log(filteredRequests.data);
//                     setLeaveRequests(filteredRequests);
//                 }
//                 else {
//                     setError('No Leave Data Availbale !');
//                 }
//             }
//             catch (err) {
//                 setError('Error fetching leave requests');
//             }
//         };

//         fetchLeaveRequests();
//     }, []);

//     return (
//         <div className='flex flex-col'>
//             {/* Students */}
//             <div class="container mx-auto p-4">
//                 <div class="overflow-x-auto">
//                     <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Students Leave Report :-</h1>
//                     <table class="min-w-full table-auto border-collapse border border-gray-300">
//                         <thead>
//                             <tr class="bg-gray-200">
//                                 <th class="px-2 py-2 border border-gray-300 text-left">ID</th>
//                                 <th class="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
//                                 <th class="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
//                                 <th class="px-1 py-2 border border-gray-300 text-left">Used Leave</th>
//                                 <th class="px-0 py-2 border border-gray-300 text-left">Year</th>
//                                 <th class="px-0 py-2 border border-gray-300 text-left">Total Working Days</th>
//                                 <th class="px-0 py-2 border border-gray-300 text-left">Attendance Percentage</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {leaveRequests.length === 0 ? (
//                                 <tr>
//                                     <td colSpan="6" className="text-center py-4">
//                                         No leave requests found.
//                                     </td>
//                                 </tr>
//                             ) : (
//                                 leaveRequests.map((request,index) => (
//                                     <tr key={request.id}>
//                                         <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
//                                         <td className="px-2 py-2 border border-gray-300">12</td>
//                                         <td className="px-2 py-2 border border-gray-300">3</td>
//                                         <td className="px-2 py-2 border border-gray-300">5</td>
//                                         <td className="px-2 py-2 border border-gray-300">
//                                             {new Date(request.fromDate).getFullYear()}
//                                         </td>
//                                         <td className="px-2 py-2 border border-gray-300">24</td>
//                                         <td className="px-2 py-2 border border-gray-300">88%</td>
//                                     </tr>
//                                 ))
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ViewLeaveBalanceStudent;







//current code

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewLeaveBalanceStudent = () => {
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [error, setError] = useState('');
    const [totalLeave, setTotalLeave] = useState(12); // Assuming total leave is constant
    const [balanceLeave, setBalanceLeave] = useState(0);
    const [usedLeave, setUsedLeave] = useState(0);
    const [totalWorkingDays, setTotalWorkingDays] = useState(0);
    const [attendancePercentage, setAttendancePercentage] = useState(0);

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

                if (filteredRequests.length > 0) {
                    setLeaveRequests(filteredRequests);
                    calculateLeaveData(filteredRequests);
                } else {
                    setError('No Leave Data Available!');
                }
            } catch (err) {
                setError('Error fetching leave requests');
            }
        };

        fetchLeaveRequests();
    }, []);

    const calculateLeaveData = (requests) => {
        let usedLeavesCount = requests.length;
        let totalDaysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        
        // Calculate balance leave and attendance percentage
        let availableLeavesCount = totalLeave - usedLeavesCount;
        let attendancePercent = ((totalDaysInMonth - usedLeavesCount) / totalDaysInMonth) * 100;

        // Update state with calculated values
        setUsedLeave(usedLeavesCount);
        setBalanceLeave(availableLeavesCount);
        setTotalWorkingDays(totalDaysInMonth - usedLeave);
        setAttendancePercentage(attendancePercent.toFixed(2)); // Keep two decimal places
    };

    return (
        <div className='flex flex-col'>
            <div className="container mx-auto p-4">
                <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Leave Report:</h1>
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Date</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Total Working Days</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveRequests.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">
                                    No leave requests found.
                                </td>
                            </tr>
                        ) : (
                            leaveRequests.map((request, index) => (
                                <tr key={request.id}>
                                    <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                                    <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
                                    <td className="px-2 py-2 border border-gray-300">{balanceLeave}</td>
                                    <td className="px-2 py-2 border border-gray-300">{usedLeave}</td>
                                    <td className="px-2 py-2 border border-gray-300">
                                        {request.fromDate}
                                    </td>
                                    <td className="px-2 py-2 border border-gray-300">{totalWorkingDays}</td>
                                    <td className="px-2 py-2 border border-gray-300">{attendancePercentage}%</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewLeaveBalanceStudent;