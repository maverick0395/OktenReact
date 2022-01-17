import {useForm} from "react-hook-form";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";
import css from "./Form.module.css";

const Form = ({handler, formType, rerender}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});

    const submit = async (data) => {
        try {
            if (formType === 'create') {
                const newCar = await carService.create(data);
                handler(newCar);
            } else if (formType === 'update') {
                const updatedCar = await carService.updateById(data.id, data).then(() => console.log('updated'));
                rerender();
            }
        } catch (error) {
            setFormError(error.response.data);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)} >
                {formType === 'update' &&
                <div><label>id: <input type="number" defaultValue={''} {...register('id')} /></label></div>}
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')} /></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="number" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="number" defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>{formType}</button>
            </form>
        </div>
    );
};

export default Form;