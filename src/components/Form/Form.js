import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {imageService} from "../../services/image.service";


const Form = ({onSearchHandler}) => {
    const [form, setForm] = useState(null);
    // const [keyword, setKeyword] = useState(null);

    const formHandler = (e) => {
        e.preventDefault();
        setForm(e.target.value);
    }


    // const findImage = () => {
    //     try {
    //         console.log(form.keyword);
    //         imageService.getByKeyword(form.keyword).then(value => setImage(value));
    //
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // console.log(form.keyword);

    return (
        <div>
            <form onSubmit={(e) => onSearchHandler(form, e)}>
                <input type="text" placeholder={"type your keyword"} onChange={formHandler}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default Form;