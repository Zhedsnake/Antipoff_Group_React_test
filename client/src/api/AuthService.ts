import axios from 'axios';
import {API_URL} from './config';
import {TokenResponse} from "../types/token";


export default class AuthService {
    static async logInRequest(email: string, password: string): Promise<TokenResponse> {
        const response = await axios.post(`${API_URL}/api/login`, {email, password});
        return response.data;
    }

    static async registerRequest(email: string, password: string): Promise<TokenResponse> {
        const response = await axios.post(`${API_URL}/api/register`, {email, password});
        return response.data;
    }
}
