import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-[969px] w-full items-stretch pt-11">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c5f7d8dbb6bfabb9ab1d72c9f4c334e17eb58ea0fdf40c426cb0922716263d1?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero Background"
      />
      <div className="relative z-10 flex flex-col items-start max-w-[1552px] px-4 ml-[3rem]">
        <h1 className="text-[79px] font-black leading-[82px] mt-[220px] flex flex-wrap items-baseline gap-5 max-md:text-[40px] max-md:leading-[46px] max-md:mt-10">
          <span className="text-[#2940FF] text-[0.85em]">We</span>
          <span className="uppercase text-[#323232]">CONNECT</span>
          <span className="text-[#323232] text-[0.67em] block">individuals</span>
          <span className="text-[#323232] text-[0.67em] block w-full">to Assign</span>
        </h1>
        <p className="text-black text-[21px] font-semibold mt-5">
          Find top talent or open assignments with tools that keep you in
          control.
        </p>
        <div className="flex items-center gap-4 mt-[35px] max-md:flex-col max-md:w-full">
          <Button size="lg">
            Register here!
          </Button>
          <Input
            placeholder="Search For New Service"
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5551b0bfcdd333abf9cbf22ada13e34a432b07e6b9772319a9a5b25885eb933?placeholderIfAbsent=true"
                className="w-6 h-6 object-contain"
                alt="Search"
              />
            }
            className="min-w-[300px] max-md:w-full"
          />
        </div>
      </div>
    </section>
  );
};
