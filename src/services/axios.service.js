import axios from "axios";

import baseUrl from "../constants/cars.urls";
import jsonplaceholderBaseUrl from "../constants/jsonplaceholder.urls";

export const axiosCarService = axios.create({baseUrl});
export const axiosJsonplaceholderService = axios.create({jsonplaceholderBaseUrl})

