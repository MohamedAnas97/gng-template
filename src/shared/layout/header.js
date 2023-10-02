import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [height, setHeight] = useState(0);

  return (
    <div
      className={`${
        height === "auto" && "bg-[rgba(0,0,0,0.8)]"
      } absolute header-container w-full lg:pb-0 z-100`}
    >
      <div className="px-10 lg:px-20 py-6 flex justify-between items-center">
        {/* left side logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer lg:pb-[15px]"
        >
          <img
            src={require("../../assets/logo/logo.png")}
            className="h-8 sm:h-10 2xl:h-12 "
            alt=""
          />
        </div>
        {/* right side lnks */}
        <div className="hidden lg:block desktop-links z-100">
          {/* desktop links */}
          <ul className="text-white flex items-center text-[16px] z-100">
            <li
              className={`px-6 link cursor-pointer ${
                location?.pathname === "/services"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className={`px-6 link cursor-pointer ${
                location?.pathname === "/solutions"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => navigate("/solutions")}
            >
              Solutions
            </li>
            <li
              className={`px-6 link cursor-pointer ${
                location?.pathname === "/our-work"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => navigate("/our-work")}
            >
              Portfolio
            </li>
            <li
              className={`px-6 link cursor-pointer ${
                location?.pathname === "/about-us"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>
          </ul>
        </div>
        <div className="block lg:hidden flex items-center">
          <div
            aria-expanded={height !== 0}
            aria-controls="panel"
            onClick={() => setHeight(height === 0 ? "auto" : 0)}
            className="cursor-pointer"
          >
            <img
              src={require("../../assets/icons/hamburger.png")}
              className="h-8"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* links */}
      <AnimateHeight
        id="panel"
        className="bg-[rgba(0,0,0,0.8)] absolute w-full"
        duration={500}
        height={height} // see props documentation below
      >
        <div className="w-full bg-[rgba(0,0,0,0.8)] z-100">
          <ul className="top-20 w-full z-20  left-0">
            <li
              className={`px-6 py-4 border-b border-[#4b4b4b] link cursor-pointer ${
                location?.pathname === "/services"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => {
                navigate("/services");
                setHeight(0);
              }}
            >
              Services
            </li>
            <li
              className={`px-6 py-4 border-b border-[#4b4b4b] link cursor-pointer ${
                location?.pathname === "/solutions"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => {
                navigate("/solutions");
                setHeight(0);
              }}
            >
              Solutions
            </li>
            <li
              className={`px-6 py-4 border-b border-[#4b4b4b] link cursor-pointer ${
                location?.pathname === "/our-work"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => {
                navigate("/our-work");
                setHeight(0);
              }}
            >
              Portfolio
            </li>
            <li
              className={`px-6 py-4 border-b border-[#4b4b4b] link cursor-pointer ${
                location?.pathname === "/about-us"
                  ? "text-gradient-gold"
                  : "text-white-gold"
              }`}
              onClick={() => {
                navigate("/about-us");
                setHeight(0);
              }}
            >
              About Us
            </li>
          </ul>
        </div>
      </AnimateHeight>
    </div>
  );
};
export default Header;
