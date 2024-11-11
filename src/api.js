// yester day change above



// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:3001',  
// });

// // Register User
// export const registerUser = (data) => API.post('/users', data);

// // Login User
// export const loginUser = async (email, password, role) => {
//     try {
//         // Fetch users based on email and password
//         const response = await API.get(`/users?email=${email}&password=${password}`);

//         // Check if the user exists and has the correct role
//         if (response.data.length > 0) {
//             const user = response.data[0]; // Assuming there's only one user for the given email and password
//             if (user.role === role) {
//                 return { data: [user] }; // Return the user if the role matches
//             } else {
//                 throw new Error('Role mismatch!'); // Throw an error if the role doesn't match
//             }
//         } else {
//             throw new Error('Invalid credentials!'); // Throw an error if no user is found
//         }
//     } catch (error) {
//         throw error; // Rethrow the error to be handled in the calling function
//     }
// };

// export const fetchAllStudents = async (department) => {
//     return await API.get(`/api/students?department=${department}`);
// };


// export const fetchStudents = async () => {
//     try {
//         const response = await fetchAllStudents(department); 
//         setStudents(response.data);
//     } catch (error) {
//         console.error('Failed to fetch students:', error);
//     }
// };

  



//current code



// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:3001',
// });

// // Register User
// // Check if email already exists before registering
// export const registerUser = async (data) => {
//     try {
//       // Check if the user with the same email already exists
//       const existingUserResponse = await API.get(`/users?email=${data.email}`);
      
//       if (existingUserResponse.data.length > 0) {
//         // If a user with the same email exists, throw an error
//         throw new Error('Email already registered');
//       }
  
//       // If the email is not found, proceed with registration
//       return await API.post('/users', data);
  
//     } catch (error) {
//       throw error; 
//     }
//   };


//   export const leaveApplyUser = async (data) => {
//     try {  
//       // If the email is not found, proceed with registration
//       await API.post('/userLeaveRequests', data);
//     } 
//     catch (error) {
//       throw error; 
//     }
//   };

//   export const leaveApplyHOD = async (data) => {
//     try {  
//       // If the email is not found, proceed with registration
//       await API.post('/hodLeaveRequests', data);
//     } 
//     catch (error) {
//       throw error; 
//     }
//   };
  

// // Login User
// export const loginUser = async (email, password, role) => {
//     try {
//         // Fetch users based on email and password
//         const response = await API.get(`/users?email=${email}&password=${password}`);

//         // Check if the user exists and has the correct role
//         if (response.data.length > 0) {
//             const user = response.data[0]; // Assuming there's only one user for the given email and password
//             if (user.role === role) {
//                 return { data: [user] }; // Return the user if the role matches
//             } else {
//                 throw new Error('Role mismatch!'); // Throw an error if the role doesn't match
//             }
//         } else {
//             throw new Error('Invalid credentials!'); // Throw an error if no user is found
//         }
//     } catch (error) {
//         throw error; // Rethrow the error to be handled in the calling function
//     }
// };


// export const forgetPassword = async (emailValue) => {
//   try {
//     const response = await API.get(`/users?email=${emailValue}`);

//     if (response.data && response.data.length > 0) {
//       console.log("apijs",response.data);
//       return response.data[0];
//     } else {
//         console.log("user not register");
//         throw new Error('Email Not Register !'); // Throw an error if no user is found
//     }
//   } catch (error) {
//       console.error('Failed To Forget Password :', error.message);
//       throw error;
//   }
// };

// export const resetPassword = async (user,userData) => {
//   try {
//     const updatedUser = {
//       ...user,
//       ...userData // Only overwrite fields that are present in updatedFields
//     };
//   // Send PUT request to update user data in db.json
//   return await API.put(`/users/${user.id}`, updatedUser);
//   } catch (error) {
//       throw error;
//   }
// };

// //updateuserdata

// // Update user data by merging updated fields with existing ones
// export const updateUserData = async (user, updatedFields) => {
//   try {
//       // Merge the updated fields with the original user data
//       const updatedUser = {
//           ...user,
//           ...updatedFields // Only overwrite fields that are present in updatedFields
//       };

//       // Send PUT request to update user data in db.json
//       return await API.put(`/users/${user.id}`, updatedUser);
//   } catch (error) {
//       throw error; 
//   }
// };


