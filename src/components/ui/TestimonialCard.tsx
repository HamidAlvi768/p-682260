interface TestimonialCardProps {
  name: string;
  timeAgo: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TestimonialCard = ({
  name,
  timeAgo,
  content,
  avatar,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="flex gap-[13px] justify-center flex-wrap">
      <img
        src={avatar}
        className="aspect-[1] object-contain w-[33px] shrink-0 rounded-[50%]"
        alt={name}
      />
      <div className="flex min-w-60 flex-col items-stretch grow shrink w-full">
        <div className="flex flex-col items-stretch">
          <div className="flex items-center gap-[7px] text-xs text-[#6E7485] font-normal leading-none">
            <div className="text-[#1D2026] text-right text-sm font-medium leading-none tracking-[-0.14px]">
              {name}
            </div>
            <div className="text-right">•</div>
            <div>{timeAgo}</div>
          </div>
          <div className="flex mt-[7px]">
            {Array.from({ length: rating }).map((_, i) => (
              <svg
                key={i}
                className="w-[13px] h-[13px] text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-[#4E5566] text-sm font-normal leading-[22px] tracking-[-0.14px] mt-2.5">
          {content}
        </p>
      </div>
    </div>
  );
};
