import axios from 'axios';
import { API_URL } from './config';

// Функция для входа
export const logInRequest = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/login`, { email, password });
  return response.data;
};

// Функция для регистрации
export const registerRequest = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/register`, { email, password });
  return response.data;
};