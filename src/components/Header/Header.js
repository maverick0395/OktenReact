import {Form} from "../";
import css from "./Header.module.css";


const Header = ({onSearchHandler}) => {
    return (
        <div className={css.header}>
            <h1>Find an image by typing a keyword</h1>
            <Form onSearchHandler={onSearchHandler}/>
        </div>
    );
};

export {Header};