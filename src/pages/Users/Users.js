import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services/index";
import {User} from "../../components/index";
import css from "./Users.module.css";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={css.users_wrapper}>
            <div className={css.users_container}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {Users};