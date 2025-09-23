import axios from "axios";
import {USER_API} from "../constants/api";

// const API = axios.create({
//     baseURL : "http://localhost/crm/car-crm-backend/controllers/",
// });

const API = axios.create({
    baseURL : USER_API,
});


export const UserAPI  = {
    getAll: () => API.get("/Usermaster.php"),
    create: (data) => API.post('/USermaster.php', data),
}