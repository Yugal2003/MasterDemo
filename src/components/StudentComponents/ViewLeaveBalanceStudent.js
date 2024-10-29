import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewLeaveBalanceStudent = () => {
    const [index,setIndex] = useState(0);
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [error, setError] = useState('');
    const [totalLeave, setTotalLeave] = useState(12);
    const [balanceLeave, setBalanceLeave] = useState(0);
    const [usedLeave, setUsedLeave] = useState(0);
    const [totalDaysInMonth, setTotalDaysInMonth] = useState(0);
    const [totalWorkingDays,setTotalWorkingDays] = useState(0);
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
        let totalDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        setTotalDaysInMonth(totalDaysMonth)
    
        if (usedLeavesCount > totalDaysMonth) {
            setError("Used leaves cannot exceed total days in the month");
            usedLeavesCount = totalDaysMonth; 
        }
    
        let availableLeavesCount = totalLeave - usedLeavesCount;
        let attendancePercent = ((totalDaysMonth - usedLeavesCount) / totalDaysMonth) * 100;
    
        setUsedLeave(usedLeavesCount);
        setBalanceLeave(availableLeavesCount);
        setTotalWorkingDays(totalDaysMonth - usedLeavesCount); 
        setAttendancePercentage(attendancePercent.toFixed(2));
    };
    
    
    return (
        <div className='flex flex-col'>
            <div className="container mx-auto p-4">
                <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Leave Balance:</h1>
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Monthly Days</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Total Working Days</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Used Leave</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
                            <th className="px-2 py-2 border border-gray-300 text-left">Attendance Percentage(Month)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                            <td className="px-2 py-2 border border-gray-300">{totalDaysInMonth}</td>
                            <td className="px-2 py-2 border border-gray-300">{totalWorkingDays}</td>
                            <td className="px-2 py-2 border border-gray-300">{balanceLeave}</td>
                            <td className="px-2 py-2 border border-gray-300">{usedLeave}</td>
                            <td className="px-2 py-2 border border-gray-300">{totalLeave}</td>
                            <td className="px-2 py-2 border border-gray-300">{attendancePercentage}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewLeaveBalanceStudent;