import axios from "axios";
import { parseCookies } from "nookies";

export function getApi() {
    const { 'nextauth.token': token } = parseCookies();

    const api = axios.create({
        baseURL: 'http://localhost:8080'
    })

    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return api;
}
