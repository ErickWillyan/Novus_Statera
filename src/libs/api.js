import axios from "axios";

const api = axios.create({
    baseURL:"http://192.168.15.134:8000"
    // baseURL:"http://192.168.56.1:8000"
})

export { api }