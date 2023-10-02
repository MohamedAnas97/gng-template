import ReactPlayer from "react-player";
import Video from "../../assets/videos/Website_Video.webm";
// import Safari from "../../assets/videos/safari.mp4";
import { detect } from "detect-browser";

const Banner = () => {
  const browser = detect();
  console.log("browser.name", browser.name);
  return (
    <>
      <div className="">
        <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] pt-4 ">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            {/* left side  */}
            <div className="w-full lg:w-6/12">
              <div className="leading-[70px] hidden lg:block">
                <h1 className="text-[40px] lg:text-[64px] text-left text-white">
                  <span className="text-[#fff] font-[700] ">
                    {" "}
                    Connecting Dots From
                    <br />
                    <span className="text-gradient-gold"> DESIGN</span> To{" "}
                    <br />
                    DEVELOPMENT{" "}
                  </span>
                </h1>
              </div>
              <div className="leading-[70px] block lg:hidden">
                <h1 className="text-[40px] lg:text-[64px] text-center text-white">
                  <span className="text-[#fff] font-[700] ">
                    {" "}
                    Connecting Dots From
                    <span className="text-gradient-gold"> DESIGN</span> To{" "}
                    DEVELOPMENT{" "}
                  </span>
                </h1>
              </div>
              <div className="pl-3 pt-5 pb-4 flex justify-center lg:justify-start">
                <div className="w-[2px] h-[52px] bg-gradient-gold2"></div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div>
                  <img
                    src={require("../../assets/images/banner/Frame-43.png")}
                    alt=""
                    className="h-10"
                  />
                </div>
                <div className="px-4">
                  <h1 className="text-[14px] text-center lg:text-left text-white">
                    <span className="text-[#fff] font-[400] uppercase">
                      + Other technologies
                    </span>
                  </h1>
                </div>
              </div>
              <div>
                <p className="text-white pt-5 text-[14px] lg:pl-5 text-center lg:text-left">
                  Experience the transformative power of deep diving
                  <br /> into technology and leveling up your business with
                  <br />
                  our innovative solutions.
                </p>
              </div>
            </div>
            {/* right side  */}
            <div className="w-full lg:w-6/12 flex justify-center py-12 lg:py-0">
              <div className="flex  items-center justify-center ">
                <ReactPlayer
                  // url={browser.name === "safari" ? Safari : Video}
                  url={
                    browser.name === "chrome" ||
                    browser.name === "edge-chromium" ||
                    browser.name === "firefox" ||
                    browser.name === "opera"
                      ? Video
                      : "https://res.cloudinary.com/dn1rcvm1v/video/upload/v1685003775/safari_heb75v.mp4"
                  }
                  className="!w-[100%] !h-[100%]"
                  controls={false}
                  loop
                  volume={false}
                  playing
                  playsinline={true}
                  muted={true}
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="w-full lg:pt-16 pb-10 lg:pb-10 ">
          <img
            src={require("../../assets/images/banner/servicesBanner.png")}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};
export default Banner;
