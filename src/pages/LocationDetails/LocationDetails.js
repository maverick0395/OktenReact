import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {CharThumbnail} from "../../components";
import {characterService, locationService} from "../../services";
import css from "./LocationDetails.module.css";

const LocationDetails = () => {
    const {id} = useParams();
    const [state, setState] = useState({});
    const [chars, setChars] = useState([]);

    async function getInitialData() {
        const locationServiceData = await locationService.getById(id);
        setState(locationServiceData);

        const residents = locationServiceData.residents.map(resident => parseInt(resident.split('/').pop()));

        const characterServiceData = await characterService.getByArray(residents);
        setChars(characterServiceData);
    }

    useEffect(() => {
        getInitialData();
    }, []);

    return (
        <div>
            <h3>Location: {state.name}</h3>
            <p>Type: {state.type}</p>
            <p>Dimension: {state.dimension}</p>

            <h3>Residents</h3>
            <div className={css.char_list}>
                {chars.length > 1 ? chars.map(char => <CharThumbnail key={char.id} char={char}/>) :
                    <CharThumbnail key={chars.id} char={chars}/>}
            </div>
        </div>
    );
};

export {LocationDetails};