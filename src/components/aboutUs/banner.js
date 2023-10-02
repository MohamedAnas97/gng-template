const AboutUs = () => {
  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%]">
      <div className="flex justify-center">
        <div>
          <h1 className="text-[50px] lg:text-[100px] 2xl:text-[147px] font-[400] text-[#FFFFFF]">
            About Us
          </h1>
        </div>
      </div>
      <div className="pt-10 lg:pt-0">
        <h6 className="text-gradient-gold text-[14px] font-[600] tracking-[14px]">
          WHO WE ARE
        </h6>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between py-4">
        {/* left side  */}
        <div className="w-full lg:w-6/12">
          <h1 className="text-[25px] lg:text-[30px] 2xl:text-[40px] font-[400] text-left text-white">
            A team of Creative Minds designing best Apps and Website for the
            World.
          </h1>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-full lg:w-8/12 2xl:w-6/12">
          <h1 className="text-[20px] lg:text-[25px] 2xl:text-[30px] text-left text-white">
            We are an innovation company driven by cutting-edge technology and a
            passion for creating groundbreaking solutions that transform the way
            people live and work.
          </h1>
          <p className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#B2B2B2] py-4 font-[300]">
            Our team comprises a group of highly imaginative individuals who
            specialize in crafting exceptional websites and apps that are second
            to none. We are committed to delivering the best digital experiences
            to our clients and take great pride in our ability to bring their
            visions to life. With our expertise in design and development, we
            strive to create innovative and user-friendly solutions that set the
            standard in the industry.
          </p>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-full  flex flex-col lg:flex-row justify-center">
          <div className="w-full lg:w-6/12 pr-0 lg:pr-5">
            <div>
              <img
                src={require("../../assets/images/aboutUs/vision.webp")}
                alt=""
                className="h-20"
              />
            </div>
            <h1 className="text-[25px] lg:text-[30px] 2xl:text-[40px] text-left text-white pt-4">
              Our Vision
            </h1>
            <p className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#B2B2B2] pb-4 font-[300]">
              We paint the bright future for the businesses working on digital
              landscapes and firmly believe in providing productive long-term
              business relationships.
            </p>
          </div>
          <div className="w-full lg:w-6/12 pl-0 lg:pl-5 pt-5 lg:pt-0">
            <div>
              <img
                src={require("../../assets/images/aboutUs/mission.webp")}
                alt=""
                className="h-20"
              />
            </div>
            <h1 className="text-[25px] lg:text-[30px] 2xl:text-[40px] text-left text-white pt-4">
              Our Mission
            </h1>
            <p className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#B2B2B2] pb-4 font-[300]">
              Handover contemporary and futuristic web and mobile software
              solutions to the businesses ranging from startups to enterprises
              with affordability and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
