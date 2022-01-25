import {useState} from "react";

import {formQuery} from "../../utils/helpers";
import {characterService} from "../../services";
import css from "./CharFilterForm.module.css";

const CharFilterForm = ({onFilterHandler}) => {
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        const filterParams = [];
        for (let i = 0; i < 5; i++) {
            if (e.target[i].value) {
                filterParams.push([e.target[i].name, e.target[i].value])
            }
        }
        filterRequest(formQuery(filterParams));
    }

    const filterRequest = (query) => {
        characterService.getByFilterQuery(query)
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
                <label htmlFor="status">Status</label>
                <select id="status" name="status" defaultValue={""}>
                    <option value="">Any</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <label>Species <input type="text" name="species"/></label>
                <label>Type <input type="text" name="type"/></label>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" defaultValue={""}>
                    <option value="">Any</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
                <button>Filter</button>
            </form>
            {error && <p className={css.red}>Anything satisfies your request</p>}
        </div>
    );
};

export {CharFilterForm};