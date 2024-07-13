import axios from 'axios';
import { API_URL } from './config';

export const fetchUsers = async (page: number) => {
  const response = await axios.get(`${API_URL}/api/users?page=${page}`);
  return response.data.data;
};
