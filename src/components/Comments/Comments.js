import {useState, useEffect} from "react";
import Comment from '../Comment/Comment';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, []);

    return (
        <div className={'block comments-block'}>
            {comments.map(value => <Comment key={value.id} postId={value.postId} name={value.name} email={value.email} body={value.body} /> )}
        </div>
    );
};

export default Comments;