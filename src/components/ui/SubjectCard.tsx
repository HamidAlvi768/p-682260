interface SubjectCardProps {
  title: string;
  description: string;
  icon?: string;
}

export const SubjectCard = ({
  title,
  description,
  icon = "✍",
}: SubjectCardProps) => {
  return (
    <div className="bg-white flex grow flex-col items-stretch text-center w-full px-6 py-8 rounded-lg">
      <div className="self-center w-[88px] text-[40px] text-black font-medium whitespace-nowrap leading-none rounded-[120px]">
        <div className="shadow-[0px_32px_32px_-12px_rgba(18,19,20,0.05)] bg-white w-full h-[88px] flex items-center justify-center rounded-[120px]">
          {icon}
        </div>
      </div>
      <div className="flex w-full flex-col mt-8">
        <h3 className="text-[#121314] text-xl font-semibold leading-[1.4]">
          {title}
        </h3>
        <p className="text-[#7B848B] text-sm font-normal leading-[22px] mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};
