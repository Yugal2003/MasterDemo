import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewLeaveStatusHOD = () => {

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
        const response = await API.get(`/users?department=${user.id}`);
        const filteredRequests = response.data.filter(
          (request) => request.department === user.id
        );
        console.log(filteredRequests);
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
              <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Department</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Gender</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Role</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Phone Number</th>
              <th className="px-2 py-2 border border-gray-300 text-left">Edit</th>
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
                  <td className="px-2 py-2 border border-gray-300">{request.name}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.department}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.gender}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.role}</td>
                  <td className="px-2 py-2 border border-gray-300">{request.phone}</td>
                  <td className="px-2 py-2 border border-gray-300">
                    <button className='edit_btn'>Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewLeaveStatusHOD