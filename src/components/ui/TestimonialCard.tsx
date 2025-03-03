interface TestimonialCardProps {
  name: string;
  timeAgo: string;
  content: string;
  avatar: string;
  rating: number;
}

const StarIcon = () => (
  <svg
    className="w-[13px] h-[13px] text-[#FFB800] fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const TestimonialCard = ({
  name,
  timeAgo,
  content,
  avatar,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="flex items-start gap-4">
      {/* Avatar - Aligned to top */}
      <img
        src={avatar}
        className="w-[52px] h-[52px] rounded-full object-cover flex-shrink-0"
        alt={name}
      />

      {/* Content Container */}
      <div className="flex-1 bg-white rounded-2xl p-6 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          {/* User Info and Time */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-[#1D2026]">{name}</span>
            <span className="text-[#6E7485]">•</span>
            <span className="text-[#6E7485]">{timeAgo}</span>
          </div>

          {/* Rating Stars */}
          <div className="flex gap-[2px]">
            {Array.from({ length: rating }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>

        {/* Testimonial Content */}
        <p className="mt-4 text-[#4E5566] text-[15px] leading-[25px]">
          {content}
        </p>
      </div>
    </div>
  );
};
