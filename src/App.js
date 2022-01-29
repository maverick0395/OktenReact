import {Form} from "./components/Form/Form";
import {Cars} from "./components/Cars/Cars";
import css from "./App.module.css";

function App() {

    return (
        <>
            <div className={css.forms}>
                <Form formType={'create'}/>
                <Form formType={'update'}/>
            </div>
            <Cars/>
        </>
    );
}

export default App;