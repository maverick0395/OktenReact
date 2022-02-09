import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {getMoviesWithActor} from "../../store"
import {Movie} from "../../components/Movie/Movie";

const MoviesWithActor = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {movies, status, error} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    const {state: {id: actorId, name}} = useLocation();

    useEffect(() => {
        dispatch(getMoviesWithActor({actorId, currentPage}));
        window.scrollTo(0, 0);
    }, [currentPage])

    const toNextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const toPrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div>
            <h1>{name}</h1>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <div>
                <button onClick={toPrevPage}>Prev page</button>
                <button onClick={toNextPage}>Next page</button>
            </div>
        </div>
    );
};

export {MoviesWithActor};