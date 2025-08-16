import React from "react";
import Interviews from "./Cards/Interviews";
import MainHeader from "./Cards/MainHeader";
import ViewCV from "./Cards/ViewCV";
import ViewCareer from "./Cards/ViewCareer";

function Main() {
  return (
    <div className="flex flex-col h-screen lg:h-screen flex-1 overflow-hidden">
      <MainHeader />
      <div className="flex-1 flex flex-col lg:flex-row px-2 xs:px-4 sm:px-6 lg:px-10 pb-2 xs:pb-4 sm:pb-6 lg:pb-10 gap-2 xs:gap-4 sm:gap-6 min-h-0">
        {/* Left Column - Cards */}
        <div className="flex flex-col lg:w-1/3 gap-2 xs:gap-4 sm:gap-4 min-h-0 lg:min-h-full order-2 lg:order-1">
          <ViewCV className="flex-1 lg:flex-1" />
          <ViewCareer className="flex-1 lg:flex-1" />
        </div>
        
        {/* Right Column - Interviews */}
        <div className="flex-1 lg:w-2/3 min-h-0 lg:min-h-full order-1 lg:order-2">
          <Interviews/>
        </div>
      </div>
    </div>
  );
}

export default Main;