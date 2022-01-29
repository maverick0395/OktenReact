import {useDispatch} from "react-redux";

import css from "./Car.module.css"
import {deleteCarThunk, updateCar} from "../../store";

const Car = ({car}) => {
    const dispatch = useDispatch();

    return (
        <div className={css.car_wrap}>
            <div>
                <p>ID: {car.id}</p>
                <p>Model: {car.model}</p>
                <p>Price: {car.price}</p>
                <p>Year: {car.year}</p>
            </div>
            <button onClick={()=> dispatch(deleteCarThunk(car.id))}>Delete</button>
        </div>

    );
};

export {Car};