import {axiosService} from "./axios.service";
import baseURL from "../constants/urls";
import {apiKey} from "../constants/urls";

export const genreServie = {
    getAll: () => axiosService.get(`${baseURL}/genre/movie/list?api_key=${apiKey}`).then(value => value.data)
}