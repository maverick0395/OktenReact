import css from "./Home.module.css";

const Home = () => {
    return (
        <div className={css.banner}>
            Welcome to the Rick&Morty Database!
        </div>
    );
};

export {Home};