import React from "react";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import logoutIcon from "../../../assets/logout.png";
import defaultProfilePic from "../../../assets/profilePicture.png";
import ProfilePicture from "../../ui/ProfilePicture";
import settingsIcon from "../../../assets/settingsIcon.png";

const UserSection = ({ userProfilePic, isMobile }) => {
  return (
    <div
      className={`flex ${isMobile ? "flex" : "flex-col"} items-center gap-0.5`}
    >
      <Button
        label={
          <ProfilePicture
            className={`${isMobile ? "h-18" : "h-21"} py-1.5`}
            profilePicture={userProfilePic || defaultProfilePic}
          />
        }
      />
      <div className={`${isMobile && "pl-6"}`}>
        <div className={`${isMobile && "flex-col"}`}>
          <p className="font-semibold">Amro Alqashat</p>
          <p className="text-xs text-gray-500 text-center">amro@gmail.com</p>
        </div>
        <div className={`flex gap-4 ${isMobile ? "justify-end" : "justify-center"}`}>
          {isMobile && (
            <Button
              className={`${!isMobile && "mt-4"} w-5 py-1.5`}
              label={<img src={settingsIcon} alt="Settings" />}
            />
          )}
          <Button
            className={`${!isMobile && "mt-4"} w-5 py-1.5`}
            label={<img src={logoutIcon} alt="Logout" />}
          />
        </div>
      </div>
    </div>
  );
};

UserSection.propTypes = {
  userProfilePic: PropTypes.string,
  isMobile: PropTypes.bool,
};

export default UserSection;
