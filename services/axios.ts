import axios from "axios";
import { parseCookies } from "nookies";

export function getApi(context: any) {
    const { 'nextauth.token': token } = parseCookies();

    const api = axios.create({
        baseURL: 'http://localhost:8080'
    })

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    return api;
}