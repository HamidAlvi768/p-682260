export const Footer = () => {
  return (
    <footer className="justify-center items-center bg-[#1D2026] self-stretch flex w-full flex-col pt-20">
      <div className="flex gap-6 flex-wrap max-w-[1400px] mx-auto px-4">
        <div className="flex min-w-60 flex-col items-stretch justify-center w-[424px] max-md:max-w-full">
          <div className="flex w-full max-w-[424px] flex-col items-stretch font-normal text-justify">
            <div className="flex gap-[9px] text-[37px] text-white tracking-[-1.1px] leading-none">
            <div className="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86855e3413a2ca60ba5eaf9af4a526332f8a2f1dca396da8c98b7eab16743e8e?placeholderIfAbsent=true" className="aspect-[1] object-contain w-[18px]" alt="Facebook" />
            </div>
            <div className="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
              <img src="URL_114" className="aspect-[1] object-contain w-[18px]" alt="Twitter" />
            </div>
            <div className="bg-[rgba(86,79,253,1)] shadow-[0px_6px_20px_rgba(204,82,43,0.5)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-90 transition-colors">
              <img src="URL_115" className="aspect-[1] object-contain w-[18px]" alt="Instagram" />
            </div>
            <div className="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/85368ea62b6cf8f44a27f65fdafd62958990c523040685788b0528858ee812ce?placeholderIfAbsent=true" className="aspect-[1] object-contain w-[18px]" alt="LinkedIn" />
            </div>
            <div className="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5 hover:bg-opacity-50 transition-colors">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d1d701ad138a75c7f6a1a15e0fffe01b095a3c24a99dfa6668274d31d3d7ac3?placeholderIfAbsent=true" className="aspect-[1] object-contain w-[18px]" alt="YouTube" />
            </div>
          </div>
        </div>
            <div className="text-[#8C94A3] text-sm leading-[22px] tracking-[-0.14px] mt-5">
              Aliquam rhoncus ligula est, non pulvinar elit
              <br />
              convallis nec. Donec mattis odio at.
            </div>
          </div>
          <div className="flex gap-3 mt-[26px]">
            {/* Social Media Icons */}
            <div className="bg-[rgba(54,59,71,0.4)] flex items-center gap-2.5 w-[46px] h-[46px] p-3.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/86855e3413a2ca60ba5eaf9af4a526332f8a2f1dca396da8c98b7eab16743e8e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[18px]"
                alt="Social"
              />
            </div>
            {/* Repeat for other social icons */}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-stretch text-sm text-justify w-[200px]">
          <h3 className="text-white font-medium leading-none uppercase">
            Quick Links
          </h3>
          <div className="flex flex-col text-[#8C94A3] font-normal tracking-[-0.14px] leading-loose mt-5">
            <a href="#" className="hover:text-white transition-colors py-1.5">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors py-1.5">
              Become Instructor
            </a>
            <a href="#" className="hover:text-white transition-colors py-1.5">
              Contact
            </a>
            <a href="#" className="hover:text-white transition-colors py-1.5">
              Career
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-stretch text-sm text-justify w-[200px]">
          <h3 className="text-white font-medium leading-none uppercase">
            Support
          </h3>
          <div className="flex flex-col text-[#8C94A3] font-normal tracking-[-0.14px] leading-loose mt-5">
            <a href="#" className="hover:text-white transition-colors py-1.5">
              Help Center
            </a>
            <a href="#" className="hover:text-white transition-colors py-1.5">
              FAQs
            </a>
            <a href="#" className="hover:text-white transition-colors py-1.5">
              Terms & Condition
            </a>
            <a href="#" className="hover:text-white transition-colors py-1.5">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col items-stretch text-justify w-[200px]">
          <h3 className="text-white text-sm font-medium leading-none uppercase">
            Download our app
          </h3>
          <div className="flex flex-col items-stretch justify-center mt-5 gap-3">
            <a
              href="#"
              className="bg-[rgba(54,59,71,0.4)] flex items-center gap-3.5 justify-center px-5 py-3 hover:bg-opacity-50 transition-colors"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5430f88f7bf0cb90dfe31ebd6464e772d7025a2a183295237ebcc5475c8007c0?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-8"
                alt="App Store"
              />
              <div>
                <div className="text-[#B7BAC7] text-[10px] font-normal leading-none">
                  Download now
                </div>
                <div className="text-white text-base font-medium leading-none">
                  App Store
                </div>
              </div>
            </a>
            <a
              href="#"
              className="bg-[rgba(54,59,71,0.4)] flex items-center gap-3.5 justify-center px-5 py-3 hover:bg-opacity-50 transition-colors"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b606b3d108beac5d4e8419318bab0a8bca8b70bb133cea1dae9edf73cc823d9f?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-8"
                alt="Play Store"
              />
              <div>
                <div className="text-[#B7BAC7] text-[10px] font-normal leading-none">
                  Download now
                </div>
                <div className="text-white text-base font-medium leading-none">
                  Play Store
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="justify-between items-center shadow-[0px_1px_0px_0px_rgba(54,59,71,0.50)_inset] bg-[#1D2026] flex w-full gap-[40px_100px] font-normal text-justify flex-wrap mt-20 px-[300px] py-6">
        <div className="text-[#8c94a3] text-sm leading-loose tracking-[-0.14px]">
          © 2024 - Tutor Expert. All rights reserved
        </div>
        <select className="border border-[color:var(--Gray-800,#363B47)] bg-[#1D2026] text-[#8C94A3] px-4 py-2 rounded">
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </footer>
  );
};