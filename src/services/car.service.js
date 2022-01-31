import {axiosCarService} from "./axios.service";
import {carsUrls} from "../constants";

export const carService = {
    getAll: ()=> axiosCarService.get(carsUrls.cars).then(value => value.data),
    create: (car) => axiosCarService.post(carsUrls.cars, car).then(value => value.data),
    deleteById: (id) => axiosCarService.delete(`${carsUrls.cars}/${id}`),
    updateById: (id, data) => axiosCarService.patch(`${carsUrls.cars}/${id}`,data).then(value => value.data)
}

