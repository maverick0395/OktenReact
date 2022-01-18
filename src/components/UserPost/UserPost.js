const UserPost = ({userPost}) => {
    const {id, title, body} = userPost;

    return (
        <div>
            <h4>Post ID: {id}</h4>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
        </div>
    );
};

export {UserPost};