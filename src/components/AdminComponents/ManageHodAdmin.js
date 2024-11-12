



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




















// current code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageHodAdmin = () => {
//   const [leaveRequestsHod, setLeaveRequestsHod] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedHod, setSelectedHod] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const departments = ['hod1', 'hod2', 'hod3', 'hod4']; // Define available departments

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=hod');

//         if (response) {
//           setLeaveRequestsHod(response.data);
//         } else {
//           setHodError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleEditClick = (hod) => {
//     setSelectedHod(hod);
//     setUpdatedData(hod);
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
//       setLeaveRequestsHod((prev) =>
//         prev.map((hod) =>
//           hod.id === updatedData.id ? updatedData : hod
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
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">HOD Management List:</h1>
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
//             {leaveRequestsHod.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsHod.map((hod,index) => (
//                 <tr key={hod.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{hod.name}</td>
//                   <td className="border border-gray-300">{hod.id}</td>
//                   <td className="border border-gray-300">{hod.gender}</td>
//                   <td className="border border-gray-300">{hod.role}</td>
//                   <td className="border border-gray-300">{hod.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(hod)}><MdEdit/>Edit</button>
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
//             <h2 className="text-xl mb-4">Edit HOD</h2>
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

// export default ManageHodAdmin;







// after authguard code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageHodAdmin = () => {
//   const [leaveRequestsHod, setLeaveRequestsHod] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedHod, setSelectedHod] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const departments = ['hod1', 'hod2', 'hod3', 'hod4'];

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=hod');

//         if (response) {
//           setLeaveRequestsHod(response.data);
//         } else {
//           setHodError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleEditClick = (hod) => {
//     setSelectedHod(hod);
//     setUpdatedData(hod);
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
//       setLeaveRequestsHod((prev) =>
//         prev.map((hod) =>
//           hod.id === updatedData.id ? updatedData : hod
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
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">HOD Management List:</h1>
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
//             {leaveRequestsHod.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsHod.map((hod,index) => (
//                 <tr key={hod.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{hod.name}</td>
//                   <td className="border border-gray-300">{hod.id}</td>
//                   <td className="border border-gray-300">{hod.gender}</td>
//                   <td className="border border-gray-300">{hod.role}</td>
//                   <td className="border border-gray-300">{hod.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(hod)}><MdEdit/>Edit</button>
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
//             <h2 className="text-xl mb-4">Edit HOD</h2>
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

// export default ManageHodAdmin;



// without sorting code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageHodAdmin = () => {
//   const [leaveRequestsHod, setLeaveRequestsHod] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedHod, setSelectedHod] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const departments = ['hod1', 'hod2', 'hod3', 'hod4'];

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=hod');
//         if (response) {
//           setLeaveRequestsHod(response.data);
//         } else {
//           setHodError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleEditClick = (hod) => {
//     setSelectedHod(hod);
//     setUpdatedData(hod);
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
//       setLeaveRequestsHod((prev) =>
//         prev.map((hod) =>
//           hod.id === updatedData.id ? updatedData : hod
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating HOD:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <h1 className="mt-20 mb-6 flex justify-left items-center text-2xl font-bold">HOD Management List:</h1>

