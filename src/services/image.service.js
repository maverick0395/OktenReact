import {axiosService} from "./axios.service";
import baseUrl, {urls} from "../configs/urls";

const imageService = {
    getByKeyword: (keyword) => axiosService.get(`${baseUrl}/${keyword}`).then(value => value.data)
}

export {imageService};