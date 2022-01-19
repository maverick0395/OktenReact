import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {photosService} from "../../services";
import {Photo} from "../";
import css from "./Photos.module.css";

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(() => {
        photosService.getPhotos(albumId).then(value => setPhotos(value))
    }, [albumId])

    return (
        <div className={css.photos}>
            {photos && (
                <div>
                    <div>
                        {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export {Photos};