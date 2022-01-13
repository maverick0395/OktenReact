
const Post = ({post:{id, title, body}}) => {
    return (
        <div className={'post'}>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;