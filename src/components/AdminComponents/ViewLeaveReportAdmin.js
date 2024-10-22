
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewLeaveReportAdmin = () => {
  const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
  const [hodError, setHodError] = useState('');
  const [leaveRequestsStudent, setLeaveRequestsStudent] = useState([]);
  const [studentError, setStudentError] = useState('');

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchLeaveRequestsStudent = async () => {
      try {
        const response = await API.get(`/userLeaveRequests`);

        if (response) {
          console.log("user data :",response.data);
          setLeaveRequestsStudent(response.data);
        }
        else {
          setStudentError('No Leave Data Availbale !');
        }
      } 
      catch (err) {
        setStudentError('Error fetching leave requests');
      }
    };
    const fetchLeaveRequestsHOD = async () => {
      try {
        const response = await API.get(`/hodLeaveRequests`);

        if (response) {
          console.log("hod data :",response.data);
          setLeaveRequestsHOD(response.data);
        }
        else {
          setHodError('No Leave Data Availbale !');
        }
      } 
      catch (err) {
        setHodError('Error fetching leave requests');
      }
    };

    fetchLeaveRequestsStudent();
    fetchLeaveRequestsHOD();
  }, []);

  return (
    <div className='flex flex-col'>
      {/* HOD */}
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <h1 className='mt-10 mb-6 flex justify-left items-center text-2xl font-bold'>HOD Leave Report :-</h1>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-200">
                <th className="px-2 py-2 border border-gray-300 text-left">ID</th>
                <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
                <th className="px-2 py-2 border border-gray-300 text-left">Reason</th>
                <th className="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
                <th className="px-0 py-2 border border-gray-300 text-left">Total Working Days</th>
                <th className="px-0 py-2 border border-gray-300 text-left">Attendance Percentage</th>
              </tr>
            </thead>
              <tbody>
              {leaveRequestsHOD.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No leave requests found.
                  </td>
                </tr>
              ) : (
                leaveRequestsHOD.map((request,index) => (
                <tr key={request.id}>
                  <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.name}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
                  <td className="px-2 py-2 border border-gray-300">12</td>
                  <td className="px-2 py-2 border border-gray-300">26</td>
                  <td className="px-2 py-2 border border-gray-300">88%</td>
                </tr>
                ))
                )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Students */}
      <div class="container mx-auto p-4">
        <div class="overflow-x-auto">
          <h1 className='mt-0 mb-6 flex justify-left items-center text-2xl font-bold'>Students Leave Report :-</h1>
          <table class="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-200">
                <th class="px-2 py-2 border border-gray-300 text-left">ID</th>
                <th class="px-2 py-2 border border-gray-300 text-left">Name</th>
                <th class="px-2 py-2 border border-gray-300 text-left">Reason</th>
                <th class="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
                <th class="px-0 py-2 border border-gray-300 text-left">Total Working Days</th>
                <th class="px-0 py-2 border border-gray-300 text-left">Attendance Percentage</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequestsStudent.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      No leave requests found.
                    </td>
                  </tr>
                ) : (
                leaveRequestsStudent.map((request,index) => (
                <tr key={request.id}>
                  <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.name}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.reason}</td>
                  <td className="px-2 py-2 border border-gray-300">12</td>
                  <td className="px-2 py-2 border border-gray-300">26</td>
                  <td className="px-2 py-2 border border-gray-300">88%</td>
                </tr>
                ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewLeaveReportAdmin;
