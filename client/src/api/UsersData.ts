import axios from 'axios';
import { API_URL } from './config';


export default class UsersData {
    static async getUsersByPagination(page: number = 1) {
        const response = await axios.get(`${API_URL}/api/users`, {
            params: {
                page: page
            }
        })
        return response.data.data;
    }

    static async getUserById(userId: string) {
        const response = await axios.get(`${API_URL}/api/users/${userId}`)
        return response.data.data;
    }
}
