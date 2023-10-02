const Banner = () => {
  const work = {
    column1: [
      {
        id: 1,
        title: "Lets Soulmate Matrimony  App",
        content: "UI/UX Design, Website & Mobile App Development.",
        image: require("../../assets/images/our-work/col1.webp"),
      },
      {
        id: 2,
        title: "Blockchain based Gaming Platform",
        content: "UI/UX Design, Website & Mobile App Development.",
        image: require("../../assets/images/our-work/col2.webp"),
      },
    ],
    column2: [
      {
        id: 1,
        title: "Gold Souk Ecommerce Platform",
        content: "UI/UX Design. Website & Mobile App Development.",
        image: require("../../assets/images/our-work/passio.webp"),
      },
      {
        id: 2,
        title: "NFT Platform & Marketplace",
        content: "UI/UX Design, Website & Mobile App Development.",
        image: require("../../assets/images/our-work/nft.webp"),
      },
    ],
  };
  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] py-4 pt-10 lg:pt-32">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between py-4">
        <h6 className="text-[#fdae21] text-[14px] font-[600] tracking-[14px]">
          OUR WORK
        </h6>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        {/* left side */}
        <div className="w-full lg:w-[49%]">
          <div className="pt-4 flex flex-col items-center lg:items-start">
            <div className="py-2 w-7/12 lg:w-10/12 2xl:w-11/12">
              <img
                src={require("../../assets/images/our-work/current.webp")}
                alt=""
              />
            </div>
            <div className="pt-10 pb-20 w-7/12 lg:w-10/12 2xl:w-11/12">
              <img
                src={require("../../assets/images/our-work/projects.webp")}
                alt=""
              />
            </div>
          </div>
          <div className="lg:pt-8 scale-box-container">
            {work?.column1.map((item) => (
              <div key={item.id} className="py-5">
                <div className="img-box">
                  <img src={item.image} alt="" />
                </div>
                <div className="pt-2">
                  <h2 className="text-white text-[22px] lg:text-[25px] 2xl:text-[34px] fonht-[400] py-1">
                    {item.title}
                  </h2>
                  <p className="text-[#7B7B7B] text-[16px] lg:text-[18px] 2xl:text-[22px] fonht-[400]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="w-full lg:w-[49%] scale-box-container">
          {work?.column2.map((item) => (
            <div key={item.id} className="py-5">
              <div className="img-box">
                <img src={item.image} alt="" />
              </div>
              <div className="pt-2">
                <h2 className="text-white text-[22px] lg:text-[25px] 2xl:text-[34px] fonht-[400] py-1">
                  {item.title}
                </h2>
                <p className="text-[#7B7B7B] text-[16px] lg:text-[18px] 2xl:text-[22px] fonht-[400]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Banner;
