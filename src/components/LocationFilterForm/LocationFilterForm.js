import {useState} from "react";

import css from "../CharFilterForm/CharFilterForm.module.css";
import {locationService} from "../../services";
import {formQuery} from "../../utils/helpers";

const LocationFilterForm = ({onFilterHandler}) => {
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        const filterParams = [];
        for (let i = 0; i < 3; i++) {
            if (e.target[i].value) {
                filterParams.push([e.target[i].name, e.target[i].value])
            }
        }
        filterRequest(formQuery(filterParams));
    }

    const filterRequest = (query) => {
        locationService.getByFilterQuery(query)
            .then(value => onFilterHandler(value.results))
            .catch(error => {
                console.log(error);
                setError(true);
            });
    }

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit}>
                <label>Name <input type="text" name="name"/></label>
                <label>Type <input type="text" name="type"/></label>
                <label>Dimension <input type="text" name="dimension"/></label>
                <button>Filter</button>
            </form>
            {error && <p className={css.red}>Anything satisfies your request</p>}
        </div>
    );
};

export {LocationFilterForm};