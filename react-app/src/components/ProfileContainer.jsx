import ProfileCard from "./ProfileCard";

const globalProfiles = [
    {
        name: "Alvyn",
        age: 21,
        bio: "Passionate about coding, loves Spotify + VS Code combination."
    },
    {
        name: "Ocnoer",
        age: 19,
        bio: "Loves taking photos of random stuff, does anything for charity."
    }
];

const ProfileContainer = function() {

    return (
        <div>
            <h1>Profiles:</h1>
            
            <ul>
                {globalProfiles.map((profile, index) => (
                    <p key={index}>
                        <ProfileCard profile={profile} />
                    </p>
                ))}
            </ul>
        </div>
    )

}

export default ProfileContainer;