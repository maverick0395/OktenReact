import css from "./Photo.module.css";

const Photo = ({photo}) => {
    const {id, title, thumbnailUrl} = photo;

    return (
        <div className={css.photo}>
            <h4>ID: {id}</h4>
            <h4>Title: {title}</h4>
            <img src={thumbnailUrl} alt="user photo"/>
        </div>
    );
};

export {Photo};