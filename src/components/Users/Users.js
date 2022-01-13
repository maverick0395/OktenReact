import User from '../User/User';

const Users = ({getUserId, users}) => {

    return (
        <div className={'users-wrapper'}>
            {users.map(value => <User key={value.id} user={value} getUserId={getUserId} />)}
        </div>
    );
};

export default Users;