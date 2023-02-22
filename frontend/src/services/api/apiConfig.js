import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3200/api',
    headers: {}
});

export const getRequest = (url) => {
    return api.get(`/${url}`).then(response => response.data);
}

export const postRequest = (url, payload) => {
    return api.post(`/${url}`, payload).then(response => response.data);
}