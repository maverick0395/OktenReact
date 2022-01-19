import {urls} from "../config/urls";
import {axiosService} from "./";

const commentService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}

export {commentService};

