
const User = ({user:{id, name, username, email}}) => {

    return (
        <div className={'user'}>
            {id}  {name} -- {username} -- {email}
        </div>
    );
};

export default User;