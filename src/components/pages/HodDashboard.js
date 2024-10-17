// import React, { useEffect, useState } from 'react';
// import { fetchAllStudents } from '../../api';
// import toast from 'react-hot-toast';

// const HODDashboard = () => {
//     const [students, setStudents] = useState([]);
//     const [department, setDepartment] = useState('');
//     const [loading, setLoading] = useState(true);

//     // Fetch user and department from localStorage on component mount
//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem('user'));

//         // Ensure that the logged-in user is a HOD
//         if (user && user.role === 'hod') {
//             setDepartment(user.department);
//             fetchStudents(user.department);  // Pass the department for better filtering
//         } else {
//             toast.error("Unauthorized access!");
//         }
//     }, []);

//     // Fetch students filtered by the department
//     const fetchStudents = async (dept) => {
//         try {
//             const response = await fetchAllStudents();  // Fetch all students
//             const allStudents = response.data;

//             // Filter students by the department
//             const filteredStudents = allStudents.filter(student => student.department === dept);
//             setStudents(filteredStudents);
//         } catch (error) {
//             toast.error('Failed to fetch students.');
//             console.error('Error fetching students:', error);
//         } finally {
//             setLoading(false);  // Stop loading indicator
//         }
//     };

//     return (
//         <div>
//             <h1 className="text-2xl my-4">HOD Dashboard</h1>

//             {loading ? (
//                 <p>Loading students...</p>
//             ) : (
//                 <>
//                     <h2 className="text-lg my-2">Students in Department: {department}</h2>
//                     <ul className="list-disc">
//                         {students.length > 0 ? (
//                             students.map(student => (
//                                 <li key={student.id}>
//                                     {student.name} - {student.email}
//                                 </li>
//                             ))
//                         ) : (
//                             <p>No students found in this department.</p>
//                         )}
//                     </ul>
//                 </>
//             )}
//         </div>
//     );
// };

// export default HODDashboard;










// current code


import React from 'react';

const HODDashboard = () => {
    return (
        <div>
           
        </div>
    );
};

export default HODDashboard;