// // Fetch all students based on department
// export const fetchAllStudents = async (department) => {
//     try {
//         const response = await API.get(`/students?department=${department}`); // Adjusted endpoint
//         return response; // Return response to be handled in the calling function
//     } catch (error) {
//         throw new Error('Failed to fetch students: ' + error.message); // Enhanced error message
//     }
// };

// // Fetch students function that requires department to be passed
// export const fetchStudents = async (department) => {
//     try {
//         const response = await fetchAllStudents(department);
//         return response.data; // Return the fetched student data
//     } catch (error) {
//         console.error('Failed to fetch students:', error.message);
//     }
// };




// after authguard code

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

export const registerUser = async (data) => {
    try {
      const existingUserResponse = await API.get(`/users?email=${data.email}`);
      if (existingUserResponse.data.length > 0) {
        throw new Error('Email already registered');
      }
      return await API.post('/users', data);
    } catch (error) {
      throw error; 
    }
  };


  export const leaveApplyUser = async (data) => {
    try {  
      await API.post('/userLeaveRequests', data);
    } 
    catch (error) {
      throw error; 
    }
  };

  export const leaveApplyHOD = async (data) => {
    try {  
      await API.post('/hodLeaveRequests', data);
    } 
    catch (error) {
      throw error; 
    }
  };
  

// Login User
export const loginUser = async (email, password) => {
  try {
    const response = await API.get(`/users?email=${email}&password=${password}`);

    if (response.data.length > 0) {
      const user = response.data[0];

      if(user.active === 'DeActive'){
        throw new Error("DeActive User")
      }
      return { data: [user] };
    } else {
      throw new Error("Invalid credentials!");
    }
  } catch (error) {
    throw error;
  }
};

// export const loginUser = async (email, password) => {
//   try {
//       // Fetch the admin user
//       let response = await API.get(`/admin?email=${email}&password=${password}`);
//       console.log(response);

//       // Check if admin exists
//       if (response.data.length > 0) {
//           return { data: [response.data[0]] }; // Return the entire admin object
//       }

//       // Fetch for HOD
//       response = await API.get(`/hods?email=${email}&password=${password}`);
//       if (response.data.length > 0) {
//           return { data: [response.data[0]] };
//       }

//       // Fetch for students
//       response = await API.get(`/students?email=${email}&password=${password}`);
//       if (response.data.length > 0) {
//           return { data: [response.data[0]] };
//       }

//       throw new Error("Invalid credentials!");
//   } catch (error) {
//       console.error('Error during login:', error);
//       throw error;
//   }
// };



export const forgetPassword = async (emailValue) => {
  try {
    const response = await API.get(`/users?email=${emailValue}`);

    if (response.data && response.data.length > 0) {
      return response.data[0];
    } else {
        throw new Error('Email Not Register !'); 
    }
  } catch (error) {
      console.error('Failed To Forget Password :', error.message);
      throw error;
  }
};

export const resetPassword = async (user,userData) => {
  try {
    const updatedUser = {
      ...user,
      ...userData 
    };
  return await API.put(`/users/${user.id}`, updatedUser);
  } catch (error) {
      throw error;
  }
};

//updateuserdata

export const updateUserData = async (user, updatedFields) => {
  try {
      const updatedUser = {
          ...user,
          ...updatedFields 
      };

      return await API.put(`/users/${user.id}`, updatedUser);
  } catch (error) {
      throw error; 
  }
};


// Fetch all students based on department
export const fetchAllStudents = async (department) => {
    try {
        const response = await API.get(`/students?department=${department}`); 
        return response; 
    } catch (error) {
        throw new Error('Failed to fetch students: ' + error.message); 
    }
};

export const fetchStudents = async (department) => {
    try {
        const response = await fetchAllStudents(department);
        return response.data; 
    } catch (error) {
        console.error('Failed to fetch students:', error.message);
    }
};















// after new json five file created


// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:3001',
// });

// // Register a new user
// export const registerUser = async (data) => {
//   try {
//     // Check for an existing user in the admin, HOD, or student files
//     const [adminResponse, hodsResponse, studentsResponse] = await Promise.all([
//       API.get(`/admin?email=${data.email}`),
//       API.get(`/hods?email=${data.email}`),
//       API.get(`/students?email=${data.email}`),
//     ]);

