import axios from "axios";

import baseUrl from "../configs/urls";

const axiosService = axios.create({
    baseUrl
});

export {axiosService};
