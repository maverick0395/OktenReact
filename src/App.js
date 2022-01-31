import {Routes, Route} from "react-router-dom";

import {Header} from "./components";
import {CarsPage, CommentsPage, Home, PostsPage, UsersPage} from "./pages";



function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;