import { useUserData } from "../../../../context/UserDataContext";

interface ViewCareerProps {
  className: string;
}

const ViewCareer = ({ className }: ViewCareerProps) => {
  const { activeCareer } = useUserData();

  if (!activeCareer) {
    return (
      <div className={`${className} flex flex-col h-full min-h-48 xs:min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-80 xl:min-h-72 2xl:min-h-80`}>
        <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
          <div>
            <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-base 2xl:text-lg font-bold text-gray-900">Current Career</h2>
            <p className="text-xs sm:text-sm text-gray-500">Practice for this role</p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No active career selected</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} flex flex-col h-full min-h-48 xs:min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-80 xl:min-h-72 2xl:min-h-80`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
        <div>
          <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-base 2xl:text-lg font-bold text-gray-900">Current Career</h2>
          <p className="text-xs sm:text-sm text-gray-500">Practice for this role</p>
        </div>
        <span className="inline-flex items-center px-2 xs:px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
          Current
        </span>
      </div>

      {/* Card */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200">
        {/* Top Section with Icon and Title */}
        <div className="flex items-start space-x-3 xs:space-x-4 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-4 2xl:p-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-sm 2xl:text-base font-bold text-gray-900 truncate mb-1 xs:mb-2">
              {activeCareer.title}
            </h3>
            <span className="inline-flex items-center px-2 xs:px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
              {activeCareer.level}
            </span>
          </div>
        </div>

        {/* Centered Stats Section */}
        <div className="flex-1 flex flex-col justify-center px-4 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            {/* Interviews Card */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 w-full md:flex-1 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-blue-700">Interviews</span>
              </div>
              <p className="text-lg font-bold text-blue-900">{activeCareer.interviewsCompleted} completed</p>
            </div>
            
            {/* Average Score Card */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 w-full md:flex-1 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-blue-700">Avg Score</span>
              </div>
              <p className="text-lg font-bold text-blue-900">{activeCareer.avgScore}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCareer;