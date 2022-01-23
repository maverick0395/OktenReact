import css from "../../pages/LocationDetails/LocationDetails.module.css";
import {NavLink} from "react-router-dom";

const CharThumbnail = ({char}) => {
    return (
            <div className={css.char_card}>
                <img src={char.image} alt={char.name} />
                <NavLink to={`/characters/${char.id}`} state={char}><p>{char.name}</p></NavLink>
            </div>
    );
};

export {CharThumbnail};