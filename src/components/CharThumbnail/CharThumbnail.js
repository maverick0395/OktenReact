import {NavLink} from "react-router-dom";

import css from "../../pages/LocationDetails/LocationDetails.module.css";

const CharThumbnail = ({char}) => {
    return (
        <>
            {char.image && <div className={css.char_card}>
                <img src={char.image} alt={char.name}/>
                <NavLink to={`/characters/${char.id}`} state={char}><p>{char.name}</p></NavLink>
            </div>}
        </>
    );
};

export {CharThumbnail};