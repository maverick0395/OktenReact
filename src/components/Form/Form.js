import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCarThunk} from "../../store";
import {carValidator} from "../../validators/car.validator";
import css from "./Form.module.css";

const Form = ({formType}) => {
    const {
        handleSubmit, register, reset, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"})

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
            {errors.id && <span>{errors.id.message}</span>}
            <label>Model: <input type="text" {...register('model')}/></label>
            {errors.model && <span>{errors.model.message}</span>}
            <label>Price: <input type="number" {...register('price')}/></label>
            {errors.price && <span>{errors.price.message}</span>}
            <label>Year: <input type="number" {...register('year')}/></label>
            {errors.year && <span>{errors.year.message}</span>}
            <button>{formType === 'create' ? 'Create': 'Update'}</button>
        </form>
    );
};

export {Form};