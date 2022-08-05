import React from "react";
import logo from "../../images/download-modified.png";

import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-container">
      {/* <img src={require("../images/book_groups.jpg").default} alt="logo" /> */}

      <img src={logo} alt="logo" className="logoImage" />

      <p className="name">DICTIONARY</p>

      <p className="description">
        Dictionaries are an invaluable learning tool. This app can help expand
        your English vocabulary.
      </p>
    </div>
  );
}
