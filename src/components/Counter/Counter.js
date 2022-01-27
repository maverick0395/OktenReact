import css from "./Counter.module.css";

const Counter = ({state, handler}) => {
    const handleClick = (e) => {
        e.preventDefault();
        handler(e.target.value, state.id);
    }


    return (
        <div className={css.wrap}>
            <div>{state.value}</div>
            <button value={'dec'} onClick={(e) => handleClick(e)}>Dec</button>
            <button value={'inc'} onClick={(e) => handleClick(e)}>Inc</button>
            <button value={'res'} onClick={(e) => handleClick(e)}>Reset</button>
        </div>
    );
};

export {Counter};