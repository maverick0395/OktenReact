import {axiosService} from "./axios.service";
import baseURL from "../constants/urls";
import {apiKey} from "../constants/urls";

export const moviesService = {
    getAll: (page)=> axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&page=${page}`).then(value => value.data),
    getByActor: (actorId, page) => axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&with_people=${actorId}&page=${page}`).then(value => value.data),
    getByGenre: (genreId, page) => axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`).then(value => value.data),
    getById: (id) => axiosService.get(`${baseURL}/movie/${id}?api_key=${apiKey}`).then(value => value.data),
    getCast: (id) => axiosService.get(`${baseURL}/movie/${id}/credits?api_key=${apiKey}`).then(value => value.data)
}

