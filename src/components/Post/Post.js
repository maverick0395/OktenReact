import css from "./Post.module.css";

const Post = ({post}) => {
    return (
        <div className={css.post_wrapper}>
            <h4>User ID: {post.userId}</h4>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export {Post};