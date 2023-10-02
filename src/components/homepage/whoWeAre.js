import ReactPlayer from "react-player/lazy";
// import Video from "../../assets/videos/home.mp4";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] lg:pt-20 pb-4">
      <div>
        <h6 className="text-gradient-gold text-[14px] font-[600] tracking-[14px]">
          WHO WE ARE
        </h6>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between py-4">
        {/* left side  */}
        <div className="w-full lg:w-8/12">
          <h1 className="text-[22px] lg:text-[30px] 2xl:text-[48px] text-left text-white">
            Your digital partner to create inspirational design and robust
            solution for Web, Mobile & Cloud.
          </h1>
          <p className="text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] py-4 font-[300]">
            The top-notch and preeminent Web and Mobile App Development Company
            of UAE with its global presence, G&G is first-rate choice of the
            clients worldwide. With sheer customer satisfaction in mind, we are
            profoundly dedicated to developing highly intriguing apps and
            websites that strictly meet the business requirements and cater to a
            wide spectrum of projects.
          </p>
        </div>
        {/* right side  */}
        <div className="w-full lg:w-4/12 flex justify-center py-12">
          <div>
            <button
              className="flex items-center hover:transition-all transition-colors border border-[#F2F2F2] text-[#F2F2F2] hover:border-[#fdae21] hover:bg-[#fdae21] hover:text-[#fff] rounded-full cursor-pointer pl-7 pr-5 py-3"
              onClick={() => {
                navigate("/about-us");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About Us
              <span className="pl-4">
                <img
                  src={require("../../assets/icons/arrow-right.png")}
                  alt=""
                  className="h-[25px]"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="lg:pt-10 player-container">
        <ReactPlayer
          url={
            "https://res.cloudinary.com/dn1rcvm1v/video/upload/v1685003666/home_szzjqt.mp4"
          }
          className="w-full"
          controls={false}
          loop
          volume={false}
          playing
          playsinline={true}
          muted={true}
        />
      </div>
    </div>
  );
};
export default Banner;
