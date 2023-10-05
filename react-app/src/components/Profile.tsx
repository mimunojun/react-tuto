import "./Profile.css";
import "./Container";

const Profile = (props) => {
    return (
        <div className={`profile ${props.color}`}>
            <h2>PROFILE</h2>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Comment: {props.comment} </h3>
        </div>
    );
};

export default Profile;
