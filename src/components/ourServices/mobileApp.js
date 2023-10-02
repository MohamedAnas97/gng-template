import { useState } from "react";

const OurDesigns = () => {
  const [activeDevelopment, setActiveDevelopment] = useState(1);
  // all lists of development
  const mobileApps = [
    {
      id: 1,
      title: "Development",
      images: [
        {
          img: require("../../assets/images/ourServices/IOS.webp"),
          name: "iOS App <br/> Development",
        },
        {
          img: require("../../assets/images/ourServices/android2.webp"),
          name: "Android App <br/> Development",
        },
        {
          img: require("../../assets/images/ourServices/flutter.webp"),
          name: "Flutter App <br/> Development",
        },
        {
          img: require("../../assets/images/ourServices/react-native.webp"),
          name: "React Native App <br/> Development",
        },
      ],
    },
    {
      id: 2,
      title: "Design",
      images: [
        {
          img: require("../../assets/images/ourServices/app-research.webp"),
          name: "App <br/> Research",
        },
        {
          img: require("../../assets/images/ourServices/ui-ux.webp"),
          name: "UI/UX  <br/> Design",
        },

        {
          img: require("../../assets/images/ourServices/ui-interaction.webp"),
          name: "UI <br/> Interaction",
        },
        {
          img: require("../../assets/images/ourServices/prototype-design.webp"),
          name: "Prototype <br/> Design",
        },
      ],
    },
  ];
  return (
    <div>
      {/* boxes */}
      <div className="mx-[4%] pt-20 relative overflow-hidden">
        <div className="w-full design-box3 rounded-[40px] flex flex-col lg:flex-row justify-between overflow-hidden">
          {/* left side  */}
          <div className="p-10 lg:pl-10 lg:pt-20 lg:pb-20 lg:pr-10 2xl:pl-20 2xl:pt-20 2xl:pb-20 2xl:pr-20 lg:pr-0 overflow-hidden w-full lg:w-full xl:w-[60%] 2xl:w-[55%] h-full">
            <div className="flex items-center flex-col md:flex-row justify-between  pb-6 ">
              <h5 className="text-[36px] font-[600] text-[#FFFFFF] ">
                Mobile App
              </h5>
            </div>
            {/* buttons */}
            <div className="flex flex-wrap items-center py-7 border-t border-b border-[#78787880]">
              <div className="" onClick={() => setActiveDevelopment(1)}>
                <h5
                  className={`${
                    activeDevelopment === 1
                      ? "text-[#FFFFFF]"
                      : "text-[#F2F2F280] hover:text-[#fff]"
                  } text-[18px] lg:text-[20px] 2xl:text-[24px] font-[500]  cursor-pointer`}
                >
                  Development
                </h5>
              </div>
              <div className="px-10" onClick={() => setActiveDevelopment(2)}>
                <h5
                  className={`${
                    activeDevelopment === 2
                      ? "text-[#FFFFFF]"
                      : "text-[#F2F2F280] hover:text-[#fff]"
                  } text-[18px] lg:text-[20px] 2xl:text-[24px] font-[500]  cursor-pointer`}
                >
                  Design
                </h5>
              </div>
            </div>
            {/* icons  */}
            <div className="pt-10">
              {mobileApps?.map(
                (item) =>
                  item.id === activeDevelopment && (
                    <div key={item.id} className="flex flex-wrap w-full">
                      {item?.images?.map((img, index) => (
                        <div
                          key={index}
                          className={`flex flex-col justify-between w-1/2 lg:w-[25%] mb-10 lg:mb-0`}
                        >
                          <div>
                            <img src={img.img} className="h-20" alt="" />
                            <div>
                              <h3
                                className="text-[16px] 2xl:text-[18px] font-[400] text-[#FFFFFF]"
                                dangerouslySetInnerHTML={{ __html: img.name }}
                              ></h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>
          {/* right side  */}
          <div className="w-full lg:w-[40%] 2xl:w-[40%] hidden xl:block relative ">
            <div className="absolute h-full right-0">
              <img
                src={require("../../assets/images/ourServices/box3.webp")}
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
