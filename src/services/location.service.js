import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const locationService = {
    getAll: () => axiosService.get(urls.locations).then(value => value.data),
    getById: async(id) => (await axiosService.get(`${urls.locations}/${id}`)).data,
    getByArray: (arr) => axiosService.get(`${urls.locations}/${arr}`).then(value => value.data),
    getByFilterQuery: (query) => axiosService.get(`${urls.locations}/${query}`).then(value => value.data),
    getByPage: (query) => axiosService.get(query).then(value => value.data)
}

export {locationService};