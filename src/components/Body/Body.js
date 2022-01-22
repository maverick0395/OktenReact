import baseUrl from "../../configs/urls";
import {useEffect, useState} from "react";
import {imageService} from "../../services/image.service";


const Body = (state) => {
    const [url, setUrl] = useState(null)
    const [update, setUpdate] = useState(0)

    useEffect(() => {
        if (state.keyword) {
            setUrl(`${baseUrl}/${state.keyword}`)
        }
    }, [state], [update])

    const updateImage = (url, e) => {
        e.preventDefault();
        setUpdate(update + 1);
        console.log(update);
    }
    return (
        <div>
            {url && <img src={url} alt={state}/>}
            {url && <button onClick={(e) => updateImage(url, e)}>Reload</button>}
        </div>
    );
};

export default Body;