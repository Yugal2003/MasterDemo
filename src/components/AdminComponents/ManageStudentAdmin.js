import React,{useState,useEffect} from 'react'
import axios from 'axios';

const ManageStudentAdmin = () => {

  const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
  const [studentError, setStudentError] = useState('');

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await API.get(`/users?role=student`);
    
        if (response) {
          setLeaveRequestsStudents(response.data);
        }
        else {
          setStudentError('No Leave Data Availbale !');
        }
      }
      catch (err) {
        setStudentError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, []);

  return (
    <div class="container mx-auto p-4">
      <div class="overflow-x-auto">
        <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Students Management List :-</h1>
        <table class="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-2 py-2 border border-gray-300 text-left">Name</th>
              {/* <th class="px-2 py-2 border border-gray-300 text-left">ID</th> */}
              <th class="px-2 py-2 border border-gray-300 text-left">Departmens</th>
              <th class="px-2 py-2 border border-gray-300 text-left">Gender</th>
              <th class="px-1 py-2 border border-gray-300 text-left">Role</th>
              <th class="px-0 py-2 border border-gray-300 text-left">Phone Number</th>
              <th class="px-0 py-2 border border-gray-300 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequestsStudents.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      No leave requests found.
                    </td>
                  </tr>
                ) : (
                  leaveRequestsStudents.map((request) => (
                    <tr key={request.id}>
                      <td className="px-2 py-2 border border-gray-300">{request.name}</td>
                      {/* <td className="px-2 py-2 border border-gray-300">{request.id}</td> */}
                      <td className="px-2 py-2 border border-gray-300">{request.id}</td>
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
  )
}

export default ManageStudentAdmin