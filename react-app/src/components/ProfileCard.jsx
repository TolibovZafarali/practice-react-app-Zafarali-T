const ProfileCard = function(props) {

    const { name, age, bio } = props.profile;

    return (
        <div className="Profile">
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Bio: {bio}</li>
            </ul>
        </div>
    );
};

export default ProfileCard;