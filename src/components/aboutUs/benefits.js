const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Flexible Hiring Models",
      img: require("../../assets/images/aboutUs/box1.webp"),
    },
    {
      id: 2,
      title: "Affordable lunch",
      img: require("../../assets/images/aboutUs/box2.webp"),
    },
    {
      id: 3,
      title: "Free Snacks & Drinks",
      img: require("../../assets/images/aboutUs/box3.webp"),
    },
    {
      id: 4,
      title: "Relocation Reimbursement",
      img: require("../../assets/images/aboutUs/box4.webp"),
    },
    {
      id: 5,
      title: "Performance Bonus on All Employee levels",
      img: require("../../assets/images/aboutUs/box5.webp"),
    },
    {
      id: 6,
      title: "Family Health Insurance",
      img: require("../../assets/images/aboutUs/box6.webp"),
    },
    {
      id: 7,
      title: "Yearly Business Retreat",
      img: require("../../assets/images/aboutUs/box7.webp"),
    },
    {
      id: 8,
      title: "Maternity - Paternity Leave",
      img: require("../../assets/images/aboutUs/box8.webp"),
    },
  ];
  return (
    <div className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] py-12">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div>
            <img
              src={require("../../assets/images/aboutUs/benefits.webp")}
              className="h-28"
              alt=""
            />
          </div>
          <div className="pt-10">
            <h6 className="text-gradient-gold text-[14px] font-[600] tracking-[10px] lg:tracking-[14px]">
              WHY GNGINNOVATIONS?
            </h6>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between py-6">
            {/* left side  */}
            <div className="w-full lg:w-6/12">
              <h1 className="text-[25px] lg:text-[30px] 2xl:text-[42px] font-[400] text-left text-white">
                Perks & Benefits With Us
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap justify-between ">
            {benefits.map((item) => (
              <div
                className="w-full sm:w-[45%] lg:w-[24%] px-10 py-12 bg-[#242424] rounded-xl my-4 hover:transition-all transition-all hover:ease-in-out border hover:border-[#F2F2F2] border-transparent"
                key={item.id}
              >
                <div>
                  <img src={item.img} className="lg:h-14 2xl:h-16" alt="" />
                </div>
                <h1 className="text-[16px] font-[400] text-left text-[#F2F2F2] pt-5">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
