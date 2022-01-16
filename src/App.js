import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {carService} from "./services/car.service";
import css from './App.module.css'

import {useState} from "react";

const App = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const[updateTrigger, setUpdateTrigger] = useState(null);

    const create = data => {
        setTrigger(data);
    }

    const update = (data) => {
        setUpdateTrigger(data);
    }

    return (
        <div>
            <div className={css.forms}>
                <Form handler={create} formType={'create'}/>
                <Form handler={update} formType={'update'}/>
            </div>
            <Cars trigger={trigger} updateTrigger={updateTrigger} setCars={setCars} cars={cars}/>

        </div>
    );
};

export default App;