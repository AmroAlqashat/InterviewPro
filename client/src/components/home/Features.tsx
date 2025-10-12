import FeaturesCard from "../home/FeaturesCard"
import questionIcon from "../../assets/question-answer_12190947.png";
import feedBackIcon from "../../assets/review.png";
import progressTrackingIcon from "../../assets/follow-up.png";
import interviewModsIcon from "../../assets/mods.png";
import difficultyIcon from "../../assets/difficulty.png";
import timeIcon from "../../assets/time.png";

function Features() {
  return (
    <div className=" flex flex-col mt-[5%] max-w-[1450px] items-center mx-auto text-center plus-jakarta-sans-font" id="features">
      <h1 className="lg:text-4xl xs:text-2xl mt-[7%] xs:max-w-[95%] 2xl:max-w-[70%] ">
        Unlock Your Full Potential with AI-Powered interview preparation
      </h1>
      <h1 className="lg:text-lg xs:text-md mt-6 text-gray-400 2xl:max-w-[80%] xs:max-w-[95%]">
        Prepare confidently with our AI-driven platform, offering personalized
        questions, real-time feedback, and performance analysis to help you
        succeed in any interview.
      </h1>
      <div className="flex flex-wrap mt-[4%] mx-auto xs:w-full gap-x-[7%] xs:block lg:flex xs:justify-items-center lg:justify-center">
        <FeaturesCard
          icon={questionIcon}
          title="AI-Tailored Questions"
          description="Get interview questions customized to your experience and goals."
        />

        <FeaturesCard
          icon={feedBackIcon}
          title="Instant AI Feedback"
          description="Receive real-time insights to improve your answers."
        />

        <FeaturesCard
          icon={progressTrackingIcon}
          title="Progress Tracking"
          description="Save your sessions and track your improvements."
        />

        <FeaturesCard
          icon={interviewModsIcon}
          title="Multiple Interview Modes"
          description="Practice technical, behavioral, or general interviews."
        />

        <FeaturesCard
          icon={difficultyIcon}
          title="Customizable Sessions"
          description="Choose question difficulty and interview length."
        />

        <FeaturesCard
          icon={timeIcon}
          title="Time-Based Assessments"
          description="Practice answering under time constraints."
        />
      </div>
    </div>
  );
}

export default Features;
