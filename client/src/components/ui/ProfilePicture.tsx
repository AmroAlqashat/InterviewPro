interface ProfilePictureProps {
  profilePicture: string;
  className: string;
}

const ProfilePicture = ({ profilePicture, className }: ProfilePictureProps) => {
    return(
        <img src={profilePicture} className={`rounded-4xl ${className}`}></img>
    )
}

export default ProfilePicture;