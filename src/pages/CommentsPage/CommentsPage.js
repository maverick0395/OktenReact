import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllComments} from "../../store";
import {Comment} from "../../components";

const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, [])

    return (
        <div>
            <h1>Comments</h1>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};