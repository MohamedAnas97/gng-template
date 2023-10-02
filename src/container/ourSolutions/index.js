import { useRef } from "react";
import Banner from "../../components/ourSolutions/banner";
import Solutions from "../../components/ourSolutions/solutions";
import Contact from "../../components/commonComponents/contact";

const OurSolutions = () => {
  // ref to redirect user to contact
  const myRef = useRef(null);
  // handler
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="our-solutions-container pt-20 lg:pt-0">
      <Banner executeScroll={executeScroll} />
      <Solutions executeScroll={executeScroll} />
      <Contact myRef={myRef} />
    </div>
  );
};
export default OurSolutions;
