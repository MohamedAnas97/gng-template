import { useState } from "react";

const Solutions = ({ executeScroll }) => {
  // selected menu
  const [selectedMenu, setSelectedMenu] = useState({
    id: 1,
    menu_title: "E-Commerce",
    title: "E-commerce",
    content:
      "Your customers not only want great products but also highly personalised shopping experience. we will help you optimise efficiency across the value chain by making your business more responsive.",
    list: ["Manage Inventory", "Sales Analytics", "POS Solution"],
    image1: require("../../assets/images/ourSolutions/projectImages/ecommerce1.png"),
    image2: require("../../assets/images/ourSolutions/projectImages/ecommerce2.png"),
    image3: require("../../assets/images/ourSolutions/projectImages/ecommerce3.png"),
  });

  // demand solutions
  const demandSolutions = [
    {
      id: 1,
      title: "Grocery Delivery",
      image: require("../../assets/images/insights/box4.webp"),
    },
    {
      id: 2,
      title: "Courier & Logistics",
      image: require("../../assets/images/insights/box3.webp"),
    },
    {
      id: 3,
      title: "City Guide App",
      image: require("../../assets/images/insights/box2.webp"),
    },
    {
      id: 4,
      title: "Laundry App",
      image: require("../../assets/images/insights/box1.webp"),
    },
    {
      id: 5,
      title: "Car Booking",
      image: require("../../assets/images/insights/box1.webp"),
    },
    {
      id: 6,
      title: "Appointment",
      image: require("../../assets/images/insights/box1.webp"),
    },
    {
      id: 7,
      title: "Home Repair App",
      image: require("../../assets/images/insights/box1.webp"),
    },
    {
      id: 8,
      title: "Beauty & Salon",
      image: require("../../assets/images/insights/box1.webp"),
    },
  ];

  // menus list
  const menus_list = [
    {
      id: 1,
      menu_title: "E-Commerce",
      title: "E-commerce",
      content:
        "Your customers not only want great products but also highly personalised shopping experience. we will help you optimise efficiency across the value chain by making your business more responsive.",
      list: ["Manage Inventory", "Sales Analytics", "POS Solution"],
      image1: require("../../assets/images/ourSolutions/projectImages/ecommerce1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/ecommerce2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/ecommerce3.png"),
    },
    {
      id: 2,
      menu_title: "Healthcare",
      title: "Healthcare",
      content:
        "let's take healthcare to the next level by using effective technologies, Drive-in more patients’ engagement with customer-centric apps with indomitable features to simplify their lives and become their health instructor.",
      list: [
        "Online Appointment",
        "Track Daily Routine",
        "Order Medicines Online",
      ],
      image1: require("../../assets/images/ourSolutions/projectImages/health1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/health2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/health3.png"),
    },
    {
      id: 3,
      menu_title: "Fitness",
      title: "Fitness",
      content:
        "All fitness freaks want a great instructor who can guide them better and track their daily activities. let's make fitness enthusiast's experience more energetic by taking your business online.",
      list: ["Online Training Sessions", "Fitness Tracker", "Smart Watch App"],
      image1: require("../../assets/images/ourSolutions/projectImages/fitness1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/fitness1.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/fitness3.png"),
    },
    {
      id: 4,
      menu_title: "Food & Drink",
      title: "Food & Drink",
      content:
        "Drive your potential customers into a comfort zone where ordering online food becomes a cakewalk with complete digital synced solutions in food delivery.",
      list: ["Order Tracking", "In-App Payments", "Realtime Tracking"],
      image1: require("../../assets/images/ourSolutions/projectImages/food1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/food2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/food3.png"),
    },
    {
      id: 5,
      menu_title: "Real Estate",
      title: "Real Estate",
      content:
        "When it comes to give convenient services to your customers to sell, buy or rent properties, with Real Estate App Development Solutions, you can accomplish all purposes to amplify your business in a contemporary way.",
      list: [
        "Easy Properties Listing",
        "Overview Statistics",
        "Advanced Search Criteria",
      ],
      image1: require("../../assets/images/ourSolutions/projectImages/estate1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/estate2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/estate3.png"),
    },
    {
      id: 6,
      menu_title: "Travel",
      title: "Travel",
      content:
        "Give your customers the best experience at their finger touch to make their travel experience more memorable. Customers like to use apps in which they can do everything from starting to the ending point.",
      list: [
        "Online Ticket / Hotel Booking",
        "Tour Guide",
        "Currency Converter",
      ],
      image1: require("../../assets/images/ourSolutions/projectImages/travel1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/travel2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/travel3.png"),
    },
    {
      id: 7,
      menu_title: "Sports",
      title: "Sports",
      content:
        "Give your user a great experience to watch matches and get each minute updates from anywhere and seems like they are in the stadiums without buying costly tickets and waiting in the long traffics.",
      list: [
        "Online Tickets",
        "Live Stream & Score Updates",
        "Sports News & Fun Games",
      ],
      image1: require("../../assets/images/ourSolutions/projectImages/sports1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/sports2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/sports3.png"),
    },
    {
      id: 8,
      menu_title: "Education",
      title: "Education",
      content:
        "After the covid pandemic, we all can see the raise in the online education platform. parents nowadays, allow even their children to use smart devices to download an educational-based app to enhance their learning habits.",
      list: [
        "Live Classes",
        "E-Library for Managing Notes & Tutorials",
        "Online Examination",
      ],
      image1: require("../../assets/images/ourSolutions/projectImages/education1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/education2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/education3.png"),
    },
    {
      id: 9,
      menu_title: "Business",
      title: "Business",
      content:
        "Using enterprise mobility solutions, businesses have tremendous opportunities to modernize their operations to defeat challenges, boost productivity, enrich customer services and earn more revenue.",
      list: ["Sales & Marketing", "Employee Management", "HR Portals"],
      image1: require("../../assets/images/ourSolutions/projectImages/buisness1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/buisness2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/buisness3.png"),
    },
    {
      id: 10,
      menu_title: "Entertainment",
      title: "Entertainment",
      content:
        "We all know how much entertainment important in our life or in the weekend to burn out our stress, let's give your user the best experience to take their stress out and give them a fresh mind to continue their daily routine again.",
      list: ["Booking Tickets", "Online Entertainment", "Gaming"],
      image1: require("../../assets/images/ourSolutions/projectImages/entertaiment1.png"),
      image2: require("../../assets/images/ourSolutions/projectImages/entertaiment2.png"),
      image3: require("../../assets/images/ourSolutions/projectImages/entertaiment3.png"),
    },
  ];

  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] pt-20">
      <div className="py-4">
        <div>
          <h6 className="text-[30px] text-[#F2F2F2] lg:text-[40px] 2xl:text-[85px]">
            Our Industry wise
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
      <div className="flex flex-col lg:flex-row justify-between pt-20">
        {/* links */}
        <div className="flex flex-col justify-between lg:flex-row pt-6 lg:pt-0 w-full lg:w-3/12">
          <div>
            <div className="sticky">
              <ul className="flex flex-row flex-wrap justify-around lg:flex-col lg:justify-start">
                {menus_list?.map((item) => (
                  <li
                    className={`text-[16px] lg:text-[20px] 2xl:text-[24px]  font-[400] hover:text-[#fdae21] py-2 cursor-pointer pr-5 lg:pr-0 ${
                      item?.id === selectedMenu?.id
                        ? "text-gradient-gold"
                        : "text-[#fff] opacity-[50%] hover:opacity-[100%] hover:text-[#fdae21]"
                    }`}
                    onClick={() => {
                      setSelectedMenu(item);
                    }}
                  >
                    {item?.menu_title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="w-full lg:w-9/12">
          <div className="flex justify-center lg:justify-between items-center py-10 lg:py-0">
            <h1 className="text-[30px] text-center lg:text-left 2xl:text-[48px] text-[#F2F2F2] ">
              {selectedMenu?.title}
            </h1>
            {/* <div className="flex justify-center hidden lg:block">
              <button className="flex items-center border border-[#F2F2F2] text-[#F2F2F2] hover:bg-[#fdae21] hover:border-[#fdae21] text-[15px] rounded-full cursor-pointer pl-7 pr-5 py-3">
                Explore More
                <span className="pl-4">
                  <img
                    src={require("../../assets/icons/arrow-right.png")}
                    alt=""
                    className="h-[25px]"
                  />
                </span>
              </button>
            </div> */}
          </div>
          <div className="w-full lg:w-8/12 lg:pt-2">
            <p className="text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] leading-[43px] font-[300]">
              {selectedMenu?.content}
            </p>
          </div>
          {selectedMenu?.list?.map((list) => (
            <div className="flex pt-4">
              <div className="w-6 h-6 border border-[#fdae21] rounded-full mt-[5px]"></div>
              <h5 className="text-[20px] lg:text-[22px] 2xl:text-[24px] text-[#F2F2F2] px-4">
                {list}
              </h5>
            </div>
          ))}
          {/*  */}
          {/* <div className="block lg:hidden">
            <div className="flex justify-center pt-10 w-full">
              <button
                className="flex items-center border border-[#F2F2F2] text-[#F2F2F2] hover:bg-[#ED184F] hover:border-[#ED184F] text-[15px] rounded-full cursor-pointer pl-7 pr-5 py-3"
                onClick={() => executeScroll()}
              >
                Explore More
                <span className="pl-4">
                  <img
                    src={require("../../assets/icons/arrow-right.png")}
                    alt=""
                    className="h-[25px]"
                  />
                </span>
              </button>
            </div>
          </div> */}
          {/*  */}
          <div className="flex flex-wrap justify-between pt-8">
            <div className="w-full md:w-8/12 h-full md:pr-2">
              <div>
                <img src={selectedMenu?.image1} className="rounded-lg" alt="" />
              </div>
            </div>
            <div className="w-full md:w-4/12 h-full md:pl-3">
              <div className="pt-3 md:pt-0">
                <img src={selectedMenu?.image2} className="rounded-lg" alt="" />
              </div>
              <div className="pt-3">
                <img src={selectedMenu?.image3} className="rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* demand solutions */}
      <div className="pt-32">
        <div className="w-full bg-[#242424] p-8 lg:p-14 2xl:p-20 rounded-lg">
          <div className="flex justify-center lg:justify-between items-center">
            <h1 className="text-[25px] lg:text-[30px] text-center lg:text-left 2xl:text-[36px] text-[#F2F2F2]">
              On-demand Solutions
            </h1>
          </div>
          <div className="w-full">
            <p className="text-[18px] lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] leading-[43px] font-[300] pt-2">
              Make your customers digital banking and investing experience
              smooth without irritation like banking long queue lines.
            </p>
          </div>
          <div className="flex flex-wrap py-3">
            {demandSolutions?.map((item) => (
              <div className="flex pt-4 w-full sm:w-6/12 md:w-6/12 lg:w-4/12 pb-2">
                <div className="w-6 h-6 border border-[#fdae21] rounded-full mt-[5px]"></div>
                <h5 className="text-[20px] lg:text-[22px] 2xl:text-[24px] text-[#F2F2F2] px-4">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center lg:justify-start pt-10">
            <button className="flex items-center border border-[#F2F2F2] text-[#F2F2F2] hover:bg-[#fdae21] hover:border-[#fdae21] text-[16px] rounded-full cursor-pointer pl-7 pr-5 py-3">
              Explore More
              <span className="pl-4">
                <img
                  src={require("../../assets/icons/arrow-right.png")}
                  alt=""
                  className="h-[25px]"
                />
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Solutions;
