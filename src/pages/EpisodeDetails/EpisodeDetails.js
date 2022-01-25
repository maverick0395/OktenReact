import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {characterService, episodeService} from "../../services";
import {CharThumbnail} from "../../components";
import css from "./EpisodeDetails.module.css";

const EpisodeDetails = () => {
    const {id} = useParams();
    const [state, setState] = useState({});
    const [epChars, setEpChars] = useState([]);

    async function getInitialData() {
        const episodeServiceData = await episodeService.getById(id);
        setState(episodeServiceData);

        const charsId = episodeServiceData.characters.map(char => parseInt(char.split('/').pop()))

        const charsData = await characterService.getByArray(charsId);
        setEpChars(charsData);
    }

    useEffect(() => {
        getInitialData();
    }, [])

    return (
        <>
            <div className={css.ep_details}>
                <h3>Episode name: {state.name}</h3>
                <p>Air date: {state.air_date}</p>
                <p>Episode: {state.episode}</p>
                <p>Characters</p>
                <div className={css.char_list}>
                    {epChars && epChars.map(epChar => <CharThumbnail key={epChar.id} char={epChar}/>)}
                </div>
            </div>
        </>
    );
};

export {EpisodeDetails};