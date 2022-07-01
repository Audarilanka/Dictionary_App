import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [submited, setSubmited] = useState(false);
  const [vaild, setVaild] = useState(false);

  const handleFullnameInputChange = (Event) => {
    setValues({ ...values, fullname: Event.target.value });
  };

  const handleEmailInputChange = (Event) => {
    setValues({ ...values, email: Event.target.value });
  };

  const handleMessageInputChange = (Event) => {
    setValues({ ...values, message: Event.target.value });
  };

  const handleSubmit = (Event) => {
    Event.preventDefault();
    if (values.fullname && values.email && values.message) {
      setVaild(true);
    }
    setSubmited(true);
  };

  return (
    <>
      <div>
        <div className="contact-background">
          <p className="contactus">
            <b>Contact Us</b>
          </p>
          <div className="contactbox">
            <form onSubmit={handleSubmit}>
              {submited && vaild ? (
                <div className="thanku">We got it.Thank you!</div>
              ) : null}
              <label>
                <p>
                  <input
                    // disabled={submited}
                    onChange={handleFullnameInputChange}
                    value={values.fullname}
                    type="text"
                    fullname="fullname"
                    className="fullname"
                    placeholder="Full Name"
                  />
                  {submited && !values.fullname ? (
                    <p className="warning">Please Enter your Full Name </p>
                  ) : null}
                </p>
                <p>
                  <input
                    // disabled={submited}
                    onChange={handleEmailInputChange}
                    value={values.email}
                    type="text"
                    email="email"
                    className="email"
                    placeholder="Email"
                  />
                  {submited && !values.email ? (
                    <p className="warning">Please Enter a Email Addres </p>
                  ) : null}
                </p>
                <p>
                  <input
                    // disabled={submited}
                    onChange={handleMessageInputChange}
                    value={values.message}
                    type="text"
                    message="message"
                    className="message"
                    placeholder="Message"
                  />
                  {submited && !values.message ? (
                    <p className="warning">Please Enter your Message </p>
                  ) : null}
                </p>
              </label>
              <button type="submit" className="button">
                submit
              </button>
            </form>
          </div>
          {/* <button type="submit" className="button" onSubmit={handleSubmit}>
            Submit
          </button> */}
        </div>
      </div>
    </>
  );
}
