// incorrect bcz department is input not an option tag

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [studentError, setStudentError] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [updatedData, setUpdatedData] = useState({
//     name: '',
//     department: '',
//     gender: '',
//     phone: '',
//   });

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get(`/users?role=student`);

//         if (response) {
//           setLeaveRequestsStudents(response.data);
//         } else {
//           setStudentError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleEditClick = (student) => {
//     setSelectedStudent(student);
//     setUpdatedData({
//       name: student.name,
//       department: student.department,
//       gender: student.gender,
//       phone: student.phone,
//     });
//     setModalOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async () => {
//     try {
//       await API.put(`/users/${selectedStudent.id}`, {
//         ...selectedStudent,
//         ...updatedData,
//       });
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === selectedStudent.id
//             ? { ...student, ...updatedData }
//             : student
//         )
//       );
//       setModalOpen(false);
//     } catch (err) {
//       console.error('Error updating student data:', err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">
//           Students Management List:
//         </h1>
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-2 py-2 border border-gray-300 text-left">Name</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Department</th>
//               <th className="px-2 py-2 border border-gray-300 text-left">Gender</th>
//               <th className="px-1 py-2 border border-gray-300 text-left">Role</th>
//               <th className="px-0 py-2 border border-gray-300 text-left">Phone Number</th>
//               <th className="px-0 py-2 border border-gray-300 text-left">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center py-4">
//                   No leave requests found.
//                 </td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((request) => (
//                 <tr key={request.id}>
//                   <td className="px-2 py-2 border border-gray-300">{request.name}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.department}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.gender}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.role}</td>
//                   <td className="px-2 py-2 border border-gray-300">{request.phone}</td>
//                   <td className="px-2 py-2 border border-gray-300">
//                     <button
//                       className="edit_btn"
//                       onClick={() => handleEditClick(request)}
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing student details */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl mb-4">Edit Student</h2>
//             <div>
//               <label className="block mb-2">
//                 Name:
//                 <input
//                   autoComplete="off"
//                   type="text"
//                   name="name"
//                   value={updatedData.name}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 />
//               </label>
//               <label className="block mb-2">
//                 Department:
//                 <input
//                   autoComplete="off"
//                   type="text"
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 />
//               </label>
//               <label className="block mb-2">
//                 Gender:
//                 <select
//                   name="gender"
//                   value={updatedData.gender}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                 </select>
//               </label>
//               <label className="block mb-2">
//                 Phone:
//                 <input
//                   autoComplete="off"
//                   type="text"
//                   name="phone"
//                   value={updatedData.phone}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 />
//               </label>
//             </div>
//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 onClick={handleUpdate}
//               >
//                 Update
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={() => setModalOpen(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStudentAdmin;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ManageStudentAdmin = () => {
  const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
  const [studentError, setStudentError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const departments = ['hod1', 'hod2', 'hod3', 'hod4']; // Define available departments

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await API.get('/users?role=student');

        if (response) {
          setLeaveRequestsStudents(response.data);
        } else {
          setStudentError('No Leave Data Available!');
        }
      } catch (err) {
        setStudentError('Error fetching leave requests');
      }
    };

    fetchLeaveRequests();
  }, []);

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setUpdatedData(student);
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
      setLeaveRequestsStudents((prev) =>
        prev.map((student) =>
          student.id === updatedData.id ? updatedData : student
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
        <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">Students Management List:</h1>
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
            {leaveRequestsStudents.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">No leave requests found.</td>
              </tr>
            ) : (
              leaveRequestsStudents.map((student,index) => (
                <tr key={student.id}>
                  <td className="border border-gray-300">{index + 1}</td>
                  <td className="border border-gray-300">{student.name}</td>
                  <td className="border border-gray-300">{student.department}</td>
                  <td className="border border-gray-300">{student.gender}</td>
                  <td className="border border-gray-300">{student.role}</td>
                  <td className="border border-gray-300">{student.phone}</td>
                  <td className="border border-gray-300">
                    <button className="edit_btn" onClick={() => handleEditClick(student)}>Edit</button>
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
            <h2 className="text-xl mb-4">Edit Student</h2>
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

export default ManageStudentAdmin;
