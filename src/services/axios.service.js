import axios from "axios";
import baseUrl from "../constants/urls";

export const axiosService = axios.create({baseUrl});

