import axios from "axios";

const api = axios.create({
    baseURL:"http://192.168.3.10:8000"
    // baseURL:"http://192.168.56.1:8000"
})

export { api }