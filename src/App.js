import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import {useState} from "react";
import Body from "./components/Body/Body";


function App() {
    const [state, setState] = useState(null);

    const onSearchHandler = (input, e) => {
        e.preventDefault();
        setState(input);
    }
    return (
        <>
            <Header onSearchHandler={onSearchHandler}/>
            <Body keyword={state}/>
        </>
    );
}

export default App;