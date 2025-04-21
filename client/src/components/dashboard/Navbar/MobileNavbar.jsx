import React from "react";
import PropTypes from "prop-types";
import UserSection from "./UserSection";
import Button from "../../ui/Button";
import IconButton from "../../ui/IconButton";
import Logo from "../../ui/Logo";
import navigationIcon from "../../../assets/navigation.png";
import { navLinks } from "./NavLinks";

const MobileNavbar = ({ toggleMenu, isCollapse }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-6 pt-2 items-center">
        <Logo className={`h-[30px] flex`} />
        <Button
          className={`w-10 py-1.5`}
          onClick={toggleMenu}
          label={<img src={navigationIcon} alt="Navigation" />}
        />
      </div>
      <nav
        className={`${
          isCollapse ? "-translate-y-[200%]" : "translate-y-0"
        } flex items-center justify-between px-6 pt-4 pb-3 border-b-1 border-gray-300 duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          {navLinks.map(
            (link, index) =>
              !link.isSettingsLink && (
                <IconButton
                  key={index}
                  buttonClassName={`${
                    link.isPrimaryBtn && "bg-orange rounded-xl p-2 py-1.5"
                  } flex flex-col items-center justify-center py-1`}
                  iconClassName="h-6 w-6"
                  pClassName={`${
                    link.isPrimaryBtn && "text-white"
                  } text-xs sm:text-sm font-medium mt-1 text-gray-500 whitespace-nowrap`}
                  icon={link.icon}
                  label={link.label}
                />
              )
          )}
        </div>
        <UserSection isMobile={true}/>
      </nav>
    </div>
  );
};

MobileNavbar.propTypes = {
    toggleMenu: PropTypes.func,
    isCollapse: PropTypes.bool,
};

export default MobileNavbar;
