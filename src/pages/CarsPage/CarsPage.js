import {Cars, Form} from "../../components";
import css from "./CarsPage.module.css";

const CarsPage = () => {
    return (
        <div>
            <div className={css.forms}>
                <Form formType={'create'}/>
                <Form formType={'update'}/>
            </div>
            <Cars/>
        </div>
    );
};

export {CarsPage};