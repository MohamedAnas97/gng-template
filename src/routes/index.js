import { Route, Routes } from "react-router-dom";
// pages
import Homepage from "../container/homepage";
import OurWork from "../container/ourWork";
import AboutUs from "../container/aboutUs";
import OurSolutions from "../container/ourSolutions";
import OurServices from "../container/ourServices";
import PrivacyPolicy from "../container/privacyPolicy";
// layout
import Layout from "../shared/layout";

const AllPagesRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solutions" element={<OurSolutions />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
  );
};
export default AllPagesRoutes;
