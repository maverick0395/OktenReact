import {NavLink} from "react-router-dom";

import css from "./Episode.module.css";

const Episode = ({episode}) => {
    return (
        <div className={css.episode_card}>
            <h3>Name: {episode.name}</h3>
            <p>Air date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
            <NavLink to={`/episodes/${episode.id}`} state={episode}>
                <button>Get details</button>
            </NavLink>
            
        </div>
    );
};

export {Episode};