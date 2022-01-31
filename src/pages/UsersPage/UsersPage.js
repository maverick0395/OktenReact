import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../../components";
import {getAllUsers} from "../../store";

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};