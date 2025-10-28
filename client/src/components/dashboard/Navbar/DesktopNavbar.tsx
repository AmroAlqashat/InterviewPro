import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import UserSection from "./UserSection";
import { navLinks } from "./NavLinks.jsx";

const DesktopNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(
    navLinks.find(link => link.path === location.pathname)?.id || "dashboard"
  );

  const handleNavigation = (link: any) => {
    setActiveTab(link.id);
    navigate(link.path);
  };

  return (
    <nav className="hidden lg:flex flex-col lg:w-58 xl:w-64 h-screen bg-white border-r border-gray-200 shadow-sm">
      <div className="px-4 lg:px-6 xl:px-8 py-4 lg:py-5 xl:py-6 border-b border-gray-100">
        <Logo className="h-8 lg:h-9" />
      </div>
      <div className="flex-1 px-3 lg:px-4 pt-8 lg:pt-12 xl:pt-16 overflow-y-auto">
        <ul className="space-y-1 lg:space-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Button
                onClick={() => handleNavigation(link)}
                className={`w-full flex items-center px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg font-medium transition-all duration-200 group text-sm lg:text-base ${
                  activeTab === link.id
                    ? "bg-blue-50 text-blue-700 shadow"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                }`}
              >
                <span className={`w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 ${activeTab === link.id ? "text-blue-700" : "text-blue-400 group-hover:text-blue-700"}`}>
                  {link.icon}
                </span>
                <span className="truncate">{link.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 lg:px-6 py-4 lg:py-6 border-t border-gray-100 bg-gray-50">
        <UserSection isMobile={false} />
      </div>
    </nav>
  );
};

export default DesktopNavbar;