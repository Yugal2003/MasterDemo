
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




// current code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const departments = ['hod1', 'hod2', 'hod3', 'hod4']; // Define available departments

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=student');

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
//     setUpdatedData(student);
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
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? updatedData : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">Students Management List:</h1>
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">Department</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student,index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit/>Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing student */}
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
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {departments.map((dept) => (
//                     <option key={dept} value={dept}>
//                       {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </label>

//               <label className="block mb-2">
//                 Gender:
//                 <div className="flex items-center">
//                   <label className="mr-4">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="male"
//                       checked={updatedData.gender === 'male'}
//                       onChange={handleInputChange}
//                     />
//                     Male
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="female"
//                       checked={updatedData.gender === 'female'}
//                       onChange={handleInputChange}
//                     />
//                     Female
//                   </label>
//                 </div>
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





// after authguard code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const departments = ['hod1', 'hod2', 'hod3', 'hod4']; 

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=student');

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
//     setUpdatedData(student);
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
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? updatedData : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">Students Management List:</h1>
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">Department</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student,index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit/>Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

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
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {departments.map((dept) => (
//                     <option key={dept} value={dept}>
//                       {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </label>

//               <label className="block mb-2">
//                 Gender:
//                 <div className="flex items-center">
//                   <label className="mr-4">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="male"
//                       checked={updatedData.gender === 'male'}
//                       onChange={handleInputChange}
//                     />
//                     Male
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="female"
//                       checked={updatedData.gender === 'female'}
//                       onChange={handleInputChange}
//                     />
//                     Female
//                   </label>
//                 </div>
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



// before chnages in department (hod1 to name of hods)

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const departments = ['hod1', 'hod2', 'hod3', 'hod4']; 

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=student');
//         if (response) {
//           // console.log("single user data :" , response.data);
//           // console.log(response.data[0].department);
//           // const ids = await API.get('/users?id');
//           // console.log(ids.data.id);
//           // if(response.data.department === ids.data.id){
//           //   response.data.department = ids.data.name
//           // }
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

//   const handleEditClick = async(student) => {
//     // console.log("single user data :" , student);
//     // const response = await API.get('/users?id');
//     //   console.log(response.data);
//     //   if(response.data.id === student.department){
//     //     student.department = response.data.name
//     //   }
//     setSelectedStudent(student);
//     setUpdatedData(student);
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
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? updatedData : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">Students Management List:</h1>

//         {/* Render Student Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">Department</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit Student Modal */}
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
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {departments.map((dept) => (
//                     <option key={dept} value={dept}>
//                       {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//               <label className="block mb-2">
//                 Gender:
//                 <div className="flex items-center">
//                   <label className="mr-4">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="male"
//                       checked={updatedData.gender === 'male'}
//                       onChange={handleInputChange}
//                     />
//                     Male
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="female"
//                       checked={updatedData.gender === 'female'}
//                       onChange={handleInputChange}
//                     />
//                     Female
//                   </label>
//                 </div>
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








// without sorting code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [hods, setHods] = useState({});
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Fetch all students
//         const studentResponse = await API.get('/users?role=student');
//         // Fetch all HODs
//         const hodResponse = await API.get('/users?role=hod');

//         if (studentResponse.data && hodResponse.data) {
//           // Create a mapping of department IDs to HOD names
//           const hodMapping = hodResponse.data.reduce((acc, hod) => {
//             acc[hod.id] = hod.name;
//             return acc;
//           }, {});

//           // Update students' department with HOD names
//           const studentsWithHodNames = studentResponse.data.map(student => ({
//             ...student,
//             department: hodMapping[student.department] || student.department,
//           }));

//           setLeaveRequestsStudents(studentsWithHodNames);
//           setHods(hodMapping); // Store HOD data for further use if needed
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
//     setUpdatedData(student);
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
//       if(updatedData.name === ''){
//         toast.error("Name is Required !");
//         return;
//       }
//       if(updatedData.name.length < 3){
//         toast.error("Min 3 Character is Required !");
//         return;
//       }
//       if(updatedData.phone.length === 0){
//         toast.error("Phone Number Required !");
//         return
//       }
//       if(updatedData.phone.length !== 10){
//         toast.error("Phone number must be exactly 10 digits.");
//         return;
//       }
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? { ...updatedData, department: hods[updatedData.department] || updatedData.department } : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className='flex flex-row justify-between items-center'>
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
//           <select>
//             <option>Sort By Name</option>
//             <option>Sort By Phone Number</option>
//           </select>
//         </div>
//         {/* Render Student Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">HOD</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit Student Modal */}
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
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {Object.keys(hods).map((dept) => (
//                     <option key={dept} value={dept}>
//                       {hods[dept]}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//               <label className="block mb-2">
//                 Gender:
//                 <div className="flex items-center">
//                   <label className="mr-4">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="male"
//                       checked={updatedData.gender === 'male'}
//                       onChange={handleInputChange}
//                     />
//                     Male
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="female"
//                       checked={updatedData.gender === 'female'}
//                       onChange={handleInputChange}
//                     />
//                     Female
//                   </label>
//                 </div>
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




// with sorting code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [hods, setHods] = useState({});
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});
//   const [sortOption, setSortOption] = useState('');

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Fetch all students
//         const studentResponse = await API.get('/users?role=student');
//         // Fetch all HODs
//         const hodResponse = await API.get('/users?role=hod');

//         if (studentResponse.data && hodResponse.data) {
//           // Create a mapping of department IDs to HOD names
//           const hodMapping = hodResponse.data.reduce((acc, hod) => {
//             acc[hod.id] = hod.name;
//             return acc;
//           }, {});

//           // Update students' department with HOD names
//           const studentsWithHodNames = studentResponse.data.map(student => ({
//             ...student,
//             department: hodMapping[student.department] || student.department,
//           }));

//           setLeaveRequestsStudents(studentsWithHodNames);
//           setHods(hodMapping); // Store HOD data for further use if needed
//         } else {
//           setStudentError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   // Function to handle sorting
//   const handleSortChange = (e) => {
//     const selectedSortOption = e.target.value;
//     setSortOption(selectedSortOption);

//     const sortedStudents = [...leaveRequestsStudents];
//     if (selectedSortOption === 'name') {
//       sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (selectedSortOption === 'phone') {
//       sortedStudents.sort((a, b) => a.phone.localeCompare(b.phone));
//     }
//     setLeaveRequestsStudents(sortedStudents);
//   };

//   const handleEditClick = (student) => {
//     setSelectedStudent(student);
//     setUpdatedData(student);
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
//       if(updatedData.name === ''){
//         toast.error("Name is Required !");
//         return;
//       }
//       if(updatedData.name.length < 3){
//         toast.error("Min 3 Character is Required !");
//         return;
//       }
//       if(updatedData.phone.length === 0){
//         toast.error("Phone Number Required !");
//         return;
//       }
//       if(updatedData.phone.length !== 10){
//         toast.error("Phone number must be exactly 10 digits.");
//         return;
//       }
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? { ...updatedData, department: hods[updatedData.department] || updatedData.department } : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className='flex flex-row justify-between items-center'>
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
//           <select className="max-w-24 mt-16 mb-6 flex justify-left items-center text-md font-bold" onChange={handleSortChange} value={sortOption}>
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>
//         {/* Render Student Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">HOD</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit Student Modal */}
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
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {Object.keys(hods).map((dept) => (
//                     <option key={dept} value={dept}>
//                       {hods[dept]}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//               <label className="block mb-2">
//                 Gender:
//                 <div className="flex items-center">
//                   <label className="mr-4">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="male"
//                       checked={updatedData.gender === 'male'}
//                       onChange={handleInputChange}
//                     />
//                     Male
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="female"
//                       checked={updatedData.gender === 'female'}
//                       onChange={handleInputChange}
//                     />
//                     Female
//                   </label>
//                 </div>
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










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [originalStudents, setOriginalStudents] = useState([]);  // Store the original unsorted data
//   const [hods, setHods] = useState({});
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});
//   const [sortOption, setSortOption] = useState('');
//   const [isAscending, setIsAscending] = useState(true); // State to track sorting order

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Fetch all students
//         const studentResponse = await API.get('/users?role=student');
//         // Fetch all HODs
//         const hodResponse = await API.get('/users?role=hod');

//         if (studentResponse.data && hodResponse.data) {
//           // Create a mapping of department IDs to HOD names
//           const hodMapping = hodResponse.data.reduce((acc, hod) => {
//             acc[hod.id] = hod.name;
//             return acc;
//           }, {});

//           // Update students' department with HOD names
//           const studentsWithHodNames = studentResponse.data.map(student => ({
//             ...student,
//             department: hodMapping[student.department] || student.department,
//           }));

//           setLeaveRequestsStudents(studentsWithHodNames);
//           setOriginalStudents(studentsWithHodNames); // Store the original unsorted data
//           setHods(hodMapping); // Store HOD data for further use if needed
//         } else {
//           setStudentError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   // Function to handle sorting
//   const handleSortChange = (e) => {
//     const selectedSortOption = e.target.value;
//     setSortOption(selectedSortOption);

//     if (selectedSortOption === '') {
//       // If "Sort By" is selected, reset the data to original (unsorted) state
//       setLeaveRequestsStudents(originalStudents);
//       setIsAscending(true); // Reset the sorting order to ascending
//     } else {
//       // If a sort option is selected, toggle or apply sorting
//       if (selectedSortOption === sortOption) {
//         setIsAscending((prev) => !prev); // Toggle the sorting order
//       } else {
//         setIsAscending(true); // Reset to ascending order when changing sort option
//       }

//       // Sort the students based on selected option and order
//       const sortedStudents = [...leaveRequestsStudents];
//       sortedStudents.sort((a, b) => {
//         if (selectedSortOption === 'name') {
//           return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
//         } else if (selectedSortOption === 'phone') {
//           return isAscending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone);
//         }
//         return 0;
//       });

//       setLeaveRequestsStudents(sortedStudents);
//     }
//   };

//   const handleEditClick = (student) => {
//     setSelectedStudent(student);
//     setUpdatedData(student);
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
//       if (updatedData.name === '') {
//         toast.error("Name is Required !");
//         return;
//       }
//       if (updatedData.name.length < 3) {
//         toast.error("Min 3 Character is Required !");
//         return;
//       }
//       if (updatedData.phone.length === 0) {
//         toast.error("Phone Number Required !");
//         return;
//       }
//       if (updatedData.phone.length !== 10) {
//         toast.error("Phone number must be exactly 10 digits.");
//         return;
//       }
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? { ...updatedData, department: hods[updatedData.department] || updatedData.department } : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className='flex flex-row justify-between items-center'>
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
//           <select className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold" onChange={handleSortChange} value={sortOption}>
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>
//         {/* Render Student Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">HOD</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit Student Modal */}
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
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {Object.keys(hods).map((hodId) => (
//                     <option key={hodId} value={hodId}>{hods[hodId]}</option>
//                   ))}
//                 </select>
//               </label>
//               <label className="block mb-2">
//                 Gender:
//                 <div className="flex items-center">
//                   <label className="mr-4">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="Male"
//                       checked={updatedData.gender === "Male"}
//                       onChange={handleInputChange}
//                     />
//                     Male
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="Female"
//                       checked={updatedData.gender === "Female"}
//                       onChange={handleInputChange}
//                     />
//                     Female
//                   </label>
//                 </div>
//               </label>
//               <label className="block mb-2">
//                 Phone:
//                 <input
//                   type="text"
//                   name="phone"
//                   value={updatedData.phone}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 />
//               </label>
//               <button
//                 onClick={handleUpdate}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStudentAdmin;


// update with cancel button while edit time

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [originalStudents, setOriginalStudents] = useState([]);  // Store the original unsorted data
//   const [hods, setHods] = useState({});
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});
//   const [sortOption, setSortOption] = useState('');
//   const [isAscending, setIsAscending] = useState(true); // State to track sorting order

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Fetch all students
//         const studentResponse = await API.get('/users?role=student');
//         // Fetch all HODs
//         const hodResponse = await API.get('/users?role=hod');

//         if (studentResponse.data && hodResponse.data) {
//           // Create a mapping of department IDs to HOD names
//           const hodMapping = hodResponse.data.reduce((acc, hod) => {
//             acc[hod.id] = hod.name;
//             return acc;
//           }, {});

//           // Update students' department with HOD names
//           const studentsWithHodNames = studentResponse.data.map(student => ({
//             ...student,
//             department: hodMapping[student.department] || student.department,
//           }));

//           setLeaveRequestsStudents(studentsWithHodNames);
//           setOriginalStudents(studentsWithHodNames); // Store the original unsorted data
//           setHods(hodMapping); // Store HOD data for further use if needed
//         } else {
//           setStudentError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   // Function to handle sorting
//   const handleSortChange = (e) => {
//     const selectedSortOption = e.target.value;
//     setSortOption(selectedSortOption);

//     if (selectedSortOption === '') {
//       // If "Sort By" is selected, reset the data to original (unsorted) state
//       setLeaveRequestsStudents(originalStudents);
//       setIsAscending(true); // Reset the sorting order to ascending
//     } else {
//       // If a sort option is selected, toggle or apply sorting
//       if (selectedSortOption === sortOption) {
//         setIsAscending((prev) => !prev); // Toggle the sorting order
//       } else {
//         setIsAscending(true); // Reset to ascending order when changing sort option
//       }

//       // Sort the students based on selected option and order
//       const sortedStudents = [...leaveRequestsStudents];
//       sortedStudents.sort((a, b) => {
//         if (selectedSortOption === 'name') {
//           return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
//         } else if (selectedSortOption === 'phone') {
//           return isAscending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone);
//         }
//         return 0;
//       });

//       setLeaveRequestsStudents(sortedStudents);
//     }
//   };

//   const handleEditClick = (student) => {
//     setSelectedStudent(student);
//     setUpdatedData(student);
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
//       if (updatedData.name === '') {
//         toast.error("Name is Required !");
//         return;
//       }
//       if (updatedData.name.length < 3) {
//         toast.error("Min 3 Character is Required !");
//         return;
//       }
//       if (updatedData.phone.length === 0) {
//         toast.error("Phone Number Required !");
//         return;
//       }
//       if (updatedData.phone.length !== 10) {
//         toast.error("Phone number must be exactly 10 digits.");
//         return;
//       }
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? { ...updatedData, department: hods[updatedData.department] || updatedData.department } : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   const handleCancel = () => {
//     // Close the modal and reset any changes made
//     setModalOpen(false);
//     setUpdatedData(selectedStudent); // Revert to the original student data
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className='flex flex-row justify-between items-center'>
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
//           <select className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold" onChange={handleSortChange} value={sortOption}>
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>
//         {/* Render Student Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">HOD</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit Student Modal */}
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
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {Object.keys(hods).map((hodId) => (
//                     <option key={hodId} value={hodId}>{hods[hodId]}</option>
//                   ))}
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
//               <div className="flex justify-between mt-4">
//                 <button onClick={handleCancel} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
//                 <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded">Save Changes</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStudentAdmin;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [originalStudents, setOriginalStudents] = useState([]);  // Store the original unsorted data
//   const [hods, setHods] = useState({});
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});
//   const [sortOption, setSortOption] = useState('');
//   const [isAscending, setIsAscending] = useState(true); // State to track sorting order

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         // Fetch all students
//         const studentResponse = await API.get('/users?role=student');
//         // Fetch all HODs
//         const hodResponse = await API.get('/users?role=hod');

//         if (studentResponse.data && hodResponse.data) {
//           // Create a mapping of department IDs to HOD names
//           const hodMapping = hodResponse.data.reduce((acc, hod) => {
//             acc[hod.id] = hod.name;
//             return acc;
//           }, {});

//           // Update students' department with HOD names
//           const studentsWithHodNames = studentResponse.data.map(student => ({
//             ...student,
//             department: hodMapping[student.department] || student.department,
//           }));

//           setLeaveRequestsStudents(studentsWithHodNames);
//           setOriginalStudents(studentsWithHodNames); // Store the original unsorted data
//           setHods(hodMapping); // Store HOD data for further use if needed
//         } else {
//           setStudentError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   // Function to handle sorting
//   const handleSortChange = (e) => {
//     const selectedSortOption = e.target.value;
//     setSortOption(selectedSortOption);

//     if (selectedSortOption === '') {
//       // If "Sort By" is selected, reset the data to original (unsorted) state
//       setLeaveRequestsStudents(originalStudents);
//       setIsAscending(true); // Reset the sorting order to ascending
//     } else {
//       // If a sort option is selected, toggle or apply sorting
//       if (selectedSortOption === sortOption) {
//         setIsAscending((prev) => !prev); // Toggle the sorting order
//       } else {
//         setIsAscending(true); // Reset to ascending order when changing sort option
//       }

//       // Sort the students based on selected option and order
//       const sortedStudents = [...leaveRequestsStudents];
//       sortedStudents.sort((a, b) => {
//         if (selectedSortOption === 'name') {
//           return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
//         } else if (selectedSortOption === 'phone') {
//           return isAscending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone);
//         }
//         return 0;
//       });

//       setLeaveRequestsStudents(sortedStudents);
//     }
//   };

//   const handleEditClick = (student) => {
//     setSelectedStudent(student);
//     setUpdatedData(student);
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
//       if (updatedData.name === '') {
//         toast.error("Name is Required !");
//         return;
//       }
//       if (updatedData.name.length < 3) {
//         toast.error("Min 3 Character is Required !");
//         return;
//       }
//       if (updatedData.phone.length === 0) {
//         toast.error("Phone Number Required !");
//         return;
//       }
//       if (updatedData.phone.length !== 10) {
//         toast.error("Phone number must be exactly 10 digits.");
//         return;
//       }
//       await API.put(`/users/${updatedData.id}`, updatedData);
//       setLeaveRequestsStudents((prev) =>
//         prev.map((student) =>
//           student.id === updatedData.id ? { ...updatedData, department: hods[updatedData.department] || updatedData.department } : student
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating student:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   const handleCancel = () => {
//     // Close the modal and reset any changes made
//     setModalOpen(false);
//     setUpdatedData(selectedStudent); // Revert to the original student data
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className='flex flex-row justify-between items-center'>
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
//           <select className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold" onChange={handleSortChange} value={sortOption}>
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>
//         {/* Render Student Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">HOD</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsStudents.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsStudents.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit Student Modal */}
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
//                   className="block w-full rounded p-2 bg-gray-200"
//                   disabled // Make the name input disabled
//                 />
//               </label>
//               <label className="block mb-2">
//                 Department:
//                 <select
//                   name="department"
//                   value={updatedData.department}
//                   onChange={handleInputChange}
//                   className="block w-full border border-gray-300 rounded p-2"
//                 >
//                   {Object.keys(hods).map((hodId) => (
//                     <option key={hodId} value={hodId}>{hods[hodId]}</option>
//                   ))}
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
//             <div className="flex justify-between space-x-4 mt-4">
//               <button onClick={handleCancel} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
//               <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStudentAdmin;


// with pagination code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [originalStudents, setOriginalStudents] = useState([]);
//   const [hods, setHods] = useState({});
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});
//   const [sortOption, setSortOption] = useState('');
//   const [isAscending, setIsAscending] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dataPerPage, setDataPerPage] = useState(5);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const studentResponse = await API.get('/users?role=student');
//         const hodResponse = await API.get('/users?role=hod');

//         if (studentResponse.data && hodResponse.data) {
//           const hodMapping = hodResponse.data.reduce((acc, hod) => {
//             acc[hod.id] = hod.name;
//             return acc;
//           }, {});

//           const studentsWithHodNames = studentResponse.data.map(student => ({
//             ...student,
//             department: hodMapping[student.department] || student.department,
//           }));

//           setLeaveRequestsStudents(studentsWithHodNames);
//           setOriginalStudents(studentsWithHodNames);
//           setHods(hodMapping);
//         } else {
//           setStudentError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleSortChange = (e) => {
//     const selectedSortOption = e.target.value;
//     setSortOption(selectedSortOption);

//     if (selectedSortOption === '') {
//       setLeaveRequestsStudents(originalStudents);
//       setIsAscending(true);
//     } else {
//       if (selectedSortOption === sortOption) {
//         setIsAscending((prev) => !prev);
//       } else {
//         setIsAscending(true);
//       }

//       const sortedStudents = [...leaveRequestsStudents];
//       sortedStudents.sort((a, b) => {
//         if (selectedSortOption === 'name') {
//           return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
//         } else if (selectedSortOption === 'phone') {
//           return isAscending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone);
//         }
//         return 0;
//       });

//       setLeaveRequestsStudents(sortedStudents);
//     }
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     const updateDataPerPage = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth < 640) {
//         setDataPerPage(5);
//       } else if (screenWidth >= 640 && screenWidth < 1024) {
//         setDataPerPage(7);
//       } else {
//         setDataPerPage(8);
//       }
//     };

//     updateDataPerPage();
//     window.addEventListener('resize', updateDataPerPage);

//     return () => {
//       window.removeEventListener('resize', updateDataPerPage);
//     };
//   }, []);

//   const indexOfLastData = currentPage * dataPerPage;
//   const indexOfFirstData = indexOfLastData - dataPerPage;
//   const currentData = leaveRequestsStudents.slice(indexOfFirstData, indexOfLastData);

//   const totalPages = Math.ceil(leaveRequestsStudents.length / dataPerPage);

//   // Handle Edit Modal Functions
//   const handleEditClick = (student) => {
//     setSelectedStudent(student);
//     setUpdatedData({ name: student.name });
//     setModalOpen(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     const updatedStudent = { ...selectedStudent, ...updatedData };

//     // Simulate saving to the backend
//     const updatedStudents = leaveRequestsStudents.map((student) =>
//       student.id === updatedStudent.id ? updatedStudent : student
//     );
//     setLeaveRequestsStudents(updatedStudents);
//     setModalOpen(false);
//     toast.success('Student data updated successfully!');
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className="flex flex-row justify-between items-center">
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
//           <select className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold" onChange={handleSortChange} value={sortOption}>
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">HOD</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               currentData.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>

//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
//             className="px-4 py-2 bg-gray-300 text-black rounded-l"
//           >
//             {'<'}
//           </button>
//           {[...Array(totalPages).keys()].map((pageNumber) => (
//             <button
//               key={pageNumber + 1}
//               onClick={() => paginate(pageNumber + 1)}
//               className={`px-4 py-2 ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
//             >
//               {pageNumber + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
//             className="px-4 py-2 bg-gray-300 text-black rounded-r"
//           >
//             {'>'}
//           </button>
//         </div>
//       </div>

//       {/* Edit Student Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
//             <label className="block mb-2">Name
//               <input
//                 type="text"
//                 name="name"
//                 value={updatedData.name || ''}
//                 onChange={handleEditChange}
//                 className="border border-gray-300 p-2 rounded w-full"
//               />
//             </label>
//             <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Save</button>
//             <button onClick={closeModal} className="mt-4 text-red-500">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStudentAdmin;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageStudentAdmin = () => {
//   const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
//   const [originalStudents, setOriginalStudents] = useState([]);
//   const [hods, setHods] = useState({});
//   const [studentError, setStudentError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});
//   const [sortOption, setSortOption] = useState('');
//   const [isAscending, setIsAscending] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dataPerPage, setDataPerPage] = useState(5);

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const studentResponse = await API.get('/users?role=student');
//         const hodResponse = await API.get('/users?role=hod');

//         if (studentResponse.data && hodResponse.data) {
//           const hodMapping = hodResponse.data.reduce((acc, hod) => {
//             acc[hod.id] = hod.name;
//             return acc;
//           }, {});

//           const studentsWithHodNames = studentResponse.data.map(student => ({
//             ...student,
//             department: hodMapping[student.department] || student.department,
//           }));

//           setLeaveRequestsStudents(studentsWithHodNames);
//           setOriginalStudents(studentsWithHodNames);
//           setHods(hodMapping);
//         } else {
//           setStudentError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setStudentError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleSortChange = (e) => {
//     const selectedSortOption = e.target.value;
//     setSortOption(selectedSortOption);

//     if (selectedSortOption === '') {
//       setLeaveRequestsStudents(originalStudents);
//       setIsAscending(true);
//     } else {
//       if (selectedSortOption === sortOption) {
//         setIsAscending((prev) => !prev);
//       } else {
//         setIsAscending(true);
//       }

//       const sortedStudents = [...leaveRequestsStudents];
//       sortedStudents.sort((a, b) => {
//         if (selectedSortOption === 'name') {
//           return isAscending
//             ? a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
//             : b.name.localeCompare(a.name, undefined, { sensitivity: 'base' });
//         } else if (selectedSortOption === 'phone') {
//           return isAscending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone);
//         }
//         return 0;
//       });

//       setLeaveRequestsStudents(sortedStudents);
//     }
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     const updateDataPerPage = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth < 640) {
//         setDataPerPage(5);
//       } else if (screenWidth >= 640 && screenWidth < 1024) {
//         setDataPerPage(7);
//       } else {
//         setDataPerPage(8);
//       }
//     };

//     updateDataPerPage();
//     window.addEventListener('resize', updateDataPerPage);

//     return () => {
//       window.removeEventListener('resize', updateDataPerPage);
//     };
//   }, []);

//   const indexOfLastData = currentPage * dataPerPage;
//   const indexOfFirstData = indexOfLastData - dataPerPage;
//   const currentData = leaveRequestsStudents.slice(indexOfFirstData, indexOfLastData);

//   const totalPages = Math.ceil(leaveRequestsStudents.length / dataPerPage);

//   const handleEditClick = (student) => {
//     setSelectedStudent(student);
//     setUpdatedData({ name: student.name, department: student.department, phone: student.phone });
//     setModalOpen(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     if (updatedData.name === '') {
//       toast.error("Name is Required!");
//       return;
//     }
//     if (updatedData.name.length < 3) {
//       toast.error("Min 3 Characters are Required!");
//       return;
//     }
//     if (updatedData.phone.length === 0) {
//       toast.error("Phone Number Required !");
//       return;
//     }
//     if (!updatedData.phone || updatedData.phone.length !== 10) {
//       toast.error("Phone number must be exactly 10 digits.");
//       return;
//     }

//     const updatedStudent = { ...selectedStudent, ...updatedData };
//     const updatedStudents = leaveRequestsStudents.map((student) =>
//       student.id === updatedStudent.id ? updatedStudent : student
//     );
//     setLeaveRequestsStudents(updatedStudents);
//     setModalOpen(false);
//     toast.success("Student data updated successfully!");
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className="flex flex-row justify-between items-center">
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
//           <select className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold" onChange={handleSortChange} value={sortOption}>
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">HOD</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               currentData.map((student, index) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{student.name}</td>
//                   <td className="border border-gray-300">{student.department}</td>
//                   <td className="border border-gray-300">{student.gender}</td>
//                   <td className="border border-gray-300">{student.role}</td>
//                   <td className="border border-gray-300">{student.phone}</td>
//                   {/* <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(student)}><MdEdit />Edit</button>
//                   </td> */}
//                   <td className="border flex justify-center items-center">
//                     <button className="edit_btn flex items-center" onClick={() => handleEditClick(student)}>
//                       <MdEdit className="mr-1" /> Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>

//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
//             className="px-4 py-2 bg-gray-300 text-black rounded-l"
//           >
//             {'<'}
//           </button>
//           {[...Array(totalPages).keys()].map((pageNumber) => (
//             <button
//               key={pageNumber + 1}
//               onClick={() => paginate(pageNumber + 1)}
//               className={`px-4 py-2 ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
//             >
//               {pageNumber + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
//             className="px-4 py-2 bg-gray-300 text-black rounded-r"
//           >
//             {'>'}
//           </button>
//         </div>
//       </div>

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
//             <label className="block mb-2">Name
//               <input
//                 disabled
//                 type="text"
//                 name="name"
//                 value={updatedData.name || ''}
//                 onChange={handleEditChange}
//                 className="border border-gray-300 p-2 rounded w-full"
//               />
//             </label>

//             <label className="block mb-2">Department
//               <select
//                 name="department"
//                 value={updatedData.department || ''}
//                 onChange={handleEditChange}
//                 className="border border-gray-300 p-2 rounded w-full"
//               >
//                 {/* <option value="">Select Department</option> */}
//                 <option value="hod1">Raman</option>
//                 <option value="hod2">Shyam</option>
//                 <option value="hod3">Radhika</option>
//                 <option value="hod4">Karina</option>
//               </select>
//             </label>

//             <label className="block mb-2">Phone
//               <input
//               autoComplete="off"
//                 type="text"
//                 name="phone"
//                 value={updatedData.phone || ''}
//                 onChange={handleEditChange}
//                 className="border border-gray-300 p-2 rounded w-full"
//               />
//             </label>
//             <div className="flex justify-between space-x-4 mt-4">
//               <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded mt-4 mr-1">Cancel</button>
//               <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Update</button>
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
import Switch from 'react-switch'; // Import the switch component
import toast from 'react-hot-toast';
import { MdEdit } from "react-icons/md";

const ManageStudentAdmin = () => {
  const [leaveRequestsStudents, setLeaveRequestsStudents] = useState([]);
  const [originalStudents, setOriginalStudents] = useState([]);
  const [hods, setHods] = useState({});
  const [studentError, setStudentError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [sortOption, setSortOption] = useState('');
  const [isAscending, setIsAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

    const fetchLeaveRequests = async () => {
      try {
        const studentResponse = await API.get('/users?role=student');
        const hodResponse = await API.get('/users?role=hod');

        if (studentResponse.data && hodResponse.data) {
          const hodMapping = hodResponse.data.reduce((acc, hod) => {
            acc[hod.id] = hod.name;
            return acc;
          }, {});

          const studentsWithHodNames = studentResponse.data.map(student => ({
            ...student,
            department:  student.department,
          }));

          setLeaveRequestsStudents(studentsWithHodNames);
          setOriginalStudents(studentsWithHodNames);
          setHods(hodMapping);
        } else {
          setStudentError('No Leave Data Available!');
        }
      } catch (err) {
        setStudentError('Error fetching leave requests');
      }
    };

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const toggleActiveStatus = async (studentId) => {
    const updatedStudents = leaveRequestsStudents.map((student) => {
      if (student.id === studentId) {
        const updatedStatus = student.active === 'Active' ? 'DeActive' : 'Active';
        return { ...student, active: updatedStatus };
      }
      return student;
    });
    setLeaveRequestsStudents(updatedStudents);

    // Find the updated student and update on server
    const studentToUpdate = updatedStudents.find((student) => student.id === studentId);
    try {
      await API.put(`/users/${studentId}`, { ...studentToUpdate });
      toast.success(`Student ${studentToUpdate.active === "Active" ? "Activated" : "Deactivated"} Successfully`);
    } catch (error) {
      toast.error('Error updating student status');
    }
  };

  // const handleSortChange = (e) => {
  //   const selectedSortOption = e.target.value;
  //   setSortOption(selectedSortOption);

  //   if (selectedSortOption === '') {
  //     setLeaveRequestsStudents(originalStudents);
  //     setIsAscending(true);
  //   } else {
  //     if (selectedSortOption === sortOption) {
  //       setIsAscending((prev) => !prev);
  //     } else {
  //       setIsAscending(true);
  //     }

  //     const sortedStudents = [...leaveRequestsStudents];
  //     sortedStudents.sort((a, b) => {
  //       if (selectedSortOption === 'name') {
  //         return isAscending
  //           ? a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  //           : b.name.localeCompare(a.name, undefined, { sensitivity: 'base' });
  //       } else if (selectedSortOption === 'phone') {
  //         return isAscending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone);
  //       }
  //       return 0;
  //     });

  //     setLeaveRequestsStudents(sortedStudents);
  //   }
  // };

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    setSortOption(selectedSortOption);
  
    if (selectedSortOption === '') {
      setLeaveRequestsStudents(originalStudents);
      setIsAscending(true);
    } else {
      if (selectedSortOption === sortOption) {
        setIsAscending((prev) => !prev);
      } else {
        setIsAscending(true);
      }
  
      const sortedStudents = [...leaveRequestsStudents];
      sortedStudents.sort((a, b) => {
        if (selectedSortOption === 'name') {
          return isAscending
            ? a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
            : b.name.localeCompare(a.name, undefined, { sensitivity: 'base' });
        } else if (selectedSortOption === 'phone') {
          return isAscending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone);
        }
        return 0;
      });
  
      setLeaveRequestsStudents(sortedStudents);
    }
  };  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const updateDataPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setDataPerPage(5);
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        setDataPerPage(7);
      } else {
        setDataPerPage(8);
      }
    };

    updateDataPerPage();
    window.addEventListener('resize', updateDataPerPage);

    return () => {
      window.removeEventListener('resize', updateDataPerPage);
    };
  }, []);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = leaveRequestsStudents.slice(indexOfFirstData, indexOfLastData);

  const totalPages = Math.ceil(leaveRequestsStudents.length / dataPerPage);

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setUpdatedData({ name: student.name, department: student.department, phone: student.phone });
    setModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSave = async () => {
  //   if (updatedData.name === '') {
  //     toast.error("Name is Required!");
  //     return;
  //   }
  //   if (updatedData.name.length < 3) {
  //     toast.error("Min 3 Characters are Required!");
  //     return;
  //   }
  //   if (updatedData.phone.length === 0) {
  //     toast.error("Phone Number Required !");
  //     return;
  //   }
  //   if (!updatedData.phone || updatedData.phone.length !== 10) {
  //     toast.error("Phone number must be exactly 10 digits.");
  //     return;
  //   }

  //   // Update data locally
  //   const updatedStudent = { ...selectedStudent, ...updatedData };
  //   const updatedStudents = leaveRequestsStudents.map((student) =>
  //     student.id === updatedStudent.id ? updatedStudent : student
  //   );
  //   setLeaveRequestsStudents(updatedStudents);

  //   // Send updated data to server (db.json)
  //   try {
  //     await API.put(`/users/${updatedStudent.id}`, updatedStudent);
  //     toast.success("Student Data Update Successfully!");

  //     if(sortOption){
  //       handleSortChange({target: { value: sortOption } });
  //     }
  //     setModalOpen(false);
  //   } catch (err) {
  //     toast.error("Error updating student data.");
  //   }
  // };

  const handleSave = async () => {
    if (updatedData.name === '') {
      toast.error("Name is Required!");
      return;
    }
    if (updatedData.name.length < 3) {
      toast.error("Min 3 Characters are Required!");
      return;
    }
    if (updatedData.phone.length === 0) {
      toast.error("Phone Number Required !");
      return;
    }
    if (!updatedData.phone || updatedData.phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }
  
    // Update data locally
    const updatedStudent = { ...selectedStudent, ...updatedData };
    const updatedStudents = leaveRequestsStudents.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setLeaveRequestsStudents(updatedStudents);
  
    // Send updated data to server (db.json)
    try {
      await API.put(`/users/${updatedStudent.id}`, updatedStudent);
      toast.success("Student Data Updated Successfully!");
      setModalOpen(false);
  
      // Refetch the data from the server after saving
      fetchLeaveRequests(); // <-- Refetch data from the server
    } catch (err) {
      toast.error("Error updating student data.");
    }
  };
  

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="flex flex-row justify-between items-center">
          <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">Student Management List:</h1>
          <select className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold" onChange={handleSortChange} value={sortOption}>
            <option value="">Sort By</option>
            <option value="name">Sort By Name</option>
            <option value="phone">Sort By Number</option>
          </select>
        </div>
        
        <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 text-center text-2xl">ID</th>
              <th className="border border-gray-300 text-center text-2xl">Name</th>
              <th className="border border-gray-300 text-center text-2xl">HOD</th>
              <th className="border border-gray-300 text-center text-2xl">Gender</th>
              <th className="border border-gray-300 text-center text-2xl">Role</th>
              <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
              <th className="border border-gray-300 text-center text-2xl">Edit</th>
              <th className="border border-gray-300 text-center text-2xl">Active / DeActive</th>
            </tr>
          </thead>
          {/* <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">No leave requests found.</td>
              </tr>
            ) : (
              currentData.map((student, index) => (
                <tr key={student.id}>
                  <td className="border border-gray-300">{index + 1}</td>
                  <td className="border border-gray-300">{student.name}</td>
                  <td className="border border-gray-300">{student.department}</td>
                  <td className="border border-gray-300">{student.gender}</td>
                  <td className="border border-gray-300">{student.role}</td>
                  <td className="border border-gray-300">{student.phone}</td>
                  <td className="border flex justify-center items-center">
                    <button className="edit_btn flex items-center" onClick={() => handleEditClick(student)}>
                      <MdEdit className="mr-1" /> Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody> */}
          <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">No leave requests found.</td>
              </tr>
            ) : (
              currentData.map((student, index) => (
                <tr key={student.id}>
                  <td className="border border-gray-300">{(currentPage - 1) * dataPerPage + index + 1}</td>
                  <td className="border border-gray-300">{student.name}</td>
                  <td className="border border-gray-300">{student.department}</td> {/* Display HOD ID here */}
                  <td className="border border-gray-300">{student.gender}</td>
                  <td className="border border-gray-300">{student.role}</td>
                  <td className="border border-gray-300">{student.phone}</td>
                  <td className="border flex justify-center items-center">
                    <button className="edit_btn flex items-center" onClick={() => handleEditClick(student)}>
                      <MdEdit className="mr-1" /> Edit
                    </button>
                  </td>
                  <td className="border border-gray-300">
                    <Switch
                      onChange={() => toggleActiveStatus(student.id)}
                      checked={student.active === 'Active'}
                      onColor="#00ff00" // Green for active
                      offColor="#ff0000" // Red for deactivated
                      offHandleColor="#000000"  
                      onHandleColor="#181616"
                      uncheckedIcon={false}
                      checkedIcon={false}
                    />
                    {/* <span className="ml-2 text-sm font-bold">
                      {student.active === 'Active' ? 'Active' : 'Deactive'}
                    </span> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            {'<'}
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => paginate(page + 1)}
              className={`px-4 py-2 mx-1 ${currentPage === page + 1 ? 'bg-blue-500 text-white rounded' : 'bg-gray-300 rounded'}`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            {'>'}
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-50" onClick={closeModal}></div>
          <div className="modal-container bg-white p-8 rounded-lg w-80 z-10">
            <h3 className="text-xl font-bold mb-4">Edit Student</h3>
            <label className="block text-sm font-bold mb-2">Name:</label>
            <input
              disabled
              type="text"
              name="name"
              value={updatedData.name}
              onChange={handleEditChange}
              className="block w-full bg-gray-200 rounded p-2"
            />
            <label className="block text-sm font-bold mb-2 mt-2">Department:</label>
            <select
              name="department"
              value={updatedData.department}
              onChange={handleEditChange}
              className="border border-gray-300 p-2 w-full"
            >
              <option value="hod1">Raman</option>
              <option value="hod2">Shyam</option>
              <option value="hod3">Radhika</option>
              <option value="hod4">Karina</option>
            </select>
            <label className="block text-sm font-bold mb-2 mt-2">Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={updatedData.phone}
              onChange={handleEditChange}
              className="border border-gray-300 p-2 w-full"
            />
            <div className="mt-4 flex justify-between">
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
              <button onClick={closeModal} className="bg-gray-300 text-black px-4 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStudentAdmin;
