import {Link, useNavigate} from "react-router-dom";

import css from "./User.module.css";

const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    const showUserAlbums = (id) => {
        navigate(`/users/${id.toString()}/albums`);
    }

    return (
        <div className={css.user_wrapper}>
            <Link to={id.toString()} state={user}>{id}. {name}</Link>
            <button onClick={()=> showUserAlbums(id)}>Show albums</button>
        </div>
    );
};

export {User};