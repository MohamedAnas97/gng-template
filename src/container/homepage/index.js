import { useRef } from "react";
import Banner from "../../components/homepage/banner";
import WhoWeAre from "../../components/homepage/whoWeAre";
import Services from "../../components/homepage/services";
import Technologies from "../../components/homepage/technologies";
import OurWork from "../../components/homepage/ourWork";
import Contact from "../../components/commonComponents/contact";

const Homepage = () => {
  // ref to redirect user to contact
  const myRef = useRef(null);
  // handler
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homepage-container pt-20 lg:pt-0">
      <div className="z-20 relative">
        <Banner />
        <WhoWeAre />
        <Services />
        <Technologies executeScroll={executeScroll} />
        <OurWork />
        <Contact myRef={myRef} />
      </div>
    </div>
  );
};
export default Homepage;
