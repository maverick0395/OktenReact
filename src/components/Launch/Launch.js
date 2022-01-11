
const Launch = (props) => {
    const {mission_name, launch_year, mission_patch} = props;


        return (
            <div className={'launch'}>
                <div className={'left-side'}>
                    <h1>{mission_name}</h1>
                    <h4>{launch_year}</h4>
                </div>
                <img src={mission_patch} alt='mission_patch'/>
            </div>
        );
};

export default Launch;