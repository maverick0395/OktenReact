import Users from './components/Users/Users';
import {userService} from "./services/user.service";
import './App.css';

import {useState, useEffect} from "react";


const App = () => {
    const [form, setForm] = useState({name:'', username:'', email:''});
    const [users, setUsers] = useState([]);
    const [defaultUsers, setDefaultUsers] = useState([]);

    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value))

    }, []);

   useEffect(()=>{
       userService.getAll()
           .then(value => setDefaultUsers(value))
   }, [])



    const find = (e) => {
        e.preventDefault();

        setUsers(defaultUsers.filter(value => value.name.toLowerCase().includes(form.name.toLowerCase()))
                            .filter(value => value.username.toLowerCase().includes(form.username.toLowerCase()))
                            .filter(value => value.email.toLowerCase().includes(form.email.toLowerCase())));
    }

    const formHandler = (e) => {
        e.preventDefault();
        setForm({...form, [e.target.name]:e.target.value});
    }

    return (
        <div className={'wrapper'}>
            <form onSubmit={find}>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler} /></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler }/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler} /></label>
                <button>Find</button>
            </form>
            <Users users={users}/>
        </div>
    );
};

export default App;





