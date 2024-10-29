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