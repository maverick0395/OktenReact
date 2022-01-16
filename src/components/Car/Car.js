import css from "./Car.module.css";

const Car = ({car:{id, model, price, year}, deleteCar}) => {

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>deleteCar(id)}>Delete</button>
        </div>
    );
};

export default Car;