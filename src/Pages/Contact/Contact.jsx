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
    <div className="contact-container">
      <div className="box">
        <p className="contactus">CONTACT US</p>
        {/* <form className="form" onSubmit={handleSubmit}> */}
        {submited && vaild ? (
          <div className="thanku">We got it.Thank you!</div>
        ) : null}

        <input
          // disabled={submited}
          onChange={handleFullnameInputChange}
          value={values.fullname}
          type="text"
          fullname="fullname"
          className="fullname i"
          placeholder="Full Name"
        />
        {submited && !values.fullname ? (
          <p className="warning1 w">Please Enter your Full Name </p>
        ) : null}

        <input
          // disabled={submited}
          onChange={handleEmailInputChange}
          value={values.email}
          type="text"
          email="email"
          className="email i"
          placeholder="Email"
        />
        {submited && !values.email ? (
          <p className="warning2 w">Please Enter a Email Addres </p>
        ) : null}

        <input
          // disabled={submited}
          onChange={handleMessageInputChange}
          value={values.message}
          type="text"
          message="message"
          className="message i"
          placeholder="Message"
        />

        {submited && !values.message ? (
          <p className="warning3 w">Please Enter your Message </p>
        ) : null}

        <button type="submit" className="button" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </div>
  );
}
