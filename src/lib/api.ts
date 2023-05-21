import axios from "axios";

export const api = axios.create({
    baseURL: 'https://hashtag-api.onrender.com:5000',
})