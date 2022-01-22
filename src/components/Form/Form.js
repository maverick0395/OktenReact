import {useState} from "react";

const Form = ({onSearchHandler}) => {
    const [form, setForm] = useState(null);

    const formHandler = (e) => {
        e.preventDefault();
        setForm(e.target.value);
    }

    return (
        <div>
            <form onSubmit={(e) => onSearchHandler(form, e)}>
                <input type="text" placeholder={"type your keyword"} onChange={formHandler}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export {Form};