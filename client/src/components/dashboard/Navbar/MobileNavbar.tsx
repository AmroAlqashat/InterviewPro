import React from "react";
import PropTypes from "prop-types";
import UserSection from "./UserSection";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import { navLinks } from "./NavLinks.jsx";

const MobileNavbar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className="bg-white shadow-sm lg:hidden">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
        <Logo className="h-9" />
        <Button
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-gray-600 rounded transition-all duration-300 ${
                isMenuOpen ? "" : "rotate-45 translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 rounded mt-1 transition-all duration-300 ${
                isMenuOpen ? "" : "opacity-0"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 rounded mt-1 transition-all duration-300 ${
                isMenuOpen ? "" : "-rotate-45 -translate-y-1.5"
              }`}
            ></span>
          </div>
        </Button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        } overflow-hidden`}
      >
        <div className="bg-white">
          <div className="px-4 py-6">
            <ul className="space-y-2">
              {navLinks
                .filter((link) => !link.isSettingsLink)
                .map((link) => (
                  <li key={link.id}>
                    <Button
                      className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 group ${
                        link.isPrimaryBtn
                          ? "bg-blue-50 text-blue-700 shadow"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 mr-3 ${
                          link.isPrimaryBtn
                            ? "text-blue-700"
                            : "text-blue-400 group-hover:text-blue-700"
                        }`}
                      >
                        {link.icon}
                      </span>
                      <span className="truncate">{link.label}</span>
                    </Button>
                  </li>
                ))}
            </ul>
          </div>

          <div className="px-6 py-6 border-t border-gray-100 bg-gray-50">
            <UserSection isMobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

MobileNavbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MobileNavbar;