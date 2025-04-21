import React from 'react';
import PropTypes from 'prop-types';

const HowItWorksCard = ({ step, title, description, isActive }) => {
  return (
    <div className="flex items-start gap-4 w-full ml-[20px]">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
          isActive
            ? "bg-blue-500 text-white"
            : "border-2 border-solid text-white bg-orange border-orange"
        } transition-all hover:scale-110 duration-200`}
      >
        <span className="text-lg font-bold leading-7">{step}</span>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-lg font-bold leading-tight text-grey-900">
          {title}
        </h3>
        <p className="text-sm font-medium leading-7 text-grey-600">
          {description}
        </p>
      </div>
    </div>
  );
};

HowItWorksCard.propTypes = {
    step: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isActive: PropTypes.bool,
}

export default HowItWorksCard;