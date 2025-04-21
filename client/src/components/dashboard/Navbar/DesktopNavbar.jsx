import React from "react";
import IconButton from "../../ui/IconButton";
import Logo from "../../ui/Logo";
import UserSection from "./UserSection";
import { navLinks } from "./NavLinks";

const DesktopNavbar = () => {
  return (
    <nav
      className={
        "flex flex-col justify-between py-8 h-screen 2xl:w-[13%] w-[17%] items-center border-r border-gray-300"
      }
    >
      <div className="flex flex-col h-[55%] justify-between w-full">
        <Logo className="exo-2-logo flex items-center cursor-pointer h-[27px] pl-6" />
        <div className="flex flex-col items-start gap-8">
          {navLinks.map((link, index) => (
            <IconButton
              key={index}
              buttonClassName={`${link.isPrimaryBtn && "bg-orange"} group justify-start py-1.5 w-full hover:bg-orange hover:pl-1 rounded-r-2xl hover:text-white`}
              iconClassName={`h-5 pl-6`}
              pClassName={`${link.isPrimaryBtn && "text-white"} text-[1.1rem] text-gray-600 group-hover:text-white pl-4`}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
      </div>
          <UserSection isMobile={false}/>
    </nav>
  );
};

export default DesktopNavbar;
