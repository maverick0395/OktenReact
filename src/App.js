import {Routes, Route} from "react-router-dom";

import {Home, Posts, Users} from "./pages";
import {Header, UserDetails, UserPosts, PostDetails, PostComments, Albums, Photos} from "./components";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':albumId/photos'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<PostComments/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </>

    );
}

export default App;