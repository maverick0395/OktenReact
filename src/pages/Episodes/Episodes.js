import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Episode} from "../../components";
import {episodeService} from "../../services";
import css from "./Episodes.module.css";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        episodeService.getAll().then(value => (setEpisodes(value.results), setInfo(value.info)));
    }, []);

    const renderPage = (e) => {
        if (info[e.target.value]) {
            episodeService.getByPage(info[e.target.value]).then(value => (setEpisodes(value.results), setInfo(value.info)));
        }
    }
    return (
        <div>
            <div className={css.episodes_grid}>
                {episodes && episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons_wrapper}>
                <input type="button" value={'prev'} onClick={(e) => renderPage(e)}/>
                <input type="button" value={'next'} onClick={(e) => renderPage(e)}/>
            </div>
            <Outlet/>
        </div>
    );
};

export {Episodes};