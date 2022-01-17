import {useEffect, useState} from "react";

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger, rerender, setCars, cars}) => {

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
    }, [trigger])

    const deleteCar = (id) => {
        carService.deleteById(id).then(() => rerender());
    }

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;