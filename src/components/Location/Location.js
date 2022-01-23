import {NavLink} from "react-router-dom";

import css from "./Location.module.css";

const Location = ({location}) => {

    return (
        <div className={css.location_card}>
            <h3>Location: {location.name}</h3>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <NavLink to={`/locations/${location.id}`} state={location}>
                <button>Get details</button>
            </NavLink>

        </div>
    );
};

export {Location};