import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex w-full gap-5 flex-wrap justify-between items-center">
      <div className="flex items-stretch gap-[40px_100px] text-black font-normal flex-wrap mt-1.5">
        <Link
          to="/"
          className="flex items-stretch gap-[3px] text-xs tracking-[-0.12px] leading-none"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cdb5ae839027d2074bbba07ac560e838416a2485e5aaa014dd9e2c989b4f797?placeholderIfAbsent=true"
            className="aspect-[1.08] object-contain w-[70px] shrink-0"
            alt="Logo"
          />
          <div className="flex flex-col items-stretch my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ca6525ae75b33d38025299b9c68357aaebbab63d1f8aa9ca5c03d58714ece4?placeholderIfAbsent=true"
              className="aspect-[6.17] object-contain w-[142px]"
              alt="Tutor Expert"
            />
            <div className="mt-[5px]">
              <span
                style={{
                  fontFamily:
                    "Romanesco, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                By
              </span>{" "}
              Teachers
            </div>
          </div>
        </Link>
        <div className="flex items-stretch gap-[38px] text-[21px] whitespace-nowrap leading-normal mt-[11px]">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <div className="flex h-4 items-center gap-[3px] cursor-pointer hover:text-primary">
            <span>Subjects</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df17986147599625b02099ed984d48726b37541dcfe7ac9a80988d7c35cd4a00?placeholderIfAbsent=true"
              className="aspect-[0.94] object-contain w-[15px] self-stretch shrink-0 my-auto"
              alt=""
            />
          </div>
          <div className="flex h-4 items-center gap-[3px] cursor-pointer hover:text-primary">
            <span>Tutor</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80733f0c34e8a2ad1edfc5b7165e1208288a9e0794fde376b074dfd2b859d183?placeholderIfAbsent=true"
              className="aspect-[0.94] object-contain w-[15px] self-stretch shrink-0 my-auto"
              alt=""
            />
          </div>
        </div>
      </div>
      <button className="bg-[rgba(86,79,253,1)] shadow-[0px_4px_14px_rgba(0,0,0,0.1)] min-h-[55px] text-xl text-white font-semibold whitespace-nowrap leading-none px-[59px] py-[13px] rounded-[11px] hover:bg-opacity-90 transition-colors">
        Login
      </button>
    </nav>
  );
};
