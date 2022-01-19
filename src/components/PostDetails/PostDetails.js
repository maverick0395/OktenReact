import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";
import css from "./PostDetails.module.css";

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state);
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])

    const showPostComments = (id) => {
        navigate(`/posts/${id.toString()}/comments`)
    }

    return (
        <div>
            {post && (
                <div className={css.right_side}>
                    <div className={css.post_details}>
                        <div>Post ID: {post.id}</div>
                        <div>User ID: {post.userId}</div>
                        <div>Title: {post.title}</div>
                        <div>Body: {post.body}</div>
                        <button onClick={() => showPostComments(id)}>Show Comments</button>
                    </div>
                    <Outlet/>
                </div>
            )}
        </div>
    );
};

export {PostDetails};