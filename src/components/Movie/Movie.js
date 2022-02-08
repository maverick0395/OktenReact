import {smallImageBaseURL} from "../../constants/image.base.url";

const Movie = ({movie}) => {
    return (
        <div>
            <img src={`${smallImageBaseURL}${movie.poster_path}`} alt={movie.original_title}/>
            <h1>Title: {movie.original_title}</h1>
        </div>
    );
};

export {Movie};