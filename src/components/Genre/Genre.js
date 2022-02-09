import {NavLink} from "react-router-dom";

const Genre = ({genre}) => {
    return (
        <div>
            <NavLink to={`/genres/${genre.id}`} state={genre}><h1>{genre.name}</h1></NavLink>
        </div>
    );
};

export {Genre};