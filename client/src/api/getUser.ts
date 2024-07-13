import axios from 'axios';
import { API_URL } from './config';

export const fetchUser = async (id: string) => {
  const response = await axios.get(`${API_URL}/api/users/${id}`);
  console.log(response);
  return response.data.data;
};
