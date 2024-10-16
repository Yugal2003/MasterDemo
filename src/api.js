// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:3001',  
// });

// export const registerUser = (data) => API.post('/users', data);

// export const loginUser = (email, password, role) => {
//     if (role === 'student') {
//         return API.get(`/users?email=${email}&password=${password}`);
//     } 
//     else if (role === 'hod') {
//         return API.get(`/users?email=${email}&password=${password}`);
//     } 
//     else if (role === 'admin') {
//         return API.get(`/users?email=${email}&password=${password}`);
//     }
// }



import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',  
});

// Register User
export const registerUser = (data) => API.post('/users', data);

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
