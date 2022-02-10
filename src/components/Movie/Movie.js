import {NavLink} from "react-router-dom";

import {smallImageBaseURL} from "../../constants/image.base.url";


const Movie = ({movie}) => {
    return (
        <div>
            {movie.poster_path && <img src={`${smallImageBaseURL}${movie.poster_path}`} alt='Movie poster'/>}
            <NavLink to={`/movies/${movie.id}`}><h1>{movie.original_title}</h1></NavLink>
        </div>
    );
};

export {Movie};