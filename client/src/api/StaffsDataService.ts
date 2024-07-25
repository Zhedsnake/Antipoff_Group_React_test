import axios from 'axios';
import {API_URL} from './config';
import {IStaffResponse, IStaffsResponse} from "../types/stuffs";


export default class StaffsDataService {
    static async getStaffsByPagination(page: number): Promise<IStaffsResponse> {
        return await axios.get(`${API_URL}/api/users?page=${page}`, {
            params: {
                page: page
            }
        });
    }

    static async getStaffById(stuffId: string | undefined): Promise<IStaffResponse> {
        return await axios.get(`${API_URL}/api/users/${stuffId}`);
    }
}
