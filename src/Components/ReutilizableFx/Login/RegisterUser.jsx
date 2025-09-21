import axios from "axios";

export const registerUser = async (firstname, username, email, password) => {
  try {
		const response = await axios.post(
			'http://localhost:5000/api/register',
			{ firstname, username, email, password},
			{
				headers: { "Content-Type": "application/json" },
				withCredentials: true
			}
		);

		return response.data;
	} catch (error) {
		console.error("Error en registro:", error);

		return { 
			success: false, 
			error: "Error al conectarse al servidor"
		};
	}
};
    
