import React from "react";
import DesktopSettingsSVG from "../../ui/icons/DesktopSettingsSVG";
import CareersSVG from "../../ui/icons/CareersSVG";
import CVManagerSVG from "../../ui/icons/CVManagerSVG";
import CheckSVG from "../../ui/icons/CheckSVG";
import DashboardSVG from "../../ui/icons/DashboardSVG";

export const navLinks = [
  {
    id: "dashboard",
    label: "Dashboard",
    isPrimaryBtn: true,
    isSettingsLink: false,
    icon: (
      <DashboardSVG className="w-5 h-5" fillColor="currentColor" />
    ),
  },
  {
    id: "mock-interview",
    label: "Mock Interview",
    isPrimaryBtn: false,
    isSettingsLink: false,
    icon: <CheckSVG className="w-5 h-5" fillColor="currentColor" />,
  },
  {
    id: "cv-manager",
    label: "CV Manager",
    isPrimaryBtn: false,
    isSettingsLink: false,
    icon: <CVManagerSVG className="w-5 h-5" fillColor="currentColor" />,
  },
  {
    id: "careers",
    label: "My Careers",
    isPrimaryBtn: false,
    isSettingsLink: false,
    icon: <CareersSVG className="w-5 h-5" fillColor="currentColor" />,
  },
  {
    id: "settings",
    label: "Settings",
    isPrimaryBtn: false,
    isSettingsLink: true,
    icon: <DesktopSettingsSVG className="w-5 h-5" fillColor="currentColor" />,
  },
];
