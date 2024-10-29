import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const registerUser = async (data) => {
  try {
    const existingUserResponse = await API.get(`/users?email=${data.email}`);
    if (existingUserResponse.data.length > 0) {
      throw new Error("Email already registered");
    }
    return await API.post("/users", data);
  } catch (error) {
    throw error;
  }
};

export const leaveApplyUser = async (data) => {
  try {
    await API.post("/userLeaveRequests", data);
  } catch (error) {
    throw error;
  }
};

export const leaveApplyHOD = async (data) => {
  try {
    await API.post("/hodLeaveRequests", data);
  } catch (error) {
    throw error;
  }
};

// Login User
export const loginUser = async (email, password) => {
  try {
    const response = await API.get(
      `/users?email=${email}&password=${password}`
    );

    if (response.data.length > 0) {
      const user = { ...response.data[0] }; 
      delete user.password; 
      
      return { data: [user] };
    } else {
      throw new Error("Invalid credentials!");
    }
  } catch (error) {
    throw error;
  }
};

export const forgetPassword = async (emailValue) => {
  try {
    const response = await API.get(`/users?email=${emailValue}`);

    if (response.data && response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error("Email Not Register !");
    }
  } catch (error) {
    console.error("Failed To Forget Password :", error.message);
    throw error;
  }
};

export const resetPassword = async (user, userData) => {
  try {
    const updatedUser = {
      ...user,
      ...userData,
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
      ...updatedFields,
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
    throw new Error("Failed to fetch students: " + error.message);
  }
};

export const fetchStudents = async (department) => {
  try {
    const response = await fetchAllStudents(department);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch students:", error.message);
  }
};