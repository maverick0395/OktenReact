import {axiosService} from "./";
import {urls} from "../configs/urls";

const characterService = {
    getAll: ()=>axiosService.get(urls.characters).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.characters}/${id}`).then(value => value.data),
    getByArray: (arr)=>axiosService.get(`${urls.characters}/${arr}`).then(value => value.data),
    getByFilterQuery: (query)=>axiosService.get(`${urls.characters}/?${query}`).then(value => value.data),
    getByPage: (query) => axiosService.get(query).then(value => value.data)
}

export {characterService};