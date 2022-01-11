
const Post = (props) => {
    const {id, userId, title, body} = props;
    return (
        <div className={'Post'}>
            <h3>{userId}</h3>
            <h3>{title}</h3>
            <p>{body}</p>

        </div>
    );
};

export default Post;