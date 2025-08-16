import React from "react";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import defaultProfilePic from "../../../assets/profilePicture.png";
import LogoutSVG from "../../ui/icons/LogoutSVG";
import MobileSettingsSVG from "../../ui/icons/MobileSettingsSVG";

const UserSection = ({ userProfilePic, isMobile }) => {
  return (
    <div
      className={`flex ${
        isMobile ? "items-center space-x-3" : "flex-col items-center space-y-3"
      }`}
    >
      <div className="relative">
        <img
          src={userProfilePic || defaultProfilePic}
          alt="Profile"
          className={`${
            isMobile ? "w-12 h-12" : "w-16 h-16"
          } rounded-full object-cover border-2 border-gray-200`}
        />
      </div>

      <div className={`${isMobile ? "flex-1 min-w-0" : "text-center"}`}>
        <p
          className={`font-semibold text-gray-900 ${
            isMobile ? "text-sm" : "text-sm"
          } truncate`}
        >
          Amro Alqashat
        </p>
        <p className={`text-xs text-gray-500 ${isMobile ? "truncate" : ""}`}>
          amro@gmail.com
        </p>
      </div>

      <div className={`flex ${isMobile ? "space-x-2" : "space-x-2 mt-2"}`}>
        {isMobile && (
          <Button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <MobileSettingsSVG className="w-4 h-4" fillColor="currentColor" />
          </Button>
        )}

        <Button className="p-2 cursor-pointer text-gray-500 rounded-lg transition-colors">
          <LogoutSVG className="w-4 h-4 text-black hover:text-red-500 duration-150"/>
        </Button>
      </div>
    </div>
  );
};

UserSection.propTypes = {
  userProfilePic: PropTypes.string,
  isMobile: PropTypes.bool,
};

export default UserSection;
