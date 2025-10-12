
import React, { useState } from "react";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import DropdownMenu from "../../../ui/DropdownMenu";
import EmptyPageSVG from "../../../ui/icons/EmptyPageSVG";
import ClockSVG from "../../../ui/icons/ClockSVG";
import StarSVG from "../../../ui/icons/StarSVG";
import DateSVG from "../../../ui/icons/DateSVG";
import OpenEyeSVG from "../../../ui/icons/OpenEyeSVG";
import ArrowSVG from "../../../ui/icons/ArrowSVG";

const Interviews = () => {
  const [activeTab, setActiveTab] = useState<string>("ongoing");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownTitle, setDropdownTitle] = useState<string>("Ongoing Interviews");

  const interviews = [
    {
      id: 1,
      title: "Frontend Developer Interview",
      role: "Frontend Developer",
      date: "2024-01-15",
      status: "Completed",
      score: 85,
      duration: "45 min",
    },
    {
      id: 2,
      title: "Frontend Developer Interview",
      role: "Frontend Developer",
      date: "2024-01-15",
      status: "Completed",
      score: 85,
      duration: "45 min",
    },
    {
      id: 3,
      title: "Frontend Developer Interview",
      role: "Frontend Developer",
      date: "2024-01-15",
      status: "Completed",
      score: 85,
      duration: "45 min",
    },
    {
      id: 4,
      title: "React Developer Position",
      role: "React Developer",
      date: "2024-01-12",
      status: "Completed",
      score: 92,
      duration: "60 min",
    },
    {
      id: 5,
      title: "Full Stack Engineer",
      role: "Full Stack Developer",
      date: "2024-01-10",
      status: "In Progress",
      score: null,
      duration: "30 min",
    },
    {
      id: 6,
      title: "Backend Developer Interview",
      role: "Backend Developer",
      date: "2024-01-08",
      status: "In Progress",
      score: null,
      duration: "50 min",
    },
    {
      id: 7,
      title: "Senior Developer Role",
      role: "Senior Developer",
      date: "2024-01-05",
      status: "Completed",
      score: 78,
      duration: "90 min",
    },
  ];

  const filteredInterviews = interviews.filter((interview) => {
    const matchesSearch =
      interview.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.role.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "ongoing") {
      return interview.status === "In Progress" && matchesSearch;
    } else {
      return interview.status === "Completed" && matchesSearch;
    }
  });

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-0.5 rounded-md text-xs font-medium";
    if (status === "Completed") {
      return `${baseClasses} bg-green-100 text-green-700 border border-green-200`;
    } else if (status === "In Progress") {
      return `${baseClasses} bg-blue-100 text-blue-700 border border-blue-200`;
    }
    return `${baseClasses} bg-gray-100 text-gray-700 border border-gray-200`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-blue-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const dropdownOptions = ["Ongoing Interviews", "Completed Interviews"];

  const handleDropdownChange = (selectedOption: string | { label: string; value: string }) => {
    const optionString = typeof selectedOption === 'string' ? selectedOption : selectedOption.label;
    setDropdownTitle(optionString);
    if (optionString === "Ongoing Interviews") {
      setActiveTab("ongoing");
    } else if (optionString === "Completed Interviews") {
      setActiveTab("completed");
    }
  };

  return (
    <div className={`h-full flex flex-col`}>
      <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 mb-2 xs:mb-3 sm:mb-4">
        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 xs:gap-3">
          <div className="flex items-center">
            <div className="relative w-full xs:w-auto">
              <DropdownMenu
                options={dropdownOptions}
                defaultValue={dropdownTitle}
                onSelect={handleDropdownChange}
                placeholder="Select interview type"
                className="inline-block w-full xs:min-w-40 sm:min-w-48 md:min-w-52 lg:min-w-56 xl:min-w-48 2xl:min-w-56"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Input
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="h-8 xs:h-9 sm:h-10 w-full xs:w-40 sm:w-48 md:w-56 lg:w-64 xl:w-56 2xl:w-64 px-2 xs:px-3 sm:px-4 text-xs xs:text-sm placeholder:text-xs xs:placeholder:text-sm placeholder:font-medium outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search interviews..."
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div
          className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-4 2xl:p-6 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          {filteredInterviews.length === 0 ? (
            <div className="text-center py-8 xs:py-10 sm:py-12">
              <div className="text-gray-400 mb-3">
                <EmptyPageSVG className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mx-auto" fillColor="none"/>
              </div>
              <p className="text-gray-500 text-sm xs:text-base sm:text-lg">
                No {activeTab} interviews found
              </p>
              <p className="text-gray-400 text-xs xs:text-sm mt-2">
                {searchTerm
                  ? "Try adjusting your search terms"
                  : "Start your first interview to see it here"}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredInterviews.map((interview) => (
                <div
                  key={interview.id}
                  className="bg-white hover:bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm3-3a1 1 0 00-1 1v1h4V5a1 1 0 00-1-1H9zm-3 4h8v6H6V8z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 truncate">
                            {interview.title}
                          </h3>
                          <p className="text-xs text-gray-500">{interview.role}</p>
                        </div>
                      </div>
                      <span className={getStatusBadge(interview.status)}>
                        {interview.status}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <div className="flex items-center space-x-1">
                          <DateSVG className="w-3 h-3" fillColor="currentColor" />
                          <span>{new Date(interview.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ClockSVG className="w-3 h-3" fillColor="currentColor" />
                          <span>{interview.duration}</span>
                        </div>
                        {interview.score !== null && (
                          <div className="flex items-center space-x-1">
                            <StarSVG className="w-3 h-3" fillColor="currentColor" />
                            <span className={`font-medium ${getScoreColor(interview.score)}`}>
                              {interview.score}%
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {interview.status === "Completed" ? (
                          <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center space-x-1">
                            <OpenEyeSVG className="w-3 h-3" fillColor="currentColor" />
                            <span>View</span>
                          </Button>
                        ) : (
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center space-x-1">
                            {/* <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg> */}
                            <ArrowSVG className="w-6 h-6" fillColor="white" />
                            <span>Continue</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interviews;