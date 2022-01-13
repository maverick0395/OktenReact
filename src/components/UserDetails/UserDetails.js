const UserDetails = ({user, getPosts}) => {

    return (
        <div className={'details'}>
            <div className={'leftSide'}>
                <p>id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address: <br/>
                    <span>Street: {user.address.street}</span><br/>
                    <span>Suite: {user.address.suite}</span><br/>
                    <span>Zipcode: {user.address.zipcode}</span><br/>
                    <span>Geo: <br/>
                    <span>lat: {user.address.geo.lat}</span><br/>
                    <span>lng: {user.address.geo.lng}</span>
                </span>
                </p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: <br/>
                    <span>Name: {user.company.name}</span><br/>
                    <span>catchPhrase: {user.company.catchPhrase}</span><br/>
                    <span>bs: {user.company.bs}</span>
                </p>
            </div>
            <button onClick={()=>getPosts(user.id)}>Get posts</button>
        </div>
    );

};

export default UserDetails;