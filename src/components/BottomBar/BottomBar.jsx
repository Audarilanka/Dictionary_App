import React from "react";

import download_modified from "../../images/download-modified.png";
import "./BottomBar.css";

export default function BottomBar() {
  return (
    <div className="containerBottom">
      <div className="bottom_section1">
        <span className="bottombar">
          <p className="bottomDetails">
            <a
              href="http://localhost:3000/about"
              target="_blank"
              rel="noreferrer"
              className="deatails"
            >
              Privacy Policy
            </a>
          </p>
          <p className="bottomDetails">
            <a
              href="http://localhost:3000/about"
              target="_blank"
              rel="noreferrer"
              className="deatails"
            >
              Terms and Conditions
            </a>
          </p>
        </span>
      </div>

      <div className="bottom_section3">
        <img src={download_modified} alt="logo" className="logoImage2" />
      </div>
      <div className="bottom_section2">
        <l1>
          <a
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noreferrer"
            className="bottomPartcontact "
          >
            dictionarylk.com
          </a>
        </l1>
        <l1>
          <a
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noreferrer"
            className="bottomPartcontact "
          >
            dictionarylk@gmail.com
          </a>
        </l1>
        <l1>
          <a href="http://localhost:3000/contact" className="bottomPartcontact">
            0114564560
          </a>
        </l1>
      </div>
    </div>
  );
}
