import {NavLink, useLocation} from "react-router-dom";

import css from "./CharDetails.module.css";

const CharDetails = () => {
    const {state} = useLocation();

    return (
        <>
            <div className={css.char_details}>
                <img src={state.image} alt={state.name}/>
                <h3>{state.name}</h3>
                <p>Status: {state.status}</p>
                <p>Species: {state.species}</p>
                {state.type ? <p>Type: {state.type}</p> : null}
                <p>Gender: {state.gender}</p>
                <p>Location: <NavLink
                    to={`/locations/${state.location.url.split('/').pop()}`} state={state}>{state.location.name}</NavLink>
                </p>
            </div>
            <p>Episodes</p>
            <ul className={css.episode_list}>{state.episode.map(ep => <NavLink
                to={`/episodes/${ep.split('/').pop()}`} key={ep.split('/').pop()}>
                <li>Episode {ep.split('/').pop()}</li>
            </NavLink>)}</ul>
        </>
    );
};

export {CharDetails};