import { useNavigate, useLocation } from "react-router-dom";
const ProjectInquiries = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("data", location);
  // all sevices
  const allServices = [
    {
      id: 1,

      title: "Web App Development",
      developmentName: [
        "ReactJs Development",
        "Vue.js Development",
        "AngularJs Development",
        "Node.js Development",
        "Laravel Development",
        "Golang Development",
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      developmentName: [
        "iOS App Development",
        "Android App Development",
        "Flutter App Development",
        "React Native App Development",
      ],
    },
    {
      id: 3,
      title: "Blockchain Development",
      developmentName: [
        "Smart Contract Development",
        "NFT Development",
        "Crypto Tokens Development",
        "Decentralized App Development",
      ],
    },
    // {
    //   id: 4,
    //   title: "Services",
    //   developmentName: [
    //     "Marketing Services",
    //     "Cloud Storage & Hosting Services",
    //   ],
    // },
  ];
  return (
    <div className="footer-container">
      <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] py-4 ">
        {/* row 2 */}
        <div
          className={`flex justify-between flex-wrap md:flex-row py-8 ${
            location?.pathname === "/privacy-policy" ? "hidden" : "block"
          }`}
        >
          {allServices?.map((item, index) => (
            <ul
              className="w-[50%] sm:w-[50%] md:w-[49%] lg:w-[30%] py-4 lg:pr-4"
              key={index}
            >
              <li className="text-[14px] text-center lg:text-left sm:text-[18px] text-[#F2F2F2] py-3">
                {item?.title}
              </li>
              {item.developmentName?.map((services, developmentIndex) => (
                <li
                  className="text-[14px] text-center lg:text-left sm:text-[18px] text-[#F2F2F2] opacity-[50%] py-2"
                  key={developmentIndex}
                >
                  {services}
                </li>
              ))}
            </ul>
          ))}
        </div>
        {/* row 3 */}
        <div
          className={`pt-8 pb-10 ${
            location?.pathname === "/privacy-policy" ? "hidden" : "block"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center bg-[rgba(0,0,0,0.5)] px-6 py-8">
            <div>
              <h2 className="text-[24px] text-[#F2F2F2] font-[400] hidden lg:block">
                Looking for <br />
                career opportunity?
              </h2>
              <h2 className="text-[24px] text-[#F2F2F2] text-center font-[400] block lg:hidden">
                Looking for career opportunity?
              </h2>
            </div>
            {/* social icons */}
            <div>
              {/* email */}
              <div className="flex items-center py-4 lg:py-3">
                <div className="w-[9%]">
                  <img
                    src={require("../../assets/images/commonComponents/email.png")}
                    alt=""
                    className="h-4 w-5"
                  />
                </div>
                <div className="w-[30%]">
                  <h6 className="text-[14px] font-[400] text-white opacity-[50%] px-4">
                    Email
                  </h6>
                </div>
                <div className="w-[60%]">
                  <h6 className="text-[16px] font-[400] text-[#F2F2F2]">
                    info@gnginfotech.com
                  </h6>
                </div>
              </div>
              {/* call */}
              <div className="flex">
                <div className="w-[10%] pl-1">
                  <img
                    src={require("../../assets/images/commonComponents/call.png")}
                    alt=""
                    className="h-5"
                  />
                </div>
                <div className="w-[30%]">
                  <h6 className="text-[14px] font-[400] text-white opacity-[50%] px-4">
                    Call
                  </h6>
                </div>
                <div className="w-[60%]">
                  <h6 className="text-[16px] font-[400] text-[#F2F2F2]">
                    +971-04-3349500
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex items-center pt-6 lg:py-0">
              <button
                className="border rounded-full text-[#F2F2F2] border-[#F2F2F2] text-[16px] font-[500] py-3 px-6 hover:bg-[#fdae21] hover:border-[#fdae21] hover:text-[#fff]"
                onClick={() => {
                  navigate("/about-us");
                  window.scrollTo({ top: 0 });
                }}
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
        {/* row 4 */}
        <div>
          <div
            className={`flex flex-col lg:flex-row justify-between items-center px-6 py-8 ${
              location?.pathname === "/privacy-policy" ? "hidden" : "block"
            }`}
          >
            <div className="pt-6 flex justify-center lg:justify-start lg:w-1/4">
              <img
                src={require("../../assets/images/commonComponents/logo.png")}
                alt=""
                className="h-12"
              />
            </div>
            {/* address */}
            <div className="py-5 ">
              <div className="flex justify-center lg:justify-start items-center py-4 lg:py-3">
                <div className="">
                  <img
                    src={require("../../assets/images/commonComponents/address.png")}
                    alt=""
                    className="h-5"
                  />
                </div>
                <div>
                  <h6 className="text-[14px] font-[400] text-white opacity-[50%] px-3">
                    UAE
                  </h6>
                </div>
              </div>
              <h2 className="text-[16px] text-center lg:text-left font-[400] text-[#F2F2F2]">
                Office number 1113, 11th floor,
                <br />
                G&G INNOVATIONS INFORMATION TECHNOLOGY L.L.C,
                <br />
                Grosvenor Business Tower,
                <br />
                Barsha Heights - Dubai, UAE
              </h2>
            </div>
            {/* address */}
            {/* <div className="py-5 lg:w-1/4">
              <div className="flex justify-center lg:justify-start items-center py-4 lg:py-3">
                <div className="">
                  <img
                    src={require("../../assets/images/commonComponents/address.png")}
                    alt=""
                    className="h-5"
                  />
                </div>
                <div>
                  <h6 className="text-[14px] font-[400] text-white opacity-[50%] px-3">
                    UAE
                  </h6>
                </div>
              </div>
              <h2 className="text-[16px] text-center lg:text-left font-[400] text-[#F2F2F2]">
                501, Tech Tank Information Technology,
                <br /> Citadel Tower, <br /> Business Bay - Dubai, UAE
              </h2>
            </div> */}
          </div>
        </div>
        {/* row 4 */}
        <div className="">
          <div
            className={`flex flex-col lg:flex-row justify-between py-8 ${
              location?.pathname === "/privacy-policy" ? "px-0" : "px-6"
            }`}
          >
            <div className="pt-2">
              <h6 className="text-[14px] font-[400] text-white text-center lg:text-left opacity-[50%] px-3 py-1">
                © 2023 G&G Infotech. All rights reserved.
              </h6>
              <ul className="flex flex-wrap justify-center lg:justify-start">
                <li
                  className="text-[14px] font-[400] text-white hover:opacity-[100%] cursor-pointer opacity-[50%] px-3 py-1"
                  onClick={() => {
                    navigate("/about-us");
                    window.scrollTo({ top: 0 });
                  }}
                >
                  About Us
                </li>
                <ul className="flex items-center">
                  <li className="hidden lg:block lg:border-l h-[20px] opacity-[50%]"></li>
                </ul>
                <li
                  className="text-[14px] font-[400] text-white hover:opacity-[100%] cursor-pointer opacity-[50%] px-3 py-1"
                  onClick={() => {
                    navigate("/our-work");
                    window.scrollTo({ top: 0 });
                  }}
                >
                  Portfolio
                </li>
                {/* <ul className="flex items-center">
                  <li className="hidden lg:block lg:border-l h-[20px] opacity-[50%]"></li>
                </ul>
                <li className="text-[14px] font-[400] text-white hover:opacity-[100%] cursor-pointer opacity-[50%] px-4 py-1">
                  Blog
                </li> */}
                <ul className="flex items-center">
                  <li className="hidden lg:block lg:border-l h-[20px] opacity-[50%]"></li>
                </ul>
                <li
                  className="text-[14px] font-[400] text-white hover:opacity-[100%] cursor-pointer opacity-[50%] px-3 py-1"
                  onClick={() => {
                    navigate("/privacy-policy");
                    window.scrollTo({ top: 0 });
                  }}
                >
                  Privacy Policy
                </li>
                <ul className="flex items-center">
                  <li className="hidden lg:block lg:border-l h-[20px] opacity-[50%]"></li>
                </ul>
                <li
                  className="text-[14px] font-[400] text-white cursor-pointer  hover:opacity-[100%] opacity-[50%] px-3 py-1"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Grosvenor+Business+Tower/@25.1435922,55.1822004,13z/data=!4m10!1m2!2m1!1sGrosvenor+Business+Tower!3m6!1s0x3e5f6b776f2b55d3:0x1c76655c23b0b5fe!8m2!3d25.0989782!4d55.1776195!15sChhHcm9zdmVub3IgQnVzaW5lc3MgVG93ZXKSARBjb3Jwb3JhdGVfb2ZmaWNl4AEA!16s%2Fg%2F11g9py1_fr?entry=ttu"
                    )
                  }
                >
                  Google Map
                </li>
              </ul>
            </div>
            {/* address */}
            <div className="py-4 lg:py-3">
              <div>
                <h6 className="text-[18px] font-[400] text-center lg:text-left text-white opacity-[50%]">
                  Follow us on
                </h6>
              </div>
              <div>
                <ul className="flex flex-wrap justify-center lg:justify-start py-2 px-1">
                  <li className="pr-3 py-2">
                    <img
                      src={require("../../assets/images/footer/facebook.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/profile.php?id=100091663875681",
                          "_blank"
                        );
                      }}
                    />
                  </li>
                  {/* <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/dribbble.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                    />
                  </li> */}
                  <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/linkedIn.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/company/g-g-innovations/",
                          "_blank"
                        );
                      }}
                    />
                  </li>
                  {/* <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/twitter.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                    />
                  </li> */}
                  <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/instagram.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/gnginnovations/",
                          "_blank"
                        );
                      }}
                    />
                  </li>
                  <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/youtube.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://www.youtube.com/channel/UCZ8YJt8gCmvVIt7-IZtRevQ",
                          "_blank"
                        );
                      }}
                    />
                  </li>
                  {/* <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/pinterest.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                    />
                  </li> */}
                  {/* <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/medium.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                    />
                  </li> */}
                  {/* <li className="px-3 py-2">
                    <img
                      src={require("../../assets/images/footer/pub.webp")}
                      alt=""
                      className="h-4 cursor-pointer"
                    />
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectInquiries;
