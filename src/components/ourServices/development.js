const OurDesigns = () => {
  const designBox = [
    {
      id: 1,
      title: "Game Development",
      images: [
        require("../../assets/images/ourServices/unity.webp"),
        require("../../assets/images/ourServices/blender.webp"),
        require("../../assets/images/ourServices/unreal.webp"),
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
      title: "Unity Development",
      images: [require("../../assets/images/ourServices/unity.webp")],
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
      {/* boxes */}
      <div className="mx-[4%] pt-20 relative overflow-hidden">
        <div className="w-full design-box2 p-10 lg:p-20 rounded-[40px] flex flex-col sm:flex-row lg:items-center justify-between overflow-hidden">
          {/* left side  */}
          <div className=" overflow-hidden w-full lg:w-full xl:w-[70%] 2xl:w-[60%] flex flex-col md:flex-row">
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
                        <img src={img} className="h-14" alt="" />
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
          <div className="w-full lg:w-[30%] 2xl:w-[40%] hidden xl:block relative h-full">
            <div className="flex justify-center items-center h-full">
              <img
                src={require("../../assets/images/ourServices/game.webp")}
                className="lg:h-[350px] 2xl:h-[460px]"
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
