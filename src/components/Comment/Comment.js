

const Comment = (props) => {
    const {postId, name, email, body} = props;

    return (
        <div className={'Comment'}>
            <h3>{postId} -- {name} -- {email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;