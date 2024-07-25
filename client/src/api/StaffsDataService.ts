import axios from 'axios';
import {API_URL} from './config';
import {IStaffResponse, IStaffsResponse} from "../types/stuffs";


export default class StaffsDataService {
    static async getStaffsByPagination(page: number) {
        const response = await axios.get(`${API_URL}/api/users?page=${page}`, {
            params: {
                page: page
            }
        });
        return response.data;
    }

    static async getStaffById(stuffId: string | undefined): Promise<IStaffResponse> {
        const response = await axios.get(`${API_URL}/api/users/${stuffId}`);
        return response;
    }
}
