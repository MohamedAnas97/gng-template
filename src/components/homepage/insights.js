const OurWork = () => {
  const work = [
    {
      id: 1,
      title:
        "Why is Micro Frontend Architecture an Apt Solution for Startups to Build a Scalable Frontend?",
      image: require("../../assets/images/insights/box4.webp"),
    },
    {
      id: 2,
      title: "Having a Niche as a UI/UX Designer | A Treat For Designers!",
      image: require("../../assets/images/insights/box3.webp"),
    },
    {
      id: 3,
      title: "Web 3.0 – Everything You Need to Know About",
      image: require("../../assets/images/insights/box2.webp"),
    },
    {
      id: 4,
      title: "The Complete Overview of Mobile App Development Process",
      image: require("../../assets/images/insights/box1.webp"),
    },
  ];

  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] py-8">
      <div className="">
        <h6 className="text-[#F2F2F2] font-[400] text-[30px] lg:text-[40px] 2xl:text-[48px]">
          Insights
        </h6>
      </div>
      <div className="flex flex-col lg:flex-row justify-between pt-10">
        {/* links */}
        <div className="flex flex-col justify-between lg:flex-row pt-6 lg:pt-0 w-full lg:w-3/12">
          <div>
            <div className="sticky">
              <ul className="flex flex-row flex-wrap justify-around lg:flex-col lg:justify-start">
                <li className="text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#F72165] font-[400] hover:text-[#F72165] py-2 cursor-pointer pr-5 lg:pr-0">
                  All
                </li>
                <li className="text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#fff] opacity-[50%] font-[400] hover:opacity-[100%] hover:text-[#F72165] py-2 cursor-pointer pr-5 lg:pr-0">
                  Blog
                </li>
                <li className="text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#fff] opacity-[50%] font-[400] hover:opacity-[100%] hover:text-[#F72165] py-2 cursor-pointer pr-5 lg:pr-0">
                  Podcasts
                </li>
                <li className="text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#fff] opacity-[50%] font-[400] hover:opacity-[100%] hover:text-[#F72165] py-2 cursor-pointer pr-5 lg:pr-0">
                  Infographics
                </li>
                <li className="text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#fff] opacity-[50%] font-[400] hover:opacity-[100%] hover:text-[#F72165] py-2 cursor-pointer pr-5 lg:pr-0">
                  Whitepapers
                </li>
                <li className="text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#fff] opacity-[50%] font-[400] hover:opacity-[100%] hover:text-[#F72165] py-2 cursor-pointer pr-5 lg:pr-0">
                  Videos
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="w-full lg:w-9/12">
          {/* common box */}
          <div className="flex flex-wrap flex-row md:justify-between">
            {work?.map((item, index) => (
              <div key={index} className="w-full md:w-[47%] lg:w-[48%] py-4 ">
                <div className="w-full p-4 rounded-lg bg-[#1F1F1F] h-full">
                  <div>
                    <img
                      src={item.image}
                      className="w-full rounded-lg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="py-2 text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#FFFFFF] font-[300]">
                      {item.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
