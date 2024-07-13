import axios from 'axios';
import { API_URL } from './config';

export const fetchUser = async (userId: string) => {
  const response = await axios.get(`${API_URL}/api/users/${userId}`);
  console.log(response);
  return response.data.data;
};
