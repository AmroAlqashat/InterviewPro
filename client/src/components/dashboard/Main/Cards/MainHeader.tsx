import { React } from "react";
import defaultProfilePic from "../../../../assets/profilePicture.png";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 xs:p-6 sm:p-8 lg:p-10">
      <div>
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-semibold">Amro Alqashat</h1>
        <h2 className="text-sm xs:text-base lg:text-lg text-gray-600">Web Developer</h2>
      </div>
      <div>
        <img className="w-10 xs:w-12 sm:w-14 lg:w-16 rounded-full" src={defaultProfilePic} alt="Profile"></img>
      </div>
    </div>
  );
};

export default MainHeader;
