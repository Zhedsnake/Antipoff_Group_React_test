import axios from 'axios';
import { API_URL } from './config';


export default class StaffDataService {
    static async getStaffByPagination(page: number) {
        const response = await axios.get(`${API_URL}/api/users?page=${page}`, {
            params: {
                page: page
            }
        })
        return response;
    }

    static async getStaffById(userId: string) {
        const response = await axios.get(`${API_URL}/api/users/${userId}`)
        return response;
    }
}
