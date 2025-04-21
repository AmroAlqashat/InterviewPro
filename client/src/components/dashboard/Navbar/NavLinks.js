import dashboardIcon from "../../../assets/dashboardIcon.png";
import settingsIcon from "../../../assets/settingsIcon.png";
import myCareersIcon from "../../../assets/myCareersIcon.png";
import mockInterviewIcon from "../../../assets/mockInterviewIcon.png";
import CvManagerIcon from "../../../assets/cvManagerIcon.png";

export const navLinks = [
    {icon: dashboardIcon, label: "Dashboard", isPrimaryBtn: true, isSettingsLink: false},
    {icon: mockInterviewIcon, label: "Mock Interview", isPrimaryBtn: false, isSettingsLink: false},
    {icon: CvManagerIcon, label: "CV Manager", isPrimaryBtn: false, isSettingsLink: false},
    {icon: myCareersIcon, label: "My Careers", isPrimaryBtn: false, isSettingsLink: false},
    {icon: settingsIcon, label: "Settings", isPrimaryBtn: false, isSettingsLink: true},
];

