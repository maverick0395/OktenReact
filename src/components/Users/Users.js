import User from '../User/User';


const Users = ({users}) => {

    return (
        <div className={'users-wrapper'}>
            {users.map(value => <User key={value.id} user={value} />)}
        </div>
    );
};

export default Users;