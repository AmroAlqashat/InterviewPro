import React from "react";
import PropTypes from "prop-types";

const ProfilePicture = ({ profilePicture, className }) => {
    return(
        <img src={profilePicture} className={`rounded-4xl ${className}`}></img>
    )
}

ProfilePicture.propTypes = {
    profilePicture: PropTypes.string,
    className: PropTypes.string,
}
export default ProfilePicture;