const Pet = ({pet, kind, onDelete}) => {
    const deleteHandler = (e) => {
        e.preventDefault();
        onDelete(pet, kind);
    }

    return (
        <div>
            <p>{pet}</p>
            <button onClick={(e) => deleteHandler(e)}>Delete</button>
        </div>
    );
};

export {Pet};