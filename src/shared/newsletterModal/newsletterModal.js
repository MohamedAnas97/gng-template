import React, { useEffect, useState } from "react";
import { Modal, Carousel, Spin } from "antd";
import { isValidEmail } from "../../utils/emailValidation";
import { notification } from "antd";
import Axios from "axios";

const App = () => {
  // notification
  const [api, contextHolder] = notification.useNotification();
  const [loader, setLoader] = useState(false);
  const openNotification = (message, description) => {
    api.open({
      message: message,
      description: description,
    });
  };
  //   const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  //   state for subscription data
  const [subscriptionData, setSubscriptionData] = useState({
    name: "",
    email: "",
  });
  const [validateSubscriptionData, setValidateSubscriptionData] = useState({
    name: false,
    email: false,
  });
  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    showModal();
  }, []);

  let duplicate = { ...validateSubscriptionData };
  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    if (
      !subscriptionData?.name ||
      !subscriptionData?.email ||
      isValidEmail(subscriptionData?.email) === false
    ) {
      if (!subscriptionData?.name) {
        duplicate.name = true;
      }
      if (!subscriptionData?.email) {
        duplicate.email = true;
      }
      if (
        subscriptionData?.email !== "" &&
        isValidEmail(subscriptionData?.email) === false
      ) {
        duplicate.email = "invalid email";
      }
      setValidateSubscriptionData(duplicate);
      setLoader(false);
    } else {
      Axios.post(
        "http://gng-api.gngtest.site:80/api/newsletter",
        subscriptionData
      )
        .then(() => {
          setLoader(false);
          setOpen(false);
          openNotification("Success", "Thankyou for Subscribing");
        })
        .catch(() => {
          setLoader(false);
          openNotification("Error", "");
        });
    }
  };

  return (
    <>
      <Modal
        open={open}
        title=""
        footer={null}
        width={1000}
        onCancel={() => {
          setOpen(false);
          // localStorage
          localStorage.setItem("subscribe-modal", "true");
        }}
      >
        {contextHolder}
        <div className="w-full flex p-5 lg:p-0 flex-col lg:flex-row">
          {/* left side */}
          <div className="hidden lg:block w-6/12 rounded-l-[5px]">
            <Carousel autoplay>
              <div>
                <img
                  src={require("../../assets/images/newsletter/Untitled-1w4eddfv.png")}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <img
                  src={require("../../assets/images/newsletter/Untitled-1w4ed.png")}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <img
                  src={require("../../assets/images/newsletter/Untitled-1sdvtftsr.png")}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <img
                  src={require("../../assets/images/newsletter/Untitled-1sdv.png")}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <img
                  src={require("../../assets/images/newsletter/Untitled-1.psddf.png")}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <img
                  src={require("../../assets/images/newsletter/11111.png")}
                  alt=""
                  className="w-full"
                />
              </div>
            </Carousel>
          </div>
          {/* right side */}
          <div className="w-full lg:w-6/12 pt-12">
            <div className="text-center">
              <h2 className="text-[30px] font-poppins font-medium">
                Subscribe
              </h2>
              <h2 className="text-[14px] py-4 text-[#aca3a3] font-poppins font-normal">
                Stay Informed About Our Exclusive Offers by Subscribing
              </h2>
            </div>
            <div className="w-full flex justify-center">
              <form
                className="w-full lg:w-10/12"
                onSubmit={(e) => submitHandler(e)}
              >
                <div className="flex flex-col pt-3">
                  <label className="py-1 font-poppins">Name</label>
                  <input
                    placeholder="Name"
                    className="py-2 px-2 border w-full outline-none"
                    onChange={(e) => {
                      setSubscriptionData({
                        ...subscriptionData,
                        name: e.target.value,
                      });
                      setValidateSubscriptionData({
                        ...validateSubscriptionData,
                        name: false,
                      });
                    }}
                    value={subscriptionData?.name}
                  />
                  {/* error-message */}
                  <div>
                    <p className=" text-[#ED184F] text-[14px] pt-1">
                      {validateSubscriptionData?.name &&
                        "Please enter your name"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pt-3">
                  <label className="py-1 font-poppins">Email</label>
                  <input
                    placeholder="Email"
                    className="py-2 px-2 border w-full outline-none"
                    onChange={(e) => {
                      setSubscriptionData({
                        ...subscriptionData,
                        email: e.target.value,
                      });
                      setValidateSubscriptionData({
                        ...validateSubscriptionData,
                        email: false,
                      });
                    }}
                    value={subscriptionData?.email}
                  />
                  {/* error-message */}
                  <div>
                    <p className=" text-[#ED184F] text-[14px] pt-1">
                      {validateSubscriptionData?.email === true &&
                        "Please enter your email"}
                      {validateSubscriptionData?.email === "invalid email" &&
                        "Please enter valid email"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center pt-8">
                  <button
                    type="submit"
                    className="flex items-center border hover:transition-all transition-colors text-[#fdae21] border-[#fdae21] hover:border-[#fdae21] hover:bg-[#fdae21] hover:text-[#F2F2F2] rounded cursor-pointer px-8 py-2"
                  >
                    {loader ? <Spin className="text-[#fdae21]" /> : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
