import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Movies} from "./pages/Movies/Movies";
import {Genres} from "./pages/Genres/Genres";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index path={'/movies'} element={<Movies/>}/>
                    <Route path={'/genres'} element={<Genres/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;