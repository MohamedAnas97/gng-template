const Banner = ({ executeScroll }) => {
  const benefits = [
    {
      id: 1,
      title: "Enterprise Mobility <br/> Solutions",
      img: require("../../assets/images/ourSolutions/enterprise1.webp"),
    },
    {
      id: 2,
      title: "Cloud Computing <br/>  Solutions",
      img: require("../../assets/images/ourSolutions/cloud2.png"),
    },
    {
      id: 3,
      title: "DevOps <br/>  Services",
      img: require("../../assets/images/ourSolutions/devOps3.png"),
    },
    {
      id: 4,
      title: "Software Solutions <br/>  for Startup",
      img: require("../../assets/images/ourSolutions/startups.webp"),
    },
    {
      id: 5,
      title: "Product Engineering  <br/> Services",
      img: require("../../assets/images/ourSolutions/product5.png"),
    },
    {
      id: 6,
      title: "Digital Tansformation <br/>  Services",
      img: require("../../assets/images/ourSolutions/digital6.png"),
    },
  ];
  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%]">
      <div className="py-4">
        <div>
          <h6 className="text-[30px] text-[#F2F2F2] lg:text-[40px] 2xl:text-[75px]">
            Our
          </h6>
          <div>
            <img
              alt=""
              className="w-full"
              src={require("../../assets/images/ourSolutions/solutions.webp")}
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="pt-6 lg:pt-20">
        <div className="lg:pt-16">
          <div className="pt-10 lg:pt-0">
            <h6 className="text-gradient-gold text-[14px] font-[600] tracking-[14px] uppercase">
              What we Do
            </h6>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between py-4">
            {/* left side  */}
            <div className="w-full lg:w-5/12 pr-4 lg:pr-0">
              <h1 className="text-[20px] lg:text-[32px] 2xl:text-[40px] font-[400] text-left text-white">
                We design and develop user centric SaaS products, web app and
                mobile applications since a decade.
              </h1>
              <p className="text-[16px] lg:text-[22px] 2xl:text-[24px] text-[#B2B2B2] font-[300] pt-4">
                We work with diverse brands, organizations, enterprises,
                startups and individuals to create powerful softwares from
                excellent idea.
              </p>
            </div>
            {/* right side */}
            <div className="w-full lg:w-6/12 flex flex-row justify-center pt-12 lg:pt-0">
              <div className="w-[50%] sm:w-[48%] lg:w-[40%] xl:w-[35%] 2xl:w-[35%] flex flex-col">
                {/* box 1 */}
                <div className="p-2">
                  <div className="bg-[#242424] enterprise-gradient rounded-[10px] flex flex-col items-center p-10 w-[100%]">
                    <img
                      src={require("../../assets/images/ourSolutions/enterprise.webp")}
                      alt=""
                      className="h-12 md:h-16"
                    />
                    <h6 className="text-[12px] md:text-[16px]  w-full pt-1 text-[#F2F2F2] text-center font-[400]">
                      Enterprises
                    </h6>
                  </div>
                </div>
                {/* box 2 */}
                <div className="p-2">
                  <div className="bg-[#242424] startup-gradient rounded-[10px] flex flex-col items-center p-10 w-[100%]">
                    <img
                      src={require("../../assets/images/ourSolutions/startups.webp")}
                      alt=""
                      className="h-12 md:h-16"
                    />
                    <h6 className="text-[12px] md:text-[16px] w-full pt-1 text-[#F2F2F2] text-center font-[400]">
                      Startups
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-[50%] sm:w-[48%] lg:w-[40%] xl:w-[35%] 2xl:w-[35%] pt-14 flex flex-col">
                {/* box 1 */}
                <div className="p-2">
                  <div className="bg-[#242424] w-full organiztion-gadient rounded-[10px] flex flex-col items-center w-[100%] p-10">
                    <img
                      src={require("../../assets/images/ourSolutions/organizations.webp")}
                      alt=""
                      className="h-12 md:h-16"
                    />
                    <h6 className="text-[12px] md:text-[16px] pt-1 text-[#F2F2F2] text-center font-[400]">
                      Organizations
                    </h6>
                  </div>
                </div>
                {/* box 2 */}
                <div className="p-2">
                  <div className="bg-[#242424] individuals-gradient w-full rounded-[10px] flex flex-col items-center w-[100%] p-10">
                    <img
                      src={require("../../assets/images/ourSolutions/individuals.webp")}
                      alt=""
                      className="h-12 md:h-16"
                    />
                    <h6 className="text-[12px] md:text-[16px] pt-1 text-[#F2F2F2] text-center font-[400]">
                      Individuals
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          {benefits.map((item) => (
            <div
              className="w-full sm:w-[45%] lg:w-[32%] px-10 pt-12 pb-7 bg-[#242424] rounded-[40px] my-4 boxGradient cursor-pointer"
              key={item.id}
            >
              <div>
                <img src={item.img} className="h-[3rem] 2xl:h-[4rem]" alt="" />
              </div>
              <h1
                className="text-[16px] font-[400] text-left text-[#F2F2F2] py-5"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h1>
            </div>
          ))}
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
export default Banner;
