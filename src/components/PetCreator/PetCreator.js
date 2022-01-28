import {useReducer} from "react";

import {Form} from "../Form/Form";
import {Pet} from "../Pet/Pet";
import css from "./PetCreator.module.css";

const reducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return {...state, [action.kind]: [...state[action.kind], action.target]};
        case 'delete':
            return {...state, [action.kind]: state[action.kind].filter(pet => pet !== action.target)};
        default:
            throw new Error('MyError');
    }
}

const PetCreator = () => {
    const [state, dispatch] = useReducer(reducer, {
        dogs: [],
        cats: []
    })

    const onDelete = (pet, kind) => {
        dispatch({type: 'delete', target: pet, kind: kind})
    }

    const onCreate = (value, kind) => {
        dispatch({type: 'create', target: value, kind: kind})
    }

    return (
        <div className={css.page_wrapper}>
            <div className={css.form_wrapper}>
                <Form kind={'dogs'} handler={onCreate}/>
                {state.dogs && state.dogs.map((dog, index) => <Pet key={index} pet={dog} kind={'dogs'}
                                                                   onDelete={onDelete}/>)}
            </div>
            <div className={css.form_wrapper}>
                <Form kind={'cats'} handler={onCreate}/>
                {state.cats && state.cats.map((cat, index) => <Pet key={index} pet={cat} kind={'cats'}
                                                                   onDelete={onDelete}/>)}
            </div>
        </div>
    );
};

export {PetCreator};