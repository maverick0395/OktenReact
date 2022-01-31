import {axiosJsonplaceholderService} from "./axios.service";
import {jsonplaceholderUrls} from "../constants";


export const userService = {
    getAll: () => axiosJsonplaceholderService.get(jsonplaceholderUrls.users).then(value => value.data)
}

export const postService = {
    getAll: () => axiosJsonplaceholderService.get(jsonplaceholderUrls.posts).then(value => value.data)
}

export const commentService = {
    getAll: () => axiosJsonplaceholderService.get(jsonplaceholderUrls.comments).then(value => value.data)
}