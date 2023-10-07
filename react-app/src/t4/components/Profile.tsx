const Profile = (props) => {
    return (
        <>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
            <div>
                Hobby:{" "}
                <ul>
                    {props.hobbies.map((val) => (
                        <li key={val}>{val}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Profile;