//     if (
//       adminResponse.data.length > 0 ||
//       hodsResponse.data.length > 0 ||
//       studentsResponse.data.length > 0
//     ) {
//       throw new Error('Email already registered');
//     }

//     // Determine where to save the new user based on the role
//     if (data.role === 'admin') {
//       return await API.post('/admin', data);
//     } else if (data.role === 'hod') {
//       return await API.post('/hods', data);
//     } else if (data.role === 'student') {
//       return await API.post('/students', data);
//     } else {
//       throw new Error('Invalid role');
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// // Apply for leave as a student
// export const leaveApplyUser = async (data) => {
//   try {
//     await API.post('/userLeaveRequests', data);
//   } catch (error) {
//     throw error;
//   }
// };

// // Apply for leave as a HOD
// export const leaveApplyHOD = async (data) => {
//   try {
//     await API.post('/hodLeaveRequests', data);
//   } catch (error) {
//     throw error;
//   }
// };

// // Login user
// export const loginUser = async (email, password) => {
//   try {
//     // Check all user files for matching email and password
//     const [adminResponse, hodsResponse, studentsResponse] = await Promise.all([
//       API.get(`/admin?email=${email}&password=${password}`),
//       API.get(`/hods?email=${email}&password=${password}`),
//       API.get(`/students?email=${email}&password=${password}`),
//     ]);

//     let user;
//     if (adminResponse.data.length > 0) {
//       user = adminResponse.data[0];
//     } else if (hodsResponse.data.length > 0) {
//       user = hodsResponse.data[0];
//     } else if (studentsResponse.data.length > 0) {
//       user = studentsResponse.data[0];
//     } else {
//       throw new Error('Invalid credentials!');
//     }

//     return { data: [user] };
//   } catch (error) {
//     throw error;
//   }
// };

// // Forget password
// export const forgetPassword = async (emailValue) => {
//   try {
//     // Check all user files for the email
//     const [adminResponse, hodsResponse, studentsResponse] = await Promise.all([
//       API.get(`/admin?email=${emailValue}`),
//       API.get(`/hods?email=${emailValue}`),
//       API.get(`/students?email=${emailValue}`),
//     ]);

//     if (adminResponse.data.length > 0) {
//       return adminResponse.data[0];
//     } else if (hodsResponse.data.length > 0) {
//       return hodsResponse.data[0];
//     } else if (studentsResponse.data.length > 0) {
//       return studentsResponse.data[0];
//     } else {
//       throw new Error('Email Not Registered!');
//     }
//   } catch (error) {
//     console.error('Failed to forget password:', error.message);
//     throw error;
//   }
// };

// // Reset password
// export const resetPassword = async (user, userData) => {
//   try {
//     const updatedUser = {
//       ...user,
//       ...userData,
//     };

//     if (user.role === 'admin') {
//       return await API.put(`/admin/${user.id}`, updatedUser);
//     } else if (user.role === 'hod') {
//       return await API.put(`/hods/${user.id}`, updatedUser);
//     } else if (user.role === 'student') {
//       return await API.put(`/students/${user.id}`, updatedUser);
//     } else {
//       throw new Error('Invalid role');
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// // Update user data
// export const updateUserData = async (user, updatedFields) => {
//   try {
//     const updatedUser = {
//       ...user,
//       ...updatedFields,
//     };

//     if (user.role === 'admin') {
//       return await API.put(`/admin/${user.id}`, updatedUser);
//     } else if (user.role === 'hod') {
//       return await API.put(`/hods/${user.id}`, updatedUser);
//     } else if (user.role === 'student') {
//       return await API.put(`/students/${user.id}`, updatedUser);
//     } else {
//       throw new Error('Invalid role');
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// // Fetch all students based on department
// export const fetchAllStudents = async (department) => {
//   try {
//     const response = await API.get(`/students?department=${department}`);
//     return response;
//   } catch (error) {
//     throw new Error('Failed to fetch students: ' + error.message);
//   }
// };

// // Fetch students data
// export const fetchStudents = async (department) => {
//   try {
//     const response = await fetchAllStudents(department);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch students:', error.message);
//   }
// };