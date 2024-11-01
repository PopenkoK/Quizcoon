import axios from 'axios';

const API_URL = 'http://localhost:3333/api';

const getAllQuizzes = async () => {
  try {
    const response = await axios.get(`${API_URL}/quizzes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw error;
  }
};

const getQuizById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quizzes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching quiz ${id}:`, error);
    throw error;
  }
};

export { getAllQuizzes, getQuizById };
