import { useState } from "react";
import { countries } from "country-data-list";
import { isValidEmail } from "../../utils/emailValidation";
import { notification } from "antd";
import axios from "axios";
import AutoComplete from "../../shared/autocomplete";

const ProjectInquiries = ({ myRef }) => {
  // notification
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message, description) => {
    api.open({
      message: message,
      description: description,
    });
  };
  // state to get data from user
  const [userDataValidation, setUserDataValidation] = useState({
    name: false,
    email: false,
    phone_number: false,
    country: false,
    message: false,
  });
  // state to get data from user
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    country_code: "",
    phone_number: "",
    country: "",
    message: "",
  });
  // state for loader
  const [loader, setLoader] = useState(false);
  // handler to update the state data
  const changeDataHadnler = (key, value) => {
    let duplicate = { ...userData };
    duplicate[key] = value;
    setUserData(duplicate);
  };
  // handler to update the state data
  const validationHandler = (key, value) => {
    let duplicate = { ...userDataValidation };
    duplicate[key] = value;
    setUserDataValidation(duplicate);
  };
  // handler to update the state data
  const countryOnChangeHandler = (value) => {
    // get the record from array
    const selectedCountry = countries?.all?.find((item) => item.name === value);
    // set record
    let duplicate = { ...userData };
    duplicate.country_code = selectedCountry?.countryCallingCodes[0];
    duplicate.country = selectedCountry?.name;
    setUserData(duplicate);
  };
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    let duplicate = { ...userDataValidation };
    // error handler conditions
    if (
      !userData?.name ||
      !userData?.email ||
      isValidEmail(userData?.email) === false ||
      !userData?.phone_number ||
      !userData?.country ||
      !userData?.message
    ) {
      if (!userData?.name) {
        duplicate.name = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.email) {
        duplicate.email = true;
        setUserDataValidation(duplicate);
      }
      if (isValidEmail(userData?.email) === false && userData?.email !== "") {
        duplicate.email = "Enter valid email";
        setUserDataValidation(duplicate);
      }
      if (!userData?.country) {
        duplicate.country = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.phone_number) {
        duplicate.phone_number = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.country) {
        duplicate.country = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.message) {
        duplicate.message = true;
        setUserDataValidation(duplicate);
      }
      setLoader(false);
    }
    // success scenario
    else {
      axios
        .post("https://gng-api.gngtest.site/api/contact", userData)
        .then(() => {
          setLoader(false);
          setUserData({
            name: "",
            email: "",
            country_code: "",
            phone_number: "",
            country: "",
            message: "",
          });
          openNotification("Success", "Form submited successfully");
        })
        .catch(() => {
          setLoader(false);
          openNotification("Error", "");
        });
      // fetch("https://gng-api.gngtest.site/api/contact", {
      //   method: "POST",
      //   body: JSON.stringify(userData),
      //   follow: true,
      // })
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then(() => {
      //     setLoader(false);
      //     setUserData({
      //       name: "",
      //       email: "",
      //       country_code: "",
      //       phone_number: "",
      //       country: "",
      //       message: "",
      //     });
      //     openNotification("Success", "");
      //   })

      //   // Displaying results to console
      //   .catch(() => {
      //     setLoader(false);
      //     openNotification("Error", "");
      //   });
    }
  };

  return (
    <>
      {contextHolder}
      <div
        className="mx-[5%] lg:mx-[10%] 2xl:mx-[16%] flex flex-col lg:flex-row py-4"
        ref={myRef}
      >
        {/* left side */}
        <div className="w-full lg:w-7/12">
          <h1 className="leading-[100px] lg:leading-[115px]">
            <span className="text-[50px] lg:text-[60px] 2xl:text-[96px] text-[#fff] font-[400]">
              Say
            </span>
            <br />
            <span className="text-[60px] sm:text-[70px] md:text-[90px] lg:text-[110px] 2xl:text-[172px] text-[#fff] font-[400]">
              HELLO!
            </span>
          </h1>
          <div className="flex md:px-3">
            {/* social icons */}
            <div>
              {/* skype */}
              <div className="flex items-center">
                <div className="w-[9%]">
                  <img
                    src={require("../../assets/images/commonComponents/skype.png")}
                    className="h-5"
                    alt=""
                  />
                </div>
                <div className="w-[30%]">
                  <h6 className="text-[14px] font-[400] text-white opacity-[50%] px-4">
                    Skype
                  </h6>
                </div>
                <div className="w-[60%]">
                  <h6 className="text-[16px] font-[400] text-[#F2F2F2]">
                    biz.gnginfotech
                  </h6>
                </div>
              </div>
              {/* email */}
              <div className="flex items-center py-4 lg:py-3">
                <div className="w-[9%]">
                  <img
                    src={require("../../assets/images/commonComponents/email.png")}
                    alt=""
                    className="h-4 w-5"
                  />
                </div>
                <div className="w-[30%]">
                  <h6 className="text-[14px] font-[400] text-white opacity-[50%] px-4">
                    Email
                  </h6>
                </div>
                <div className="w-[60%]">
                  <h6 className="text-[16px] font-[400] text-[#F2F2F2]">
                    info@gnginfotech.com
                  </h6>
                </div>
              </div>
              {/* call */}
              <div className="flex">
                <div className="w-[10%]">
                  <img
                    src={require("../../assets/images/commonComponents/call.png")}
                    alt=""
                    className="h-5"
                  />
                </div>
                <div className="w-[30%]">
                  <h6 className="text-[14px] font-[400] text-white opacity-[50%] px-4">
                    Call
                  </h6>
                </div>
                <div className="w-[60%]">
                  <h6 className="text-[16px] font-[400] text-[#F2F2F2]">
                    UAE <br />
                    +971-04-3349500
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full lg:w-5/12 pt-10">
          <div className="bg-[#1F1F1F] w-full px-6 py-8">
            <h6 className="text-[22px] font-[400] text-white px-4">
              For Project Inquiries
            </h6>
            <form className="py-4 px-4" onSubmit={(e) => submitHandler(e)}>
              {/* Name */}
              <div className="py-4">
                <input
                  className="w-full border-b placeholder-[#757575] border-[#757575] bg-transparent pb-3 outline-none text-[white]"
                  placeholder="Name"
                  value={userData.name}
                  onChange={(e) => {
                    changeDataHadnler("name", e.target.value);
                    validationHandler("name", false);
                  }}
                />
              </div>
              {/* error-message */}
              <div>
                <p className=" text-[#ED184F] text-[14px]">
                  {userDataValidation?.name && "Please enter your name"}
                </p>
              </div>
              {/* Email */}
              <div className="py-3">
                <input
                  className="w-full border-b placeholder-[#757575] border-[#757575] bg-transparent pb-3 outline-none text-[white]"
                  placeholder="Email Address"
                  value={userData.email}
                  onChange={(e) => {
                    changeDataHadnler("email", e.target.value);
                    validationHandler("email", false);
                  }}
                />
              </div>
              {/* error-message */}
              <div>
                <p className="py-1 text-[#ED184F] text-[14px]">
                  {userDataValidation?.email === true &&
                    "Please enter your email"}
                  {userDataValidation?.email === "Enter valid email" &&
                    "Enter valid email"}
                </p>
              </div>
              {/* contact number */}
              <div className="py-3 flex flex-col md:flex-row">
                <div className="w-full">
                  <input
                    type="number"
                    className="w-full border-b placeholder-[#757575] border-[#757575] bg-transparent pb-3 outline-none text-[white]"
                    placeholder="Phone Number"
                    value={userData.phone_number}
                    onChange={(e) => {
                      changeDataHadnler("phone_number", e.target.value);
                      validationHandler("phone_number", false);
                    }}
                  />
                </div>
              </div>
              {/* error-message */}
              <div>
                <p className="py-1 text-[#ED184F] text-[14px]">
                  {userDataValidation?.phone_number &&
                    "Please enter your number"}
                </p>
              </div>
              {/* country */}

              <div className="py-3">
                {/* <select
                  className="w-full border-b placeholder-[#757575] border-[#757575] bg-transparent pb-3 outline-none text-[white]"
                  value={userData.country}
                  onChange={(e) => {
                    countryOnChangeHandler(e.target.value);
                    validationHandler("country", false);
                  }}
                >
                  {countries.all?.map((item, index) => (
                    <option
                      className="bg-[#757575]"
                      value={item?.name}
                      key={index}
                    >
                      {item?.name}
                    </option>
                  ))}
                </select> */}
                <AutoComplete
                  countries={countries.all}
                  countryOnChangeHandler={countryOnChangeHandler}
                  blur={false}
                />
              </div>
              {/* error-message */}
              <div>
                <p className="py-1 text-[#ED184F] text-[14px]">
                  {userDataValidation?.country && "Please select country"}
                </p>
              </div>
              {/* Message */}
              <div className="pt-3 pb-2">
                <textarea
                  className="w-full border-b placeholder-[#757575] border-[#757575] bg-transparent pb-3 outline-none text-[white]"
                  placeholder="Message"
                  rows="3"
                  onChange={(e) => {
                    changeDataHadnler("message", e.target.value);
                    validationHandler("message", false);
                  }}
                  value={userData?.message}
                />
              </div>
              {/* error-message */}
              <div>
                <p className="pb-2 text-[#ED184F] text-[14px]">
                  {userDataValidation?.message && "Please enter your message"}
                </p>
              </div>
              <div className="w-6/12 md:w-5/12 lg:w-8/12 xl:w-6/12">
                <button className="border rounded-full text-[#fff] border-[#fdae21] bg-[#fdae21] text-[16px] xl:text-[18px] font-[500] py-3 px-6 flex justify-center w-full">
                  {loader ? (
                    <div
                      class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-[#fff] rounded-full"
                      role="status"
                      aria-label="loading"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectInquiries;
