import {useReducer} from "react";
import {Counter} from "../Counter/Counter";

const reducer = (state, action) => {
    switch (action.id) {
        case 1:
            switch (action.type) {
                case 'dec':
                    return {...state, counter1: {...state.counter1, value: state.counter1.value - 1}}
                case 'inc':
                    return {...state, counter1: {...state.counter1, value: state.counter1.value + 1}}
                case 'res':
                    return {...state, counter1: {...state.counter1, value: 0}}
                default:
                    throw new Error('Error')
            }
        case 2:
            switch (action.type) {
                case 'dec':
                    return {...state, counter2: {...state.counter2, value: state.counter2.value - 1}}
                case 'inc':
                    return {...state, counter2: {...state.counter2, value: state.counter2.value + 1}}
                case 'res':
                    return {...state, counter2: {...state.counter2, value: 0}}
                default:
                    throw new Error('Error')
            }
        case 3:
            switch (action.type) {
                case 'dec':
                    return {...state, counter3: {...state.counter3, value: state.counter3.value - 1}}
                case 'inc':
                    return {...state, counter3: {...state.counter3, value: state.counter3.value + 1}}
                case 'res':
                    return {...state, counter3: {...state.counter3, value: 0}}
                default:
                    throw new Error('Error')
            }
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


    return (
        <div>
            <Counter state={state.counter1} handler={onClickHandler}/>
            <Counter state={state.counter2} handler={onClickHandler}/>
            <Counter state={state.counter3} handler={onClickHandler}/>
        </div>
    );
};

export {Counters};