import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {Header};