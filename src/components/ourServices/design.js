const OurDesigns = () => {
  const designBox = [
    {
      id: 1,
      title: "UI/UX Design",
      images: [
        require("../../assets/images/ourServices/figma.webp"),
        require("../../assets/images/ourServices/sketch.webp"),
        require("../../assets/images/ourServices/xd.webp"),
      ],
      list: [
        "Interface Design",
        "Interaction Design",
        "Research",
        "Prototyping",
      ],
    },
    {
      id: 2,
      title: "Graphic Design",
      images: [
        require("../../assets/images/ourServices/adobe.webp"),
        require("../../assets/images/ourServices/photoshop.webp"),
        require("../../assets/images/ourServices/after.webp"),
      ],
      list: [
        "Illustration Design",
        "Motion Graphics & Animations",
        "Icon Design",
        "Logo Design",
      ],
    },
  ];

  return (
    <div>
      {/* main title */}
      <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%]">
        <div className="py-4">
          <h6 className="text-[30px] text-[#F2F2F2] lg:text-[40px] 2xl:text-[75px]">
            Our
          </h6>
          <div>
            <img
              alt=""
              className="w-full"
              src={require("../../assets/images/ourServices/Services.webp")}
            />
          </div>
        </div>
      </div>
      {/* boxes */}
      <div className="mx-[4%] pt-20 relative overflow-hidden">
        <div className="w-full design-box rounded-[40px] flex flex-col sm:flex-row justify-between overflow-hidden">
          {/* left side  */}
          <div className="p-10 lg:pl-20 lg:pt-20 lg:pb-20 overflow-hidden w-full lg:w-full xl:w-[60%] 2xl:w-[60%] flex flex-col md:flex-row">
            {designBox?.map((item) => (
              <div
                className={`w-full lg:w-1/2 pr-2 ${
                  item.id === 2 && "mt-10 md:mt-[0px]"
                }`}
                key={item.id}
              >
                <div>
                  <div className="flex flex-wrap">
                    {item?.images?.map((img, index) => (
                      <div
                        className={index === 1 && "px-4 lg:px-14"}
                        key={index}
                      >
                        <img
                          src={img}
                          className="h-10 lg:h-12 2xl:h-14"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-[25px] lg:text-[28px] 2xl:text-[36px] font-[600] text-[#FFFFFF] py-8">
                      {item?.title}
                    </h4>
                  </div>
                  {item?.list?.map((list, index) => (
                    <div
                      className={
                        list === "Prototyping" || list === "Logo Design"
                          ? "flex"
                          : "flex pb-6"
                      }
                      key={index}
                    >
                      <div className="w-5 h-5 border border-[#fff] rounded-full mt-[3px]"></div>
                      <div className="w-11/12">
                        <h5 className="text-[16px] 2xl:text-[18px] text-[#F2F2F2] px-4">
                          {list}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* right side  */}
          <div className="w-full lg:w-[40%] 2xl:w-[40%] hidden xl:block relative">
            <div className="absolute h-full right-0">
              <img
                src={require("../../assets/images/ourServices/box1.webp")}
                className="h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurDesigns;
