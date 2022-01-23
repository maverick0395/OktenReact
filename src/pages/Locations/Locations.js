import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {locationService} from "../../services";
import {Location} from "../../components";
import css from "./Locations.module.css";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        locationService.getAll().then(value => (setLocations(value.results), setInfo(value.info)))
    },[]);

    const renderPage = (e) => {
        if (info[e.target.value]) {
            locationService.getByPage(info[e.target.value]).then(value => (setLocations(value.results), setInfo(value.info)))
        }
    }
    return (
        <div>
            <div className={css.locations_grid}>
                {locations && locations.map(location => <Location key={location.id} location={location}/>)}
            </div>
            <div className={css.buttons_wrapper}>
                <input type={'button'} value={'prev'} onClick={(e) => renderPage(e)}/>
                <input type={'button'} value={'next'} onClick={(e) => renderPage(e)}/>
            </div>
            <Outlet/>
        </div>
    );
};

export {Locations};