import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import css from "./Posts.module.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value));
    }, [])

    return (
        <div className={css.posts_wrapper}>
            <div className={css.posts_container}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {Posts};