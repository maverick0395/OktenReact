import {useReducer} from "react";

import {Counter} from "../Counter/Counter";

const reducer = (state, action) => {
    switch (action.type) {
        case 'dec':
            return {...state, [action.id]: {...state[action.id], value: state[action.id].value - 1}}
        case 'inc':
            return {...state, [action.id]: {...state[action.id], value: state[action.id].value + 1}}
        case 'res':
            return {...state, [action.id] : {...state[action.id], value: 0}}
        default:
            throw new Error('Error')
    }
}

const Counters = () => {
    const [state, dispatch] = useReducer(reducer, {
        counter1: {value: 0, id: 1},
        counter2: {value: 0, id: 2},
        counter3: {value: 0, id: 3}
    });

    const onClickHandler = (value, id) => {
        dispatch({type: value, id: id});
    }

    console.log(state);
    return (
        <div>
            <Counter state={state.counter1} handler={onClickHandler}/>
            <Counter state={state.counter2} handler={onClickHandler}/>
            <Counter state={state.counter3} handler={onClickHandler}/>
        </div>
    );
};

export {Counters};