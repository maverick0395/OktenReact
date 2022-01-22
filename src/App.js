import {useState} from "react";

import {Header, Body} from "./components";


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