import axios from "axios";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/login', 
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      }
    );

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    
    return { 
      success: false, 
      error: "User or password error." 
    };
  }
};