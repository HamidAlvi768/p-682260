export const Stats = () => {
  return (
    <section className="relative bg-[rgba(255,255,255,0.75)] z-10 flex justify-center items-center flex-wrap gap-8 py-12 px-4">
      <div className="flex min-w-60 gap-4 items-center">
        <div className="flex w-10 h-10 bg-primary rounded-full items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div>
          <div className="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
            67.1k
          </div>
          <div className="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
            Students
          </div>
        </div>
      </div>

      <div className="flex min-w-60 gap-4 items-center">
        <div className="flex w-10 h-10 bg-primary rounded-full items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <div>
          <div className="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
            26k
          </div>
          <div className="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
            Certified Instructor
          </div>
        </div>
      </div>

      <div className="flex min-w-60 gap-4 items-center">
        <div className="flex w-10 h-10 bg-primary rounded-full items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
        <div>
          <div className="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
            72
          </div>
          <div className="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
            Country Language
          </div>
        </div>
      </div>

      <div className="flex min-w-60 gap-4 items-center">
        <div className="flex w-10 h-10 bg-primary rounded-full items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div>
          <div className="text-[#1D2026] text-[32px] font-semibold leading-none tracking-[-0.32px]">
            99.9%
          </div>
          <div className="text-[#4E5566] text-sm font-medium leading-none tracking-[-0.14px] mt-2">
            Success Rate
          </div>
        </div>
      </div>
    </section>
  );
};
