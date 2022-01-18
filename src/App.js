import {Routes, Route} from "react-router-dom";

import {Home, Posts, Users} from "./pages/index"
import {Header, UserDetails, UserPosts, PostDetails, PostComments} from "./components/index";

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