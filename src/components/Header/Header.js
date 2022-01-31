import {NavLink, Outlet} from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/cars'}>Cars</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {Header};