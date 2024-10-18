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



import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

// Register User
// Check if email already exists before registering
export const registerUser = async (data) => {
    try {
      // Check if the user with the same email already exists
      const existingUserResponse = await API.get(`/users?email=${data.email}`);
      
      if (existingUserResponse.data.length > 0) {
        // If a user with the same email exists, throw an error
        throw new Error('Email already registered');
      }
  
      // If the email is not found, proceed with registration
      return await API.post('/users', data);
  
    } catch (error) {
      throw error; 
    }
  };
  

// Login User
export const loginUser = async (email, password, role) => {
    try {
        // Fetch users based on email and password
        const response = await API.get(`/users?email=${email}&password=${password}`);

        // Check if the user exists and has the correct role
        if (response.data.length > 0) {
            const user = response.data[0]; // Assuming there's only one user for the given email and password
            if (user.role === role) {
                return { data: [user] }; // Return the user if the role matches
            } else {
                throw new Error('Role mismatch!'); // Throw an error if the role doesn't match
            }
        } else {
            throw new Error('Invalid credentials!'); // Throw an error if no user is found
        }
    } catch (error) {
        throw error; // Rethrow the error to be handled in the calling function
    }
};

//updateuserdata

export const updateUserData = async(data)=>{
    try {
        const existingUserResponse = await API.get(`/users?email=${data.email}`);

        if(existingUserResponse){
            return await API.put(`/users/${data.id}`, data); 
        }
        else{
            throw new Error('User Not Found !');
        }
    } 
    catch (error) {
        throw error; 
    }
}


// Fetch all students based on department
export const fetchAllStudents = async (department) => {
    try {
        const response = await API.get(`/students?department=${department}`); // Adjusted endpoint
        return response; // Return response to be handled in the calling function
    } catch (error) {
        throw new Error('Failed to fetch students: ' + error.message); // Enhanced error message
    }
};

// Fetch students function that requires department to be passed
export const fetchStudents = async (department) => {
    try {
        const response = await fetchAllStudents(department);
        return response.data; // Return the fetched student data
    } catch (error) {
        console.error('Failed to fetch students:', error.message);
    }
};