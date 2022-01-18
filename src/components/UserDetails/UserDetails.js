import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/index";
import css from "./UserDetails.module.css";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setUser(state);
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id])

    const showUserPosts = (id) => {
        navigate(`/users/${id.toString()}/posts`)
    }

    return (
        <div>
            {user && (
                <div className={css.right_side}>
                    <div className={css.user_details}>
                        <div>ID: {user.id}</div>
                        <div>Name: {user.name}</div>
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                        <div>Address: {user.address.street} Str., {user.address.suite}, {user.address.city},
                            code: {user.address.zipcode}</div>
                        <div>Phone: {user.phone}</div>
                        <div>Website: {user.website}</div>
                        <button onClick={() => showUserPosts(id)}>Show User's Posts</button>
                    </div>
                    <Outlet/>
                </div>
            )}
        </div>
    );
};

export {UserDetails};
