import css from "./Album.module.css";
import {useNavigate, useParams} from "react-router-dom";

const Album = ({album}) => {
    const {id, title} = album;
    const navigate = useNavigate();
    const {id: userId} = useParams();


    const showPhotos = (id) => {
        navigate(`/users/${userId}/albums/${id}/photos`)
    }

    return (
        <div className={css.album}>
            <h4>Album ID: {id}</h4>
            <p>Title: {title}</p>
            <button onClick={() => showPhotos(id)}>Show Photos</button>
        </div>
    );
};

export {Album};