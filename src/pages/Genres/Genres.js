import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllGenres} from "../../store";
import {Genre} from "../../components/Genre/Genre";

const Genres = () => {
    const {genres, status, error} = useSelector(state => state['genreReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllGenres());
    }, [])

    return (
        <div>
            <h1>Genres</h1>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};