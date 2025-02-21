import axios from "axios";

export function configureAxios() {
    axios.defaults.baseURL = "http://localhost:3000";
    axios.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (err) => {
        return Promise.reject(err);
    });

}