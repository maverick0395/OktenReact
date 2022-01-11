import {useState, useEffect} from "react";

import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);

    return (
        <div className={'block posts-block'}>
            {posts.map(value => <Post key={value.id} userId={value.userId} title={value.title} body={value.body} />)}
        </div>
    );
};

export default Posts;