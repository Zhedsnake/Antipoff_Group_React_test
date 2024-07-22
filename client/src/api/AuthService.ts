import axios from 'axios';
import { API_URL } from './config';


export default class AuthService {
    static async logInRequest(email: string, password: string) {
        const response = await axios.post(`${API_URL}/api/login`, { email, password });
        return response;
    }

    static async registerRequest(email: string, password: string) {
        const response = await axios.post(`${API_URL}/api/register`, { email, password });
        return response;
    }
}