const Form = ({kind, handler}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        handler(e.target[0].value, kind);
        e.target[0].value = '';
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <label>Add {kind}<input name={"name"} type="text"/></label>
                <button>Add</button>
            </form>
        </div>
    );
};

export {Form};