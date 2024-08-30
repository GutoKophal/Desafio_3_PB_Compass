import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTypes = async () => {
  try {
    const response = await api.get('/types');
    return response.data;
  } catch (error) {
    console.error('Error fetching types:', error);
    throw error;
  }
};

export const getTours = async () => {
  try {
    const response = await api.get('/tours');
    return response.data;
  } catch (error) {
    console.error('Error fetching tours:', error);
    throw error;
  }
};

export default api;
