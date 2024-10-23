
// import React,{useState,useEffect} from 'react'
// import axios from 'axios';

// const ManageHodAdmin = () => {

//   const [leaveRequestsHOD, setLeaveRequestsHOD] = useState([]);
//   const [hodError, setHodError] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/users?role=hod`);
    
//         if (response) {
//           setLeaveRequestsHOD(response.data);
//         }
//         else {
//           setHodError('No Leave Data Availbale !');
//         }
//       }
//       catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   return (
//     <div class="container mx-auto p-4">
//       <div class="overflow-x-auto">
//         <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>HOD Management List :-</h1>
//         <table class="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr class="bg-gray-200">
//               <th class="px-2 py-2 border border-gray-300 text-left">Name</th>
//               {/* <th class="px-2 py-2 border border-gray-300 text-left">ID</th> */}
//               <th class="px-2 py-2 border border-gray-300 text-left">Departmens</th>
//               <th class="px-2 py-2 border border-gray-300 text-left">Gender</th>
//               <th class="px-1 py-2 border border-gray-300 text-left">Role</th>
//               <th class="px-0 py-2 border border-gray-300 text-left">Phone Number</th>
//               <th class="px-0 py-2 border border-gray-300 text-left">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsHOD.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4">
//                     No leave requests found.
//                   </td>
//                 </tr>
//               ) : (
//                 leaveRequestsHOD.map((request) => (
//                   <tr key={request.id}>
//                     <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                     {/* <td className="px-2 py-2 border border-gray-300">{request.id}</td> */}
//                     <td className="px-2 py-2 border border-gray-300">{request.id}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.gender}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.role}</td>
//                     <td className="px-2 py-2 border border-gray-300">{request.phone}</td>
//                     <td className="px-2 py-2 border border-gray-300">
//                       <button className='edit_btn'>Edit</button>
//                     </td>
//                   </tr>
//                 ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default ManageHodAdmin






















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdEdit } from "react-icons/md";

const ManageHodAdmin = () => {
  const [leaveRequestsHod, setLeaveRequestsHod] = useState([]);
  const [hodError, setHodError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHod, setSelectedHod] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const departments = ['hod1', 'hod2', 'hod3', 'hod4']; // Define available departments

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await API.get('/users?role=hod');

        if (response) {
          setLeaveRequestsHod(response.data);
        } else {
          setHodError('No Leave Data Available!');
        }
      } catch (err) {
        setHodError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, []);

  const handleEditClick = (hod) => {
    setSelectedHod(hod);
    setUpdatedData(hod);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/users/${updatedData.id}`, updatedData);
      setLeaveRequestsHod((prev) =>
        prev.map((hod) =>
          hod.id === updatedData.id ? updatedData : hod
        )
      );
      setModalOpen(false);
      toast.success("Update Data Successfully!");
    } catch (error) {
      console.error('Error updating student:', error);
      toast.error("Error While Updating Data!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">HOD Management List:</h1>
        <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 text-center text-2xl">ID</th>
              <th className="border border-gray-300 text-center text-2xl">Name</th>
              <th className="border border-gray-300 text-center text-2xl">Department</th>
              <th className="border border-gray-300 text-center text-2xl">Gender</th>
              <th className="border border-gray-300 text-center text-2xl">Role</th>
              <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
              <th className="border border-gray-300 text-center text-2xl">Edit</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequestsHod.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">No leave requests found.</td>
              </tr>
            ) : (
              leaveRequestsHod.map((hod,index) => (
                <tr key={hod.id}>
                  <td className="border border-gray-300">{index + 1}</td>
                  <td className="border border-gray-300">{hod.name}</td>
                  <td className="border border-gray-300">{hod.id}</td>
                  <td className="border border-gray-300">{hod.gender}</td>
                  <td className="border border-gray-300">{hod.role}</td>
                  <td className="border border-gray-300">{hod.phone}</td>
                  <td className="border border-gray-300">
                    <button className="edit_btn" onClick={() => handleEditClick(hod)}><MdEdit/>Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for editing student */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">Edit HOD</h2>
            <div>
              <label className="block mb-2">
                Name:
                <input
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={updatedData.name}
                  onChange={handleInputChange}
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </label>
              
              <label className="block mb-2">
                Department:
                <select
                  name="department"
                  value={updatedData.department}
                  onChange={handleInputChange}
                  className="block w-full border border-gray-300 rounded p-2"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept.charAt(0).toUpperCase() + dept.slice(1)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block mb-2">
                Gender:
                <div className="flex items-center">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={updatedData.gender === 'male'}
                      onChange={handleInputChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={updatedData.gender === 'female'}
                      onChange={handleInputChange}
                    />
                    Female
                  </label>
                </div>
              </label>

              <label className="block mb-2">
                Phone:
                <input
                  autoComplete="off"
                  type="text"
                  name="phone"
                  value={updatedData.phone}
                  onChange={handleInputChange}
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </label>
            </div>

            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageHodAdmin;
