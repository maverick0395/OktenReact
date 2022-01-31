import css from "./Comment.module.css";

const Comment = ({comment}) => {
    return (
        <div className={css.comment_wrapper}>
            <h4>Name: {comment.name}</h4>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
        </div>
    );
};

export {Comment};