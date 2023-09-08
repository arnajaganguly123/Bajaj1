import axios from 'axios';

const API_BASE_URL = 'https://your-heroku-app-url'; // Replace with your API URL

export const getOperationCode = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/bfhl`);
    return response.data.operation_code;
  } catch (error) {
    // Handle error
    console.error('Error fetching operation code:', error);
    throw error;
  }
};

export const postUserData = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/bfhl`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error posting user data:', error);
    throw error;
  }
};
