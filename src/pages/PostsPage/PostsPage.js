import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../../components";
import {getAllPosts} from "../../store";

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};