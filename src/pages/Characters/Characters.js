import {useEffect, useState} from "react";

import {characterService} from "../../services";
import {Character} from "../../components";
import css from "./Characters.module.css";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        characterService.getAll().then(value => (setCharacters(value.results), setInfo(value.info)))
    }, []);

    const renderPage = (e) => {
        if (info[e.target.value]) {
            characterService.getByPage(info[e.target.value]).then(value => (setCharacters(value.results), setInfo(value.info)))
        }
    }

    return (
        <>
            <div className={css.characters_grid}>
                {characters && characters.map(char => <Character key={char.id} char={char}/>)}
            </div>
            <div className={css.buttons_wrapper}>
                <input type={'button'} value={'prev'} onClick={(e) => renderPage(e)}/>
                <input type={'button'} value={'next'} onClick={(e) => renderPage(e)}/>
            </div>
        </>
    );
};

export {Characters};