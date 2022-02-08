import {axiosService} from "./axios.service";
import baseURL from "../constants/urls";
import {apiKey} from "../constants/urls";

export const moviesService = {
    getAll: (page)=> axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&page=${page}`).then(value => value.data),
    getById: (id) => axiosService.get(`${baseURL}/movie/${id}?api_key=${apiKey}`),
    getByGenre: (genreId) => axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
}

