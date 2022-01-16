import axios from "axios";

import baseUrl from "../config/urls";

const axiosService = axios.create({
    baseUrl
});

export default axiosService;

