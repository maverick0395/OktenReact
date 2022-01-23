import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {CharThumbnail} from "../../components";
import {characterService} from "../../services";
import css from "./LocationDetails.module.css";

const LocationDetails = () => {
    const [chars, setChars] = useState([]);
    const {state} = useLocation();
    const ids = [];
    state.residents.map(resident => ids.push(resident.split('/').pop()));

    useEffect(() => {
            characterService.getByArray(ids).then(value => setChars(value))
    }, [])

    console.log(chars);
    return (
        <div>
            <h3>Location: {state.name}</h3>
            <p>Type: {state.type}</p>
            <p>Dimension: {state.dimension}</p>

            <h3>Residents</h3>
            <div className={css.char_list}>
                {chars.length > 1 && chars.map(char => <CharThumbnail key={char.id} char={char}/>)}
                {typeof chars === 'object' && <CharThumbnail key={chars.id} char={chars}/>}
            </div>
        </div>
    );
};

export {LocationDetails};