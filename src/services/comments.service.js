import {urls} from "../config/urls";
import {axiosService} from "./index";

const commentService = {
    getById:(id)=>axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}

export {commentService};

