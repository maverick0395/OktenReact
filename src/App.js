import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {carService} from "./services/car.service";
import css from './App.module.css'

import {useState} from "react";

const App = () => {
    const [trigger, setTrigger] = useState(null);

    const create = data => {
        setTrigger(data);
    }

    const update = (id, data) => {
        carService.updateById(id, data).then(() => console.log('updated'));
    }

    return (
        <div>
            <div className={css.forms}>
                <Form handler={create} formType={'create'}/>
                <Form handler={update} formType={'update'}/>
            </div>
            <Cars trigger={trigger}/>

        </div>
    );
};

export default App;