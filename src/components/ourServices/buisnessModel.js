import { useState } from "react";

const BuissnessModel = () => {
  const [activeTab, setActiveTab] = useState(1);
  // tab content
  const BuissnessModelContent = [
    {
      id: 1,
      title: "Time & Material",
      content:
        "We welcome the obscure vision through Time and Material Model that supports the Agile Development Process. This is a model where the client only pays for the time and resources spent on the project.",
      image: require("../../assets/images/ourServices/time.webp"),
    },
    {
      id: 2,
      title: "Fix Scope Model",
      content:
        "We welcome the crystal clear vision of our clients and provide the best web and mobile app solutions through Fix Scope Model. Fix Scope Model is the best model to get the complete solution under a fixed budget.",
      image: require("../../assets/images/ourServices/scopeModel.webp"),
    },
    {
      id: 3,
      title: "Hire Team",
      content:
        "The Extended Team is a model where the client can control the entire development team remotely. It is cost-effective as the entire team is hired remotely and does not require the investment in the infrastructure still they have control and coordination with the team.The best part is the client hires them on contract only after all the due diligence and can relieve them upon completion of the project or modules.",
      image: require("../../assets/images/ourServices/hireTeam.webp"),
    },
  ];
  return (
    <div>
      {/* boxes */}
      <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] pt-20">
        <div className="pt-20">
          <div className="pt-10 lg:pt-0">
            <h6 className="text-gradient-gold text-[14px] font-[600] tracking-[14px]">
              BUSINESS MODELS
            </h6>
          </div>
          <div className="flex pt-16">
            <div>
              <h2
                className={`text-[13px] sm:text-[16px] lg:text-[24px] pb-4  cursor-pointer  text-[#F2F2F2] ${
                  activeTab === 1
                    ? "opacity-[100%]  border-b-2 "
                    : "opacity-[50%] hover:opacity-[100%] hover:border-b-2"
                }`}
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                Time & Material
              </h2>
            </div>
            <div className="px-10">
              <h2
                className={`text-[13px] sm:text-[16px] lg:text-[24px] pb-4 cursor-pointer text-[#F2F2F2] ${
                  activeTab === 2
                    ? "opacity-[100%] border-b-2 "
                    : "opacity-[50%] hover:opacity-[100%] hover:border-b-2 "
                }`}
                onClick={() => {
                  setActiveTab(2);
                }}
              >
                Fix Scope Model
              </h2>
            </div>
            <div>
              <h2
                className={`text-[13px] sm:text-[16px] lg:text-[24px] pb-4 cursor-pointer text-[#F2F2F2] ${
                  activeTab === 3
                    ? "opacity-[100%] border-b-2"
                    : "opacity-[50%] hover:opacity-[100%] hover:border-b-2"
                }`}
                onClick={() => {
                  setActiveTab(3);
                }}
              >
                Hire Team
              </h2>
            </div>
          </div>
          {/*  */}
          <div className="py-28">
            {BuissnessModelContent?.map(
              (item, index) =>
                item.id === activeTab && (
                  <div
                    className="flex flex-col lg:flex-row items-center"
                    key={index}
                  >
                    <div className="w-full lg:w-6/12 flex justify-center items-center">
                      <div
                        className={`img-wrapper ${
                          item.id === activeTab ? "change" : ""
                        }`}
                      >
                        <img src={item.image} alt="" className="h-[450px]" />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 pt-8 lg:pt-0 lg:px-4">
                      <h1 className="text-[#F2F2F2] font-[400] text-[22px] lg:text-[30px] 2xl:text-[36px]">
                        {item.title}
                      </h1>
                      <p className="text-[#F2F2F2] font-[400] text-[20px] 2xl:text-[24px] opacity-[60%] pt-2">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuissnessModel;
