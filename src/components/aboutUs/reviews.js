import Carousel from "react-multi-carousel";

const Reviews = () => {
  // client reviews
  const clientReviews = [
    {
      id: 1,
      name: "Amir",
      location: "United Arab Emirates",
      content:
        "G&G developed and launched an Android and iOS app from scratch. Additionally, they provided free support for two months after the launch to ensure bugs and updates were handled smoothly.",
      img: require("../../assets/images/aboutUs/image.webp"),
    },
    {
      id: 2,
      name: "Harsal",
      location: "United Arab Emirates",
      content:
        "I had the pleasure of working with this innovation company on a recent project. They listened attentively to my needs and delivered a customized solution that exceeded my expectations. Their team was efficient, communicative, and a pleasure to work with. I highly recommend this company for anyone looking for cutting-edge technology solutions and exceptional customer service.",
      img: require("../../assets/images/aboutUs/img22.png"),
    },
    {
      id: 3,
      name: "Manoj",
      location: "United Arab Emirates",
      content:
        "I had the pleasure of working with this innovation company on a recent project. They listened attentively to my needs and delivered a customized solution that exceeded my expectations. Their team was efficient, communicative, and a pleasure to work with. I highly recommend this company for anyone looking for cutting-edge technology solutions and exceptional customer service.",
      img: require("../../assets/images/aboutUs/manoj2.png"),
    },
  ];
  // employee reviews
  const employeeReviews = [
    {
      id: 1,
      name: "Souharda Mukherjee",
      role: "UX/UI Operations Manager",
      content:
        "I've been working at G&G Innovations for a year now and couldn't be happier. The team is collaborative and innovative, and the clients we work with are top-notch. The company culture is great and there is plenty of room for growth and development",
      img: require("../../assets/images/aboutUs/harsal.webp"),
    },
    {
      id: 2,
      name: "Noor",
      role: "Mobile Developer",
      content:
        "I had a great experience working for an innovation company where they feel supported, valued, and part of a collaborative team. The company has a positive work culture that encourages continuous learning and growth, and the leadership values employee feedback leading to positive changes. The company offers great benefits, compensation, and flexibility, allowing for a healthy work-life balance. The person takes pride in being part of this team and looks forward to contributing to its continued success.",
      img: require("../../assets/images/aboutUs/manoj.webp"),
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const employeeResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
    },
  };
  //   custom button
  const ButtonGroup = ({ next, previous, goToSlide }) => {
    return (
      <div className="carousel-button-group flex justify-center w-full lg:justify-start absolute z-20 bottom-0">
        <div className="flex items-center pt-14">
          <div onClick={() => previous()}>
            <img
              src={require("../../assets/icons/left-border.png")}
              alt=""
              className="opacity-[30%] h-10 cursor-pointer"
            />
          </div>
          <div className="pl-3" onClick={() => next()}>
            <img
              src={require("../../assets/icons/right-border.png")}
              alt=""
              className="opacity-[30%] h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] py-12 aboutUs-container">
      {/* client reviews */}
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div>
            <img
              src={require("../../assets/images/aboutUs/reviewicon.webp")}
              className="h-28"
              alt=""
            />
          </div>
          <div className="pt-10">
            <h6 className="text-gradient-gold text-[14px] font-[600] tracking-[14px] uppercase">
              Words By Clients & Employees
            </h6>
          </div>
          <div className="py-6">
            <div>
              <h1 className="text-[30px] lg:text-[42px] font-[400] text-left text-white">
                Reviews
              </h1>
            </div>
            <div className="pt-10">
              <h1 className="text-[25px] 2xl:text-[38px] font-[400] text-left text-white">
                Client Reviews
              </h1>
            </div>
          </div>
          <Carousel
            arrows={false}
            responsive={responsive}
            customButtonGroup={<ButtonGroup />}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {clientReviews.map((item) => (
              <div key={item.id}>
                {/* profile and button */}
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div>
                    <div className="flex justify-center lg:justify-start">
                      <img
                        src={item.img}
                        className="h-28 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="text-[#F2F2F2] text-center lg:text-left text-[24] font-[400] pt-3 pb-2">
                        {item.name}
                      </h5>
                      <h5 className="text-[#F2F2F2] text-center lg:text-left text-[20] font-[400]">
                        {item.location}
                      </h5>
                    </div>
                  </div>
                  <div className="pt-10 lg:pt-0 hidden lg:block">
                    <button className="flex items-center border border-[#F2F2F2] text-[#F2F2F2] hover:bg-[#fdae21] hover:border-[#fdae21] rounded-full cursor-pointer pl-7 pr-5 py-3">
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
                {/* content */}
                <div className="pt-10">
                  <p className="text-[#B2B2B2] text-[20px] font-[300]">
                    {item.content}
                  </p>
                </div>
                <div className="pt-10 block lg:hidden flex justify-center">
                  <button className="flex items-center border border-[#F2F2F2] text-[#F2F2F2] hover:bg-[#fdae21] hover:border-[#fdae21] rounded-full cursor-pointer pl-7 pr-5 py-3">
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
                ˝
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* employee reviews */}
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="py-6">
            <div className="pt-10">
              <h1 className="text-[25px] 2xl:text-[38px] font-[400] text-left text-white">
                Employee Reviews
              </h1>
            </div>
          </div>
          <Carousel
            arrows={false}
            responsive={employeeResponsive}
            customButtonGroup={<ButtonGroup />}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {employeeReviews.map((item) => (
              <div key={item.id} className="pr-4 h-full">
                <div className="border p-8 2xl:p-10 border-[#292929] h-full">
                  {/* profile and button */}
                  <div>
                    <div>
                      <div>
                        <img src={item.img} className="h-28" alt="" />
                      </div>
                      <div>
                        <h5 className="text-[#F2F2F2] text-[24] font-[400] pt-3 pb-2">
                          {item.name}
                        </h5>
                        <h5 className="text-[#F2F2F2]  text-[20] font-[400]">
                          {item.role}
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div className="pt-10">
                    <p className="text-[#B2B2B2] text-[20px] font-[300]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
