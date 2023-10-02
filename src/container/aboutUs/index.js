import Banner from "../../components/aboutUs/banner";
import Benefits from "../../components/aboutUs/benefits";
import Reviews from "../../components/aboutUs/reviews";
import Contact from '../../components/commonComponents/contact'

const AboutUs = () => {
  return (
    <div className="homepage-container pt-20 lg:pt-0">
      <Banner />
      <Benefits />
      <Reviews />
      <Contact />
    </div>
  );
};
export default AboutUs;
