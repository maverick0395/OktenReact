import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services";
import {Album} from "../";
import css from "./Albums.module.css";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        albumsService.getUserAlbums(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div>
            {albums && (
                <div className={css.right_side}>
                    <div className={css.albums_container}>
                        {albums.map(album => <Album key={album.id} album={album}/>)}
                    </div>
                    <Outlet/>
                </div>
            )}
        </div>

    );
};

export {Albums};