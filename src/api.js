import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',  
});

export const registerUser = (data) => API.post('/users', data);

export const loginUser = (email, password, role) => {
    if (role === 'student') {
        return API.get(`/users?email=${email}&password=${password}`);
    } 
    else if (role === 'hod') {
        return API.get(`/users?email=${email}&password=${password}`);
    } 
    else if (role === 'admin') {
        return API.get(`/users?email=${email}&password=${password}`);
    }
}
