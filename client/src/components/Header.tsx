import React from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

interface HeaderProps {
  formVisibility: () => void;
}

function Header({ formVisibility }: HeaderProps): React.ReactElement {
  return (
    <div className="container flex items-center justify-between px-4 my-6 mx-auto">
      <Logo className="exo-2-logo flex items-center cursor-pointer h-[27px] w-auto" />

      <div className="hidden lg:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
        <Button className="btn home-btn rounded-4xl py-1.5" label="Home" to="/" />
        <a
          className="btn rounded-4xl hover:text-gray-500 active:text-gray-400 px-4"
          href="#howItWorks"
        >
          How It Works
        </a>
        <a
          className="btn rounded-4xl hover:text-gray-500 active:text-gray-400 px-4"
          href="#features"
        >
          Features
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          className="btn rounded-4xl bg-blue-500 text-gray-100 hover:opacity-80 active:opacity-70 px-4 py-1.5"
          label="Sign Up"
          onClick={formVisibility}
        />
      </div>
    </div>
  );
}

export default Header;
