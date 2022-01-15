import Users from './components/Users/Users';
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {userService} from "./services/user.service";
import {postService} from "./services/post.service";
import './App.css';

import {useState, useEffect} from "react";


const App = () => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [userPosts, setUserPosts] = useState([])

    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value))

    }, []);

    useEffect(()=>{
        postService.getAll()
            .then(value => setPosts(value))
    }, [])

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value))

        setUserPosts([]);

    }

    const getUserPosts = (id) => {
        postService.getUserPosts(id)
            .then(value => setUserPosts(value))
    }

    return (
        <div className={'wrapper'}>
            <Users getUserId={getUserId} users={users}/>
            {user && <UserDetails user={user} getUserPosts={getUserPosts}/>}
            {userPosts && <Posts posts={userPosts}/>}
        </div>
    );
};

export default App;





