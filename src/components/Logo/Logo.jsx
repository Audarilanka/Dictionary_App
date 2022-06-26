import React from "react";
import logo  from "../../images/download-modified.png";

import "./Logo.css";

export default function Logo() {
  return (
    <div>
      <div className="section1">
        <div>
          {/* <img src={require("../images/book_groups.jpg").default} alt="logo" /> */}

          <img src={logo} alt="logo" className="logoImage" />
        </div>
        <div className="title">
          <p className="name">DICTIONARY</p>
          <span className="description">
            Dictionaries are an invaluable learning tool. This app can help
            expand your English vocabulary.
          </span>
        </div>
      </div>
    </div>
  );
}
