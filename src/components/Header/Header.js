import {NavLink, Outlet} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {Header};