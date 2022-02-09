import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Movies} from "./pages/Movies/Movies";
import {Genres} from "./pages/Genres/Genres";
import {MovieDetailed} from "./pages/MovieDetailed/MovieDetailed";
import {MoviesByGenre} from "./pages/MoviesByGenre/MoviesByGenre";
import {MoviesWithActor} from "./pages/MoviesWithActor/MoviesWithActor";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'/movies'} element={<Movies/>}/>
                    <Route path={'/movies/:id'} element={<MovieDetailed/>}/>
                    <Route path={'/movies/actor/:actorId'} element={<MoviesWithActor/>}/>
                    <Route path={'/genres'} element={<Genres/>}/>
                    <Route path={'/genres/:genreId'} element={<MoviesByGenre/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;