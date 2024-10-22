import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const ViewLeaveStatusHOD = () => {
  const [hodLeaveRequests, setHodLeaveRequests] = useState([]);
  const [studentLeaveRequests, setStudentLeaveRequests] = useState([]);
  const [hodError, setHodError] = useState('');
  const [totalLeave] = useState(12); // Assuming total leave
  const [statuses, setStatuses] = useState({});
  const user = JSON.parse(localStorage.getItem('user')); // Assuming the HOD is logged in

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        // Fetch leave requests where requestTo is the HOD (for student leave requests)
        const studentResponse = await API.get(`/hodLeaveRequests`);
        const studentFilteredRequests = studentResponse.data.filter((request) => request.requestTo === user.name);
        setStudentLeaveRequests(studentFilteredRequests);

        // Fetch leave requests where the HOD applied (HOD's own leave requests)
        const hodResponse = await API.get(`/hodLeaveRequests?name=${user.name}`);
        setHodLeaveRequests(hodResponse.data);
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

  if (user.role !== 'hod') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto p-4">

      {/* HOD Leave Requests */}
      <div className="overflow-x-auto">
        <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
          HOD Leave List:
        </h1>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Leave From</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Leave To</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {hodLeaveRequests.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">No leave requests found.</td>
              </tr>
            ) : (
              hodLeaveRequests.map((leaveRequest, index) => (
                <tr key={leaveRequest.id}>
                  <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td>
                  <td className="px-2 py-2 border border-gray-300">{leaveRequest.leaveType}</td>
                  <td className="px-2 py-2 border border-gray-300">{leaveRequest.fromDate}</td>
                  <td className="px-2 py-2 border border-gray-300">{leaveRequest.toDate}</td>
                  <td className="px-2 py-2 border border-gray-300">
                    <span className={`px-2 py-1 rounded ${getStatusBgColor(leaveRequest.status)}`}>
                      {leaveRequest.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
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

export default ViewLeaveStatusHOD;