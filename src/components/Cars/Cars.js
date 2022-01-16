import {useEffect, useState} from "react";

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger, updateTrigger, setCars, cars}) => {


    useEffect(()=>{
        carService.getAll().then(value => setCars([...value]));
    }, [trigger, updateTrigger])

    const rerender = () => {
        carService.getAll().then(value => setCars([...value]));
    }

    const deleteCar = (id) => {
        carService.deleteById(id).then(()=>rerender());
    }

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;