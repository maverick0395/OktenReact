import axios from "axios";
import {useEffect, useState} from "react";

import baseUrl from "../../configs/urls";
import css from "./Body.module.css";

const Body = (state) => {
    const [url, setUrl] = useState(null)
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        if (state.keyword) {
            axios.get(`${baseUrl}/${state.keyword}`).then(value => setUrl(value.request.responseURL))
        }
    }, [update, state.keyword])

    const forceUpdate = (e) => {
        e.preventDefault();
        setUpdate(update + 1);
    }
    return (
        <div>
            {url &&
            <div className={css.wrapper}>
                <img src={url} alt={state}/>
                <button onClick={(e) => forceUpdate(e)}>Reload</button>
            </div>
            }
        </div>
    );
};

export {Body};