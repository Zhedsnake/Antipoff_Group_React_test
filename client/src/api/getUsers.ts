import axios from 'axios';
import { API_URL } from './config';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/api/users?page=1`);
  return response.data.data;
};
