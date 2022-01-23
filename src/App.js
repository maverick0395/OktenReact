import {Route, Routes} from "react-router-dom";

import {Header} from "./components";
import {Characters, CharDetails, Episodes, Home, Locations, LocationDetails, Search} from "./pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'characters'} element={<Characters/>}/>
                    <Route path={'characters/:id'} element={<CharDetails/>}/>
                    <Route path={'locations'} element={<Locations/>}/>
                    <Route path={'locations/:id'} element={<LocationDetails/>}/>

                    <Route path={'episodes'} element={<Episodes/>}/>
                    <Route path={'search'} element={<Search/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;