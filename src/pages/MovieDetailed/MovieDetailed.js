import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import StarRatings from "react-star-ratings";

import {getCast, getMovieDetails} from "../../store";
import {bigImageBaseURL} from "../../constants/image.base.url";
import {Actor} from "../../components/Actor/Actor";


const MovieDetailed = () => {
    const {movieDetails, cast, status, error} = useSelector(state => state['movieDetailsReducer']);
    const dispatch = useDispatch();
    const {id: movieId} = useParams();

    useEffect(() => {
        dispatch(getMovieDetails(movieId));
        dispatch(getCast(movieId));
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {movieDetails &&
            <div>
                <img src={`${bigImageBaseURL}${movieDetails.poster_path}`} alt="Movie poster"/>
                <h1>{movieDetails.original_title}</h1>
                <p>{movieDetails.overview}</p>
                <h3>Rating:</h3>
                <StarRatings
                    rating={movieDetails.vote_average}
                    starRatedColor="blue"
                    numberOfStars={10}
                    name='rating'
                />
                <h4>Genres:</h4>
                {movieDetails.genres.map(genre => <NavLink to={`/genres/${genre.id}`} key={genre.id} state={genre}><p>{genre.name}</p></NavLink>)}
                <h4>Main cast:</h4>
                {cast.slice(0,10).map(actor => <Actor key={actor.id} actor={actor}/>)}
            </div>}
        </div>
    );
};

export {MovieDetailed};