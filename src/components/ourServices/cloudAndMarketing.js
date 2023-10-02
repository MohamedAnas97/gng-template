const CloudAndComputing = () => {
  // lists of cloud computting
  const cloudComputingLists = {
    list: [
      {
        id: 1,
        title: "Cloud App Development",
      },
      {
        id: 2,
        title: "Cloud Configuration",
      },
      {
        id: 3,
        title: "Cloud Integration",
      },
      {
        id: 4,
        title: "Cloud Security",
      },
      {
        id: 5,
        title: "Cloud Server Solutions",
      },
      {
        id: 6,
        title: "Cloud Server SolutionsCloud Migration",
      },
    ],
    images: [
      {
        img: require("../../assets/images/ourServices/aws.webp"),
        name: "Amazon AWS",
      },
      {
        img: require("../../assets/images/ourServices/microsoft-azure.webp"),
        name: "Microsoft Azure",
      },
      {
        img: require("../../assets/images/ourServices/kubernetes.webp"),
        name: "Kubernetes",
      },
      {
        img: require("../../assets/images/ourServices/digital-ocean.webp"),
        name: "Digital Ocean",
      },
      {
        img: require("../../assets/images/ourServices/google-cloud.webp"),
        name: "Google Cloud",
      },
    ],
  };
  //   list of digital marketing
  const digitalMarkiting = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
    },
    {
      id: 2,
      title: "Social Media Marketing (SMM)",
    },
    {
      id: 3,
      title: "Pay Per Click (PPC) Advertisement",
    },
    {
      id: 4,
      title: "Social Media Advertising",
    },
    {
      id: 5,
      title: "App Store Optimization (ASO)",
    },
    {
      id: 6,
      title: "Content Writing and Marketing",
    },
  ];
  return (
    <div>
      {/* boxes */}
      <div className="mx-[4%] pt-20 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* left side  */}
          <div className=" design-box5 rounded-[40px] flex flex-col lg:flex-row justify-between overflow-hidden w-full lg:w-[60%]">
            <div className="p-10 lg:px-10 lg:pt-20 lg:pb-10 2xl:px-20 2xl:pt-20 2xl:pb-10 overflow-hidden w-full">
              <div className="flex items-center justify-between flex-col md:flex-row pb-10 ">
                <h5 className="text-[36px] font-[600] text-[#FFFFFF] ">
                  Cloud Computing
                </h5>
                <button className="border rounded-full text-[#F2F2F2] border-[#F2F2F2] text-[16px] font-[300] py-3 px-6 hover:bg-[#9fc683] hover:border-[#9fc683] mt-4 lg:mt-0">
                  Explore all Mobile Services
                </button>
              </div>
              <div className="pt-10 border-t border-[rgba(255, 255, 255, 0.2)] flex flex-col md:flex-row">
                <div className="w-full md:w-5/12">
                  {cloudComputingLists?.list?.map((item, index) => (
                    <div className="flex py-3" key={index}>
                      <div className="w-5 h-5 border border-[#fff] rounded-full mt-[5px]"></div>
                      <div className="w-11/12 pt-[1px]">
                        <h5 className="text-[16px] 2xl:text-[18px] text-[#F2F2F2] px-4">
                          {item.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full md:w-7/12 flex flex-wrap">
                  {cloudComputingLists?.images?.map((item, index) => (
                    <div
                      className="flex flex-col items-center w-6/12 sm:w-6/12 lg:w-6/12 xl:w-4/12 py-2 sm:py-0 px-1 "
                      key={index}
                    >
                      <div className="ml-[-6px] 2xl:ml-[-9px]">
                        <div>
                          <img src={item.img} alt="" className="h-24" />
                        </div>
                      </div>
                      <div className="pt-[1px] xl:pl-1">
                        <h5 className="text-[16px] 2xl:text-[18px] font-[400] text-[#F2F2F2]">
                          {item.name}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className=" design-box6 rounded-[40px] flex flex-col lg:flex-row justify-between overflow-hidden w-full lg:w-[37%] mt-6 lg:mt-0">
            <div className="p-10 lg:px-10 lg:pt-20 lg:pb-10 2xl:px-20 2xl:pt-20 2xl:pb-10 overflow-hidden w-full">
              <div className="flex items-center justify-between flex-col md:flex-row pb-10 ">
                <h5 className="text-[36px] font-[600] text-[#FFFFFF] ">
                  Digital Marketing
                </h5>
                <div className="rounded-full border p-[10px] cursor-pointer">
                  <span>
                    <img
                      src={require("../../assets/icons/right-arrow2.png")}
                      alt=""
                      className="h-6"
                    />
                  </span>
                </div>
              </div>
              <div className="pt-10 border-t border-[rgba(255, 255, 255, 0.2)] flex flex-col md:flex-row">
                <div className="w-full">
                  {digitalMarkiting?.map((item, index) => (
                    <div className="flex py-3" key={index}>
                     <div className="w-5 h-5 border border-[#fff] rounded-full mt-[5px]"></div>
                      <div className="w-11/12 pt-[1px]">
                        <h5 className="text-[16px] 2xl:text-[18px] text-[#F2F2F2] px-4">
                          {item.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CloudAndComputing;
