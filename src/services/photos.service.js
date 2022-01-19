import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

const photosService = {
    getPhotos: (albumId) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
}

export {photosService};