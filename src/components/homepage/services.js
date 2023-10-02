import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimateHeight from "react-animate-height";

const Services = () => {
  const [activeService, setActiveService] = useState(2);
  const navigate = useNavigate();
  // services on left side
  const Services = [
    {
      id: 2,
      title: "Game<br /> Development",
      image: require("../../assets/images/services/game.webp"),
      bgImage: require("../../assets/images/services/box2.webp"),
      boxColor: "service-gradient-box2",
      borderClass: "border2",
      content:
        "We are a creative team of mobile game developers and designers offering end-to-end game development solutions. Partner with us to build exciting mobile games that meet user expectations across all platforms.",
    },
    {
      id: 1,
      title: "UI/UX & Graphic <br />Design",
      image: require("../../assets/images/services/switch.webp"),
      bgImage: require("../../assets/images/services/box1.webp"),
      boxColor: "service-gradient-box1",
      borderClass: "border1",
      content:
        "With a decade-long experience in UI/UX designing, our creative team of designers offers a full range of web and mobile app design services, from prototyping and graphic design to pixel-perfect UI.",
    },
    {
      id: 3,
      title: "Metaverse <br />Development",
      image: require("../../assets/images/services/virtual-reality.webp"),
      bgImage: require("../../assets/images/services/box5.webp"),
      boxColor: "service-gradient-box3",
      borderClass: "border5",
      content:
        "The metaverse is a vision of what many in the computer industry believe is the next iteration of the internet: a single, shared, immersive, persistent, 3D virtual space where humans experience life in ways they could not in the physical world.",
    },
    {
      id: 6,
      title: "Blockchain <br />Development",
      image: require("../../assets/images/services/developmen.webp"),
      bgImage: require("../../assets/images/services/box5.webp"),
      boxColor: "service-gradient-box6",
      borderClass: "border5",
      content:
        " When it comes to building a reliable and robust software solution, our team of DevOps experts helps you accelerate your development cycle, improve the quality of code, and stay ahead of the competition.",
    },
    {
      id: 4,
      title: "Mobile App <br />Development",
      image: require("../../assets/images/services/mobile.webp"),
      bgImage: require("../../assets/images/services/box3.webp"),
      boxColor: "service-gradient-box4",
      borderClass: "border3",
      content:
        "With so many ways to build mobile apps, we have expertise in choosing what the best solution is for your mobile app development strategy, whether it's in Flutter, React Native, or native iOS and Android.",
    },
    {
      id: 5,
      title: "Web <br />Development",
      image: require("../../assets/images/services/web.webp"),
      bgImage: require("../../assets/images/services/box4.webp"),
      boxColor: "service-gradient-box5",
      borderClass: "border4",
      content:
        "Whether you are looking to develop a CMS, eCommerce or web application, we have a large web development team that creates secure and scalable web solutions tailored exclusively for your business goals.",
    },
  ];

  // all service content along with images
  const allServicesContent = [
    {
      id: 2,
      title: "Game Development",
      content:
        "We are a creative team of mobile game developers and designers offering end-to-end game development solutions. Partner with us to build exciting mobile games that meet user expectations across all platforms.",
      images: [
        {
          img: require("../../assets/images/services/gameDevelopment/unity1.webp"),
          name: "Unity",
        },
        {
          img: require("../../assets/images/services/gameDevelopment/blender2.webp"),
          name: "Blender",
        },
        {
          img: require("../../assets/images/services/gameDevelopment/unreal4.webp"),
          name: "Unreal",
        },
      ],
    },
    {
      id: 1,
      title: "UI/UX & Graphics Design",
      content:
        "With a decade-long experience in UI/UX designing, our creative team of designers offers a full range of web and mobile app design services, from prototyping and graphic design to pixel-perfect UI.",
      images: [
        {
          img: require("../../assets/images/services/uiux/figma.webp"),
          name: "Figma",
        },
        {
          img: require("../../assets/images/services/uiux/xd.webp"),
          name: "XD",
        },
        {
          img: require("../../assets/images/services/uiux/invinsion.webp"),
          name: "Zeplin",
        },
        {
          img: require("../../assets/images/services/uiux/zeplin.webp"),
          name: "Invision",
        },
      ],
    },
    {
      id: 3,
      title: "Metaverse Development",
      content:
        "The metaverse is a vision of what many in the computer industry believe is the next iteration of the internet: a single, shared, immersive, persistent, 3D virtual space where humans experience life in ways they could not in the physical world.",
      images: [
        {
          img: require("../../assets/images/services/gameDevelopment/unity1.webp"),
          name: "Unity",
        },
        {
          img: require("../../assets/images/services/gameDevelopment/blender2.webp"),
          name: "Blender",
        },
        {
          img: require("../../assets/images/services/gameDevelopment/aftereffect3.webp"),
          name: "After Effects",
        },
        {
          img: require("../../assets/images/services/gameDevelopment/unreal4.webp"),
          name: "Unreal",
        },
      ],
    },
    {
      id: 6,
      title: "Blockchain Development",
      content:
        " When it comes to building a reliable and robust software solution, our team of DevOps experts helps you accelerate your development cycle, improve the quality of code, and stay ahead of the competition.",
      images: [
        { img: require("../../assets/images/services/git.webp"), name: "Git" },
        {
          img: require("../../assets/images/services/docker.webp"),
          name: "Docker",
        },
        {
          img: require("../../assets/images/services/jenkins.webp"),
          name: "Jenkins",
        },
        {
          img: require("../../assets/images/services/selenium.webp"),
          name: "Selenium",
        },
        {
          img: require("../../assets/images/services/kubernets.webp"),
          name: "Kubernets",
        },
      ],
    },
    {
      id: 4,
      title: "Mobile App Development",
      content:
        "With so many ways to build mobile apps, we have expertise in choosing what the best solution is for your mobile app development strategy, whether it's in Flutter, React Native, or native iOS and Android.",
      images: [
        {
          img: require("../../assets/images/services/appDevelopment/ios.webp"),
          name: "iPhone App <br/> Development",
        },
        {
          img: require("../../assets/images/services/appDevelopment/android.webp"),
          name: "Android App <br/> Development",
        },
        {
          img: require("../../assets/images/services/appDevelopment/flutter.webp"),
          name: "Flutter App <br/> Development",
        },
        {
          img: require("../../assets/images/services/appDevelopment/react.webp"),
          name: "React Native App <br/> Development",
        },
      ],
    },
    {
      id: 5,
      title: "Web Development",
      content:
        "Whether you are looking to develop a CMS, eCommerce or web application, we have a large web development team that creates secure and scalable web solutions tailored exclusively for your business goals.",
      images: [
        {
          img: require("../../assets/images/services/webDevelopment/angular1.webp"),
          name: "Angular <br/> Development",
        },
        {
          img: require("../../assets/images/services/webDevelopment/nodejs2.webp"),
          name: "NodeJs <br/> Development",
        },
        {
          img: require("../../assets/images/services/webDevelopment/golang3.webp"),
          name: "Golang <br/> Development",
        },
        {
          img: require("../../assets/images/services/webDevelopment/python4.webp"),
          name: "Python <br/> Development",
        },
        {
          img: require("../../assets/images/services/webDevelopment/laravel5.webp"),
          name: "Laravel <br/> Development",
        },
      ],
    },
  ];

  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] py-4">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between py-4">
        <h6 className="text-gradient-gold text-[14px] font-[600] tracking-[14px]">
          SERVICES
        </h6>
        <div className="flex justify-center pt-8 hidden lg:block">
          <button
            className="flex items-center border hover:transition-all transition-colors border-[#rify] hover:border-[#fdae21] hover:bg-[#fdae21] text-[#F2F2F2] rounded-full cursor-pointer pl-7 pr-5 py-3"
            onClick={() => {
              navigate("/about-us");
              window.scrollTo({ top: 0 });
            }}
          >
            About Us
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
      {/* boxes */}
      <div className="pt-[5px] pb-8 relative">
        {/* common boxes */}
        <div className="w-full relative z-20 ">
          {/* desktop box */}
          <div className="w-full">
            {Services.map((item, index) => (
              <div key={index} className="w-full ">
                <div className="w-full py-2">
                  {/* boxes */}
                  <div
                    className={`w-full py-[1px] ${item.borderClass} rounded-[18px] px-[1px] cursor-pointer`}
                    onMouseEnter={() => setActiveService(item.id)}
                  >
                    <div className="bg-[rgba(0,0,0,0.8)] rounded-[20px] px-6 w-full">
                      <div className="flex justify-between w-full">
                        {/* left side */}
                        <div className={`desktop-left-box `}>
                          <div className="w-full px-4 pt-6 md:py-8 lg:py-10 2xl:py-12 flex justify-start items-center ">
                            <div>
                              <img
                                src={item.image}
                                alt=""
                                className="h-10  2xl:h-12"
                              />
                            </div>
                            <div className="flex items-center h-full">
                              <h5
                                className="text-[18px] 2xl:text-[20px] text-[#F2F2F2] px-4 font-[600] pt-1"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></h5>
                            </div>
                          </div>
                        </div>
                        {/* right side */}
                        <div className="desktop-services-box w-[75%]">
                          <div className="flex items-center justify-end flex-wrap pt-6 w-full ">
                            {allServicesContent[index]?.images?.map(
                              (img, index) => (
                                <div
                                  className={`flex items-center justify-end flex-wrap py-1 lg:px-[15px] xl:w-[18%] 2xl:w-[18%]`}
                                  key={index}
                                >
                                  {/* name and image */}
                                  <div className="w-6/12 md:w-fit py-2 flex flex-col justify-center items-center">
                                    <div>
                                      <img
                                        src={img?.img}
                                        alt=""
                                        className="md:h-7 lg:h-11 2xl:h-12"
                                      />
                                    </div>
                                    <div>
                                      <p
                                        className="text-center text-[14px] text-[#B2B2B2B2] py-3 "
                                        dangerouslySetInnerHTML={{
                                          __html: img?.name,
                                        }}
                                      ></p>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      {/* content */}
                      <div className="desktop-services-box">
                        <AnimateHeight
                          id="panel"
                          className="w-full"
                          duration={500}
                          height={item.id === activeService ? "auto" : 0} // see props documentation below
                        >
                          <div className="pb-6 px-4">
                            <p className="text-[#A8A8A8]">{item?.content}</p>
                          </div>
                        </AnimateHeight>
                      </div>
                      {/* mobile icons */}
                      {/* right side */}
                      <div className="mobile-services-box w-full">
                        <div className="pt-2 pb-2 px-4">
                          <p className="text-[#A8A8A8]">{item?.content}</p>
                        </div>
                        <div className="flex items-center justify-center flex-wrap pt-6  w-full">
                          {allServicesContent[index]?.images?.map(
                            (img, index) => (
                              <div
                                className={`flex items-center justify-center py-1 px-[25px]`}
                                key={index}
                              >
                                {/* name and image */}
                                <div className="py-2 flex flex-col justify-center items-center">
                                  <div>
                                    <img
                                      src={img?.img}
                                      alt=""
                                      className="h-10"
                                    />
                                  </div>
                                  <div>
                                    <p
                                      className="text-center text-[14px] text-[#B2B2B2B2] py-3 "
                                      dangerouslySetInnerHTML={{
                                        __html: img?.name,
                                      }}
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* mobile */}
          <div className="mobile-services-box w-full">
            <div className="flex justify-center pt-8">
              <button
                className="flex items-center border hover:transition-all transition-colors border-[#F2F2F2] text-[#F2F2F2] hover:border-[#ED184F] hover:bg-[#ED184F] hover:text-[#fff] rounded-full cursor-pointer pl-7 pr-5 py-3"
                onClick={() => {
                  navigate("/about-us");
                  window.scrollTo({ top: 0 });
                }}
              >
                About Us
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
    </div>
  );
};
export default Services;
