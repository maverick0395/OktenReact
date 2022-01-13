
const User = ({user:{id, name, email}, getUserId}) => {

    return (
        <div className={'user'}>
            {id}--{name}--{email}
            <button onClick={()=>getUserId(id)}>getDetails</button>
        </div>
    );
};

export default User;