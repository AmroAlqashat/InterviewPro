import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsCollapse(false);
      } else {
        setIsCollapse(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsCollapse(!isCollapse);
  };

  if (windowWidth >= 1024) 
    return <DesktopNavbar />
   else 
    return <MobileNavbar toggleMenu={toggleMenu} isCollapse={isCollapse}/>
  
};
export default Navbar;
