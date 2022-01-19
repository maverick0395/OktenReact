import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {commentService} from "../../services";
import {Comment} from "../";
import css from "./PostComments.module.css";

const PostComments = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        commentService.getById(id).then(value => setComments(value))
    }, [])

    return (
        <div className={css.comment_section}>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostComments};