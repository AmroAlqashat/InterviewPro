import HowItWorksCard from './HowItWorksCard.jsx';
import ArrowSVG from '../ui/icons/ArrowSVG.jsx'

function HowItWorks() {
  return (
      <div className="container mx-auto my-32 flex flex-col items-center gap-16 w-full" id='howItWorks'>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="mb-2 text-3xl font-semibold leading-tight text-grey-900 lg:text-4xl">
              How does it works?
            </h2>
            <p className="text-md font-medium leading-7 text-dark-grey-600">
              Use AI to simulate interviews and strengthen your preparation.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          <HowItWorksCard
            step="1"
            title="Upload Your CV"
            description="Upload your CV to have your interview tailored with key questions."
            isActive={true}
          />

          <ArrowSVG className="rotate-90 lg:rotate-0 w-12 h-12 flex self-center"/>

          <HowItWorksCard
            step="2"
            title="AI-Powered Analysis"
            description="Our AI evaluates your responses and provides data-driven insights to help you improve."
            isActive={false}
          />

          <ArrowSVG className="rotate-90 lg:rotate-0 w-12 h-12 flex self-center"/>

          <HowItWorksCard
            step="3"
            title="Mock Interview & Feedback"
            description="Get a real interview experience with AI-generated questions and detailed feedback."
            isActive={false}
          />
        </div>
      </div>
  );
  }

export default HowItWorks;