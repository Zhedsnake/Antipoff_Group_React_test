import axios from 'axios';
import {API_URL} from './config';
import {TokenResponse} from "../types/token";


export default class AuthService {
    static async logInRequest(email: string, password: string): Promise<TokenResponse> {
        return await axios.post(`${API_URL}/api/login`, {email, password});
    }

    static async registerRequest(email: string, password: string): Promise<TokenResponse> {
        return await axios.post(`${API_URL}/api/register`, {email, password});
    }
}
