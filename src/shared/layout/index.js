import Header from "./header";
import Footer from "./footer";
// newsletter modal
import NewsletterModal from "../newsletterModal/newsletterModal";
import { useEffect, useState } from "react";

const Layout = (props) => {
  // useEffect to get localStorage key to not show modal
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    let modelKey = localStorage.getItem("subscribe-modal");
    if (modelKey === "true") {
      setShowModal(false);
    }
  }, []);
  return (
    <div className="bg-[#111111]">
      {/* modal */}
      {showModal && <NewsletterModal />}
      {/* layout */}
      <div className="w-full bg-banner-container fixed h-screen"></div>
      <div className="relative z-[30]">
        <Header />
      </div>
      <div className="relative z-20 pt-32">{props.children}</div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
