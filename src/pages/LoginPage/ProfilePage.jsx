import profileImg from '../../../public/profile.jpg';
export function ProfilPage({username}) {
    return (
        <div className="profile-container">
            <img className="profile-img" src={profileImg} alt="Profile" />
            <div className="username">{username}</div>
        </div>
    )
}