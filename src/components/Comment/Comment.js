const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div>
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};