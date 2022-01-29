import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const carService = {
    getAll: ()=> axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, data) => axiosService.patch(`${urls.cars}/${id}`,data).then(value => value.data)
}

