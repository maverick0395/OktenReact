import {NavLink, Outlet} from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <>
            <div className={css.header_wrapper}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/locations">Locations</NavLink>
                <NavLink to="/episodes">Episodes</NavLink>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </>
    );
};

export {Header};