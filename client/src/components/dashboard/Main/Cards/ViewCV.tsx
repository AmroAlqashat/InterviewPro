import { useState } from "react";

interface ViewCVProps {
  className: string;
}

const ViewCV = ({ className }: ViewCVProps) => {
  const [currentCV] = useState({
    name: "John_Doe_Resume.pdf",
    role: "Frontend Developer",
    uploadDate: "2024-01-15",
    size: "2.4 MB",
    status: "Active",
    lastUpdated: "2024-01-20",
    version: "v2.1"
  });

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const handlePreview = () => {
    console.log("Preview CV:", currentCV.name);
  };

  return (
    <div className={`${className} flex flex-col h-full min-h-48 xs:min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-80 xl:min-h-72 2xl:min-h-80`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
        <div>
          <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-base 2xl:text-lg font-bold text-gray-900">Current CV</h2>
          <p className="text-xs sm:text-sm text-gray-500">Your active resume</p>
        </div>
        <span className="inline-flex items-center px-2 xs:px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
          {currentCV.status}
        </span>
      </div>

      {/* Card */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="flex-1 flex flex-col justify-evenly p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-4 2xl:p-6 text-center">
          {/* Big File Icon */}
          <div className="flex justify-center mb-2 xs:mb-3 sm:mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
              <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* File Name and Size */}
          <div className="mb-2 xs:mb-3 sm:mb-4">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-sm 2xl:text-base font-semibold text-gray-900 mb-1 truncate px-1 xs:px-2">{currentCV.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">{currentCV.size}</p>
          </div>

         {/* Role, Date, and Preview Button - Improved Responsive Layout */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
            {/* Role */}
            <div className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-50 rounded-lg py-2 px-2 flex-1 min-w-0">
              <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm3-3a1 1 0 00-1 1v1h4V5a1 1 0 00-1-1H9zm-3 4h8v6H6V8z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-gray-700 truncate">{currentCV.role}</span>
            </div>
            {/* Date */}
            <div className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-50 rounded-lg py-2 px-2 flex-1 min-w-0">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1 1zM4 7h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-gray-700 truncate">{formatDate(currentCV.lastUpdated)}</span>
            </div>
            {/* Preview Button */}
            <button
              onClick={handlePreview}
              className="flex items-center justify-center space-x-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-4 rounded-lg text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-md flex-1 md:flex-initial min-w-[90px]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span>Preview</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCV;
