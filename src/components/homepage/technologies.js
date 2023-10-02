import Carousel from "react-multi-carousel";

const Technologies = ({ executeScroll }) => {
  //responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] py-4 lg:pt-40 pb-10 technology-container">
      <div className="flex flex-col items-center justify-center">
        <div className="w-10/12 sm:w-6/12 lg:w-6/12 2xl:w-6/12">
          <img
            src={require("../../assets/images/technologies/Trending.webp")}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-[30px] md:text-[40px] lg:text-[45px] 2xl:text-[63px] font-[400] text-[#F2F2F2]">
            Technologies
          </h4>
        </div>
      </div>
      <div>
        <div className="py-12">
          <Carousel
            arrows={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {/* Flutter */}
            <div className="py-2 flex flex-col justify-center items-center ">
              <div>
                <img
                  src={require("../../assets/images/technologies/flutter.webp")}
                  alt=""
                  className="h-16"
                />
              </div>
              <div>
                <p className="text-left text-[16px] text-[#B2B2B2B2] py-3">
                  Flutter
                </p>
              </div>
            </div>
            {/* golang */}
            <div className="py-2 flex flex-col justify-center items-center ">
              <div>
                <img
                  src={require("../../assets/images/technologies/golang.webp")}
                  alt=""
                  className="h-16"
                />
              </div>
              <div>
                <p className="text-left text-[16px] text-[#B2B2B2B2] py-3">
                  Golang
                </p>
              </div>
            </div>
            {/* react */}
            <div className="py-2 flex flex-col justify-center items-center ">
              <div>
                <img
                  src={require("../../assets/images/technologies/react.webp")}
                  alt=""
                  className="h-16"
                />
              </div>
              <div>
                <p className="text-left text-[16px] text-[#B2B2B2B2] py-3">
                  React
                </p>
              </div>
            </div>
            {/* firebase */}
            <div className="py-2 flex flex-col justify-center items-center ">
              <div>
                <img
                  src={require("../../assets/images/technologies/firebase.webp")}
                  alt=""
                  className="h-16"
                />
              </div>
              <div>
                <p className="text-left text-[16px] text-[#B2B2B2B2] py-3">
                  Firebase
                </p>
              </div>
            </div>
            {/* docker */}
            <div className="py-2 flex flex-col justify-center items-center ">
              <div>
                <img
                  src={require("../../assets/images/technologies/docker.webp")}
                  alt=""
                  className="h-16"
                />
              </div>
              <div>
                <p className="text-left text-[16px] text-[#B2B2B2B2] py-3">
                  Docker
                </p>
              </div>
            </div>
            {/* kubernates */}
            <div className="py-2 flex flex-col justify-center items-center ">
              <div>
                <img
                  src={require("../../assets/images/technologies/kubernets.webp")}
                  alt=""
                  className="h-16"
                />
              </div>
              <div>
                <p className="text-center text-[16px] text-[#B2B2B2B2] py-1">
                  Kubernets
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="pt-6 lg:pt-20">
        <div className="gradient-box-color py-12 px-8 lg:py-12 lg:px-12 rounded-2xl w-full">
          <h2 className="text-center text-[#FFFFFF] text-[25px] lg:text-[30px] 2xl:text-[36px] font-[600]">
            Let's Discuss Your Project
          </h2>
          <p className="text-center text-[#FFFFFF] text-[18px] lg:text-[22px] 2xl:text-[24px] font-[400] py-6">
            Get free consultation and let us know your project idea to turn it
            into
            <br /> an amazing digital product.
          </p>
          <div className="flex justify-center pt-4">
            <button
              className="flex items-center hover:transition-all transition-colors border border-[#F2F2F2] text-[#F2F2F2] hover:bg-[#9400d3] hover:border-[#9400d3] hover:text-[#fff] text-[15px] rounded-full cursor-pointer pl-7 pr-5 py-3"
              onClick={() => {
                executeScroll();
              }}
            >
              Talk To Our Experts
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
    </div>
  );
};
export default Technologies;
