import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar, updateCarThunk} from "../../store";
import css from "./Form.module.css";

const Form = ({formType}) => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        if (formType === 'create') {
            dispatch(createCar({data}));
            reset();
        } else if (formType === 'update') {
            dispatch(updateCarThunk({data}));
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={css.form}>
            {formType === 'update' && <label>ID: <input type="number" {...register('id')}/></label>}
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="number" {...register('price')}/></label>
            <label>Year: <input type="number" {...register('year')}/></label>
            <button>{formType === 'create' ? 'Create': 'Update'}</button>
        </form>
    );
};

export {Form};