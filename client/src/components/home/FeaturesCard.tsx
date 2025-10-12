interface FeaturesCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeaturesCard({ icon, title, description }: FeaturesCardProps) {
  return (
    <div className="col-span-1 flex flex-col items-center gap-6 px-10 py-10 lg:px-4 xl:px-2 lg:max-w-[30%] xl:max-w-[28%] scale-100 transition-all duration-200 rounded-4xl hover:bg-white hover:shadow-lg hover:scale-105 ">
      <div className="flex h-16 w-16 items-center justify-center">
        <img className="size-15" src={icon} />
      </div>
      <div className="flex flex-col gap-2 px-2 text-center">
        <h4 className="text-xl font-extrabold text-grey-900">{title}</h4>
        <p className="text-md font-medium leading-7 text-grey-600 lg:px-8">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeaturesCard;
