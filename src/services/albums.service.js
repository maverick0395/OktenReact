import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

const albumsService = {
    getUserAlbums: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}

export {albumsService};