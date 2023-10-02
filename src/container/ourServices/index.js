import OurDesigns from "../../components/ourServices/design";
import Development from "../../components/ourServices/development";
import MobileApp from "../../components/ourServices/mobileApp";
import Web from "../../components/ourServices/web";
import Contact from "../../components/commonComponents/contact";

const OurSolutions = () => {
  return (
    <div className="our-services-container pt-20 lg:pt-0">
      <OurDesigns />
      <Development />
      <MobileApp />
      <div className="pb-10">
        <Web />
      </div>
      <Contact />
    </div>
  );
};
export default OurSolutions;
