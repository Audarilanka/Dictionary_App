import React, { useState } from "react";
//import Add from "../Add/Add";
import "./Add.css";

const AddWord = (wordId) => {
  const [values, setValues] = useState({
    newWord: "",
    neWmeaning: "",
    neWmessage: "",
  });

  const [submited, setSubmited] = useState(false);
  const [vaild, setVaild] = useState(false);

  const handleFullnameInputChange = (Event) => {
    setValues({ ...values, newWord: Event.target.value });
  };

  const handleEmailInputChange = (Event) => {
    setValues({ ...values, neWmeaning: Event.target.value });
  };

  const handleMessageInputChange = (Event) => {
    setValues({ ...values, neWmessage: Event.target.value });
  };

  const handleSubmit = (Event) => {
    Event.preventDefault();
    if (values.newWord && values.neWmeaning && values.neWmessage) {
      setVaild(true);
    }
    setSubmited(true);
  };

  return (
    <div className="addbox">
      <p className="addnew">Add Your New Word</p>
      {/* <form className="form" onSubmit={handleSubmit}> */}
      {submited && vaild ? (
        <div className="thanks">
          We added your word to our Dictionary.Thank you!
        </div>
      ) : null}

      <input
        // disabled={submited}
        onChange={handleFullnameInputChange}
        value={values.newWord}
        type="text"
        newWord="newWord"
        className="newWord y"
        placeholder="Enter Your Word"
      />
      {submited && !values.newWord ? (
        <p className="warning1 ww">Please Enter your Word </p>
      ) : null}

      <input
        // disabled={submited}
        onChange={handleEmailInputChange}
        value={values.neWmeaning}
        type="text"
        neWmeaning="neWmeaning"
        className="neWmeaning y"
        placeholder="Meaning"
      />
      {submited && !values.neWmeaning ? (
        <p className="warning2 ww">Please Enter the Meaning of the Word </p>
      ) : null}

      <div className="any-msg">Do you have a message to share with this?</div>

      <input
        // disabled={submited}
        onChange={handleMessageInputChange}
        value={values.neWmessage}
        type="text"
        neWmessage="neWmessage"
        className="neWmessage y"
        placeholder="Message"
      />

      {/* {submited && !values.neWmessage ? (
        <p className="warning3 w">Please Enter your Message </p>
      ) : null} */}

      <button type="submit" className="btn" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};
export default AddWord;
