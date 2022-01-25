import {NavLink} from "react-router-dom";

import css from "./Character.module.css";

const Character = ({char}) => {
    return (
        <div>
            <img src={char.image} alt={char.name}/>
            <div className={css.char_info}>
                <h3>{char.name}</h3>
                <p>Status: <span className={char.status === 'Alive' ? css.alive : css.dead}>{char.status}</span></p>
                <p>Species: {char.species}</p>
                {char.type ? <p>Type: {char.type}</p> : null}
                <p>Location: <NavLink
                    to={`/locations/${char.location.url.split('/').pop()}`} state={char}>{char.location.name}</NavLink>
                </p>
                <NavLink to={`/characters/${char.id}`} state={char}>
                    <button>Get details</button>
                </NavLink>
            </div>
        </div>
    );
};

export {Character};