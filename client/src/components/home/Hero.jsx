import React from "react";
import Button from "../ui/Button";
import PropTypes from "prop-types";
import StatisticsCard from "./StatisticsCard";
import heroImg from "../../assets/interview1.png";
import AuthForm from "../authForm/AuthForm";

function Hero({ showForm, formVisibility }) {
  return (
    <div className="container flex justify-between xs:mt-22 lg:mt-32 font-serif xs:flex-col lg:flex-row lg:w-[95%] 2xl:w-full">
      <div className="lg:w-[45%] xs:w-[90%] xs:mx-[24px] lg:mx-0">
        <img
          className="object-cover w-full max-w-[80%] lg:hidden justify-self-center mr-8"
          src={heroImg}
        ></img>
        {showForm && <AuthForm formVisibility={formVisibility}/>}
        <h1 className="lg:mt-24 xs:text-4xl lg:text-[3.30rem] xs:text-center lg:text-left sm:text-5xl">
          Master Every{" "}
          <span className="text-orange font-semibold">Interview.</span> Land
          Your Dream Job
        </h1>
        <p className="text-gray-500 my-8 xs:text-center lg:text-left lg:text-base xs:text-md sm:text-lg">
          Practice with AI-powered mock interviews tailored to your field and
          experience level. Get personalized feedback and refine your answers
          before facing real employers.
        </p>
        <div className="flex lg:justify-start xs:justify-center">
          <Button
            className="
                        hero-btn bg-blue-500 text-white hover:opacity-80 py-1.5"
            label="Get Started"
          />

          <Button
            className="
                        py-1.5 hero-btn border-2 mx-4 border-blue-500  xs:text-sm
                        hover:bg-blue-500 hover:text-white  "
            label="Take a Quick Assessment"
          />
        </div>
        <div className="mt-20 flex justify-between ">
          <StatisticsCard header="90%" body="Success Rate in Real Interviews" />
          <StatisticsCard
            header="1000+"
            body="Expert Feedback Sessions Conducted"
          />
          <StatisticsCard header="80+" body="Different Job Roles Supported" />
        </div>
      </div>
      <img
        className="lg:object-contain xl:object-cover w-full lg:mb-20 xl:mb-0 lg:max-w-[50%] xl:max-w-[45%] lg:block hidden"
        src={heroImg}
      ></img>
    </div>
  );
}

Hero.propTypes = {
  showForm: PropTypes.bool,
  formVisibility: PropTypes.func
}

export default Hero;
