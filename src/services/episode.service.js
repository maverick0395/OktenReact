import {axiosService} from "./";
import {urls} from "../configs/urls";

const episodeService = {
    getAll: ()=>axiosService.get(urls.episodes).then(value => value.data),
    getById: ()=>axiosService.get(`${urls.episodes}/${id}`).then(value => value.data),
    getByArray: (arr)=>axiosService.get(`${urls.episodes}/${arr}`).then(value => value.data),
    getByFilterQuery: (query)=>axiosService.get(`${urls.episodes}/?${query}`).then(value => value.data),
}

export {episodeService};