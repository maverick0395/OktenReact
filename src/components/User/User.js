import css from "./User.module.css";

const User = ({user}) => {
    return (
        <div className={css.user_wrapper}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export {User};