//         {/* Render HOD Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               {/* <th className="border border-gray-300 text-center text-2xl">Department</th> */}
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsHod.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsHod.map((hod, index) => (
//                 <tr key={hod.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{hod.name}</td>
//                   {/* <td className="border border-gray-300">{hod.department}</td> */}
//                   <td className="border border-gray-300">{hod.gender}</td>
//                   <td className="border border-gray-300">{hod.id}</td>
//                   <td className="border border-gray-300">{hod.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(hod)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit HOD Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl mb-4">Edit HOD</h2>
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
//                 {/* <select
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
//                 </select> */}
//               </label>
//               <input className='w-full border border-black' disabled value={updatedData.id}/>

//               <label className="block mb-2 mt-2">
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

// export default ManageHodAdmin;


// with sorting code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageHodAdmin = () => {
//   const [leaveRequestsHod, setLeaveRequestsHod] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedHod, setSelectedHod] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   const departments = ['hod1', 'hod2', 'hod3', 'hod4'];

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=hod');
//         if (response) {
//           setLeaveRequestsHod(response.data);
//         } else {
//           setHodError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleEditClick = (hod) => {
//     setSelectedHod(hod);
//     setUpdatedData(hod);
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
//       setLeaveRequestsHod((prev) =>
//         prev.map((hod) =>
//           hod.id === updatedData.id ? updatedData : hod
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating HOD:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className='flex flex-row justify-between items-center'>
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">HOD Management List:</h1>
//           <select className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold">
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>
//         {/* Render HOD Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               {/* <th className="border border-gray-300 text-center text-2xl">Department</th> */}
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequestsHod.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               leaveRequestsHod.map((hod, index) => (
//                 <tr key={hod.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{hod.name}</td>
//                   {/* <td className="border border-gray-300">{hod.department}</td> */}
//                   <td className="border border-gray-300">{hod.gender}</td>
//                   <td className="border border-gray-300">{hod.id}</td>
//                   <td className="border border-gray-300">{hod.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(hod)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit HOD Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl mb-4">Edit HOD</h2>
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
//                 {/* <select
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
//                 </select> */}
//               </label>
//               <input className='w-full border border-black' disabled value={updatedData.id}/>

//               <label className="block mb-2 mt-2">
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

// export default ManageHodAdmin;






// with pagination code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { MdEdit } from "react-icons/md";

// const ManageHodAdmin = () => {
//   const [leaveRequestsHod, setLeaveRequestsHod] = useState([]);
//   const [hodError, setHodError] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedHod, setSelectedHod] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});
//   const [sortField, setSortField] = useState(''); // Sorting field (name, phone)
//   const [sortOrder, setSortOrder] = useState('asc'); // Sorting order (asc, desc)

//   const API = axios.create({
//     baseURL: 'http://localhost:3001',
//   });

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await API.get('/users?role=hod');
//         if (response) {
//           setLeaveRequestsHod(response.data);
//         } else {
//           setHodError('No Leave Data Available!');
//         }
//       } catch (err) {
//         setHodError('Error fetching leave requests');
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   const handleEditClick = (hod) => {
//     setSelectedHod(hod);
//     setUpdatedData(hod);
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
//       setLeaveRequestsHod((prev) =>
//         prev.map((hod) =>
//           hod.id === updatedData.id ? updatedData : hod
//         )
//       );
//       setModalOpen(false);
//       toast.success("Update Data Successfully!");
//     } catch (error) {
//       console.error('Error updating HOD:', error);
//       toast.error("Error While Updating Data!");
//     }
//   };

//   const handleSort = (field) => {
//     if (field === '') {
//       // Reset sorting if 'Sort By' option is selected
//       setSortField('');
//       setSortOrder('asc');
//       return;
//     }
    
//     // Set the selected sort field
//     setSortField(field);
  
//     // Reset the sort order to ascending on a new field selection
//     setSortOrder('asc');
//   };
  

//   // Sorting logic
//   const sortedLeaveRequests = [...leaveRequestsHod].sort((a, b) => {
//     if (!sortField) return 0; // No sorting field, no sorting applied
//     const compareA = a[sortField] || '';
//     const compareB = b[sortField] || '';
  
//     if (sortOrder === 'asc') {
//       return compareA > compareB ? 1 : compareA < compareB ? -1 : 0;
//     } else {
//       return compareA < compareB ? 1 : compareA > compareB ? -1 : 0;
//     }
//   });  

//   return (
//     <div className="container mx-auto p-4">
//       <div className="overflow-x-auto">
//         <div className='flex flex-row justify-between items-center'>
//           <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">HOD Management List:</h1>
//           <select
//             className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold"
//             onChange={(e) => handleSort(e.target.value)} // Trigger sorting on selection
//           >
//             <option value="">Sort By</option>
//             <option value="name">Sort By Name</option>
//             <option value="phone">Sort By Number</option>
//           </select>
//         </div>

//         {/* Render HOD Management Table */}
//         <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 text-center text-2xl">ID</th>
//               <th className="border border-gray-300 text-center text-2xl">Name</th>
//               <th className="border border-gray-300 text-center text-2xl">Gender</th>
//               <th className="border border-gray-300 text-center text-2xl">Role</th>
//               <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
//               <th className="border border-gray-300 text-center text-2xl">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedLeaveRequests.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center py-4">No leave requests found.</td>
//               </tr>
//             ) : (
//               sortedLeaveRequests.map((hod, index) => (
//                 <tr key={hod.id}>
//                   <td className="border border-gray-300">{index + 1}</td>
//                   <td className="border border-gray-300">{hod.name}</td>
//                   <td className="border border-gray-300">{hod.gender}</td>
//                   <td className="border border-gray-300">{hod.id}</td>
//                   <td className="border border-gray-300">{hod.phone}</td>
//                   <td className="border border-gray-300">
//                     <button className="edit_btn" onClick={() => handleEditClick(hod)}><MdEdit />Edit</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Render Edit HOD Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl mb-4">Edit HOD</h2>
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

//               <label>Department:</label>
//               <input className='w-full border border-black' disabled value={updatedData.id} />

//               {/* <label className="block mb-2 mt-2">
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
//               </label> */}

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
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={() => setModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 onClick={handleUpdate}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageHodAdmin;



// with pagination code

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Switch from 'react-switch';
import toast from 'react-hot-toast';
import { MdEdit } from "react-icons/md";

const ManageHodAdmin = () => {
  const [leaveRequestsHod, setLeaveRequestsHod] = useState([]);
  const [hodError, setHodError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHod, setSelectedHod] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default for larger screens

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

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

    // Set items per page based on screen width
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(5); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(7); // Tablet
      } else {
        setItemsPerPage(8); // Desktop
      }
    };
    
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
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
      if (updatedData.name === '') {
        toast.error("Name is Required !");
        return;
      }
      if (updatedData.name.length < 3) {
        toast.error("Min 3 Character is Required !");
        return;
      }
      if (updatedData.phone.length === 0) {
        toast.error("Phone Number Required !");
        return;
      }
      if (updatedData.phone.length !== 10) {
        toast.error("Phone number must be exactly 10 digits.");
        return;
      }
      await API.put(`/users/${updatedData.id}`, updatedData);
      setLeaveRequestsHod((prev) =>
        prev.map((hod) =>
          hod.id === updatedData.id ? updatedData : hod
        )
      );
      setModalOpen(false);
      toast.success("HOD Data Update Successfully!");
    } catch (error) {
      console.error('Error updating HOD:', error);
      toast.error("Error While Updating Data!");
    }
  };

  const handleSort = (field) => {
    if (field === '') {
      setSortField('');
      setSortOrder('asc');
      return;
    }
    setSortField(field);
    setSortOrder('asc');
  };

  const handleToggleStatus = async (hod) => {
    const updatedStatus = hod.active === "Active" ? "DeActive" : "Active";
    const updatedHod = { ...hod, active: updatedStatus };

    try {
      await API.put(`/users/${hod.id}`, updatedHod);
      setLeaveRequestsHod((prev) =>
        prev.map((item) =>
          item.id === hod.id ? { ...item, active: updatedStatus } : item
        )
      );
      toast.success(`HOD ${updatedStatus === "Active" ? "Activated" : "Deactivated"} Successfully`);
    } catch (error) {
      console.error('Error updating HOD status:', error);
      toast.error("Error While Updating Status");
    }
  };
  const sortedLeaveRequests = [...leaveRequestsHod].sort((a, b) => {
    if (!sortField) return 0;
  
    // Convert both values to lowercase for case-insensitive comparison
    const compareA = (a[sortField] || '').toString().toLowerCase();
    const compareB = (b[sortField] || '').toString().toLowerCase();
  
    return sortOrder === 'asc' ? (compareA > compareB ? 1 : -1) : (compareA < compareB ? 1 : -1);
  });
  

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLeaveRequests = sortedLeaveRequests.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(sortedLeaveRequests.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className='flex flex-row justify-between items-center'>
          <h1 className="mt-16 mb-6 flex justify-left items-center text-2xl font-bold">HOD Management List:</h1>
          <select
            className="max-w-36 mt-16 mb-6 flex justify-left items-center text-md font-bold"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="name">Sort By Name</option>
            <option value="phone">Sort By Number</option>
          </select>
        </div>

        {/* Render HOD Management Table */}
        <table className="min-w-full text-center table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 text-center text-2xl">ID</th>
              <th className="border border-gray-300 text-center text-2xl">Name</th>
              <th className="border border-gray-300 text-center text-2xl">Gender</th>
              <th className="border border-gray-300 text-center text-2xl">Role</th>
              <th className="border border-gray-300 text-center text-2xl">Phone Number</th>
              <th className="border border-gray-300 text-center text-2xl">Edit</th>
              <th className="border border-gray-300 text-center text-2xl">Active / DeActive</th>
            </tr>
          </thead>
          <tbody>
            {currentLeaveRequests.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">No leave requests found.</td>
              </tr>
            ) : (
              currentLeaveRequests.map((hod, index) => (
                <tr key={hod.id}>
                  <td className="border border-gray-300">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="border border-gray-300">{hod.name}</td>
                  <td className="border border-gray-300">{hod.gender}</td>
                  <td className="border border-gray-300">{hod.id}</td>
                  <td className="border border-gray-300">{hod.phone}</td>
                  {/* <td className="border border-gray-300">
                    <button className="edit_btn" onClick={() => handleEditClick(hod)}><MdEdit />Edit</button>
                  </td> */}
                  <td className="border flex justify-center items-center">
                    <button className="edit_btn flex items-center" onClick={() => handleEditClick(hod)}>
                      <MdEdit className="mr-1" /> Edit
                    </button>
                  </td>
                  <td className="border border-gray-300">
                    <Switch
                      onChange={() => handleToggleStatus(hod)}
                      checked={hod.active === "Active"}
                      onColor="#00ff00" // Green for active
                      offColor="#ff0000" // Red for deactivated
                      offHandleColor="#000000"  
                      onHandleColor="#181616"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      // height={20}
                      // width={50}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={handlePreviousPage}
            className="cursor-pointer px-4 py-2 bg-gray-300 text-black rounded-l"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className="cursor-pointer px-4 py-2 bg-gray-300 text-black rounded-r"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Render Edit HOD Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">Edit HOD</h2>
            <div>
              <label className="block mb-2">
                Name:
                <input
                  disabled
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={updatedData.name}
                  onChange={handleInputChange}
                  className="block w-full bg-gray-200 rounded p-2"
                />
              </label>

              <label>Department:</label>
              <input className='block w-full bg-gray-200 rounded p-2' disabled value={updatedData.id} />

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
              <div className="flex justify-between space-x-4 mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 mr-1" onClick={() => setModalOpen(false)}>Cancel</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageHodAdmin;