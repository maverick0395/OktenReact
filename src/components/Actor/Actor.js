import {smallImageBaseURL} from "../../constants/image.base.url";
import {NavLink} from "react-router-dom";

const Actor = ({actor}) => {
    return (
        <div>
            <img src={`${smallImageBaseURL}${actor.profile_path}`} alt={actor.name}/>
            <NavLink to={`/movies/actor/${actor.id}`} state={actor}><h3>{actor.name}</h3></NavLink>
        </div>
    );
};

export {Actor};