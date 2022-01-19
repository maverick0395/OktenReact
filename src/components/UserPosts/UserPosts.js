import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import {UserPost} from "..";
import css from "./UserPosts.module.css"

const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        postService.getUserPosts(id).then(value => setUserPosts(value))
    }, [])

    return (
        <div className={css.posts_section}>
            {userPosts && userPosts.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};

export {UserPosts};