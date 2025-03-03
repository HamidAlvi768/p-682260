export const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-[969px] w-full items-stretch pt-11">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c5f7d8dbb6bfabb9ab1d72c9f4c334e17eb58ea0fdf40c426cb0922716263d1?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero Background"
      />
      <div className="relative z-10 flex flex-col items-start max-w-[1552px] mx-auto px-4">
        <h1 className="text-[rgba(29,30,29,1)] text-[79px] font-black leading-[82px] mt-[220px] max-md:text-[40px] max-md:leading-[46px] max-md:mt-10">
          <span className="uppercase text-[rgba(50,50,50,1)]">connect</span>{" "}
          <span className="text-[53px]">individuals</span>
        </h1>
        <p className="text-black text-[21px] font-semibold mt-5">
          Find top talent or open assignments with tools that keep you in
          control.
        </p>
        <div className="flex items-stretch gap-4 mt-[35px]">
          <button className="bg-[linear-gradient(90deg,#051391_0%,#5868FF_100%)] text-xl text-white font-semibold tracking-[0.1px] px-[49px] py-9 rounded-[20px] hover:opacity-90 transition-opacity">
            Register here!
          </button>
          <div className="bg-[rgba(255,255,255,0.37)] flex items-center gap-2.5 px-[58px] py-[26px] rounded-[18px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5551b0bfcdd333abf9cbf22ada13e34a432b07e6b9772319a9a5b25885eb933?placeholderIfAbsent=true"
              className="aspect-[0.97] object-contain w-[31px]"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Search For New Service"
              className="bg-transparent text-[15px] text-[rgba(139,126,126,1)] font-normal tracking-[0.07px] outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
