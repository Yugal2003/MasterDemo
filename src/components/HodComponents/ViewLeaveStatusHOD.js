import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const ViewLeaveStatusHOD = () => {
  const [studentLeaveRequests, setStudentLeaveRequests] = useState({});
  const [hodError, setHodError] = useState('');
  const [loading, setLoading] = useState(true);
  const totalLeave = 12; 
  const [statuses, setStatuses] = useState({});
  
  const user = JSON.parse(localStorage.getItem('user'));

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await API.get(`/userLeaveRequests`);
        const filteredRequests = response.data.filter((request) => request.requestTo === user.name);
        const groupedRequests = filteredRequests.reduce((acc, request) => {
          if (request.name) {
            if (!acc[request.name]) {
              acc[request.name] = [];
            }
            acc[request.name].push(request);
          }
          return acc;
        }, {});

        setStudentLeaveRequests(groupedRequests);
      } catch (err) {
        setHodError('Error fetching leave requests');
      } finally {
        setLoading(false);
      }
    };
    fetchLeaveRequests();
  }, [user.name]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const leaveRequest = Object.values(studentLeaveRequests).flat().find((request) => request.id === id);

      if (leaveRequest) {
        setStatuses((prevStatuses) => ({
          ...prevStatuses,
          [id]: newStatus,
        }));

        await API.patch(`/userLeaveRequests/${id}`, {
          ...leaveRequest,
          status: newStatus,
        });

        setStudentLeaveRequests((prevRequests) => {
          const updatedRequests = { ...prevRequests };
          const studentName = leaveRequest.name;
          if (updatedRequests[studentName]) {
            updatedRequests[studentName] = updatedRequests[studentName].map((req) =>
              req.id === id ? { ...req, status: newStatus } : req
            );
          }
          return updatedRequests;
        });
      }
    } catch (error) {
      setHodError('Error updating leave status');
    }
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

  if (user.role !== 'hod') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto p-4">
      {hodError && <div className="text-red-500">{hodError}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
            Students Leave List:
          </h1>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
                <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
                <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
                <th className="px-2 py-2 border border-gray-300 text-left">Leave Type</th>
                <th className="px-2 py-2 border border-gray-300 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(studentLeaveRequests).length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No leave requests found.
                  </td>
                </tr>
              ) : (
                Object.keys(studentLeaveRequests).map((studentName, index) => {
                  const studentLeaves = studentLeaveRequests[studentName];
                  const usedLeavesCount = studentLeaves.length; 
                  
                  return studentLeaves.map((leaveRequest) => (
                    <tr key={leaveRequest.id}>
                      <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                      <td className="px-2 py-2 border border-gray-300">{studentName}</td>
                      <td className="px-2 py-2 border border-gray-300">{leaveRequest.reason}</td>
                      <td className="px-2 py-2 border border-gray-300">{leaveRequest.leaveType}</td>
                      <td className="px-2 py-2 border border-gray-300">
                        <select
                          className={`rounded-md border-2 p-1 ${getStatusBgColor(leaveRequest.status)}`}
                          value={statuses[leaveRequest.id] || leaveRequest.status}
                          onChange={(e) => handleStatusChange(leaveRequest.id, e.target.value)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Reject">Reject</option>
                        </select>
                      </td>
                    </tr>
                  ));
                })
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ViewLeaveStatusHOD;