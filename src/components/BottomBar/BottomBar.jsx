import React             from "react";

import download_modified from "../../images/download-modified.png";
import "./BottomBar.css";

export default function BottomBar() {
  return (
    <div className="container1">
      <div className="bottom_section1">
        <span className="bottombar">
          <ul>
            <li className="bottomDetails">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="deatails"
              >
                Privacy Policy
              </a>
            </li>
            <li className="bottomDetails">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="deatails"
              >
                Terms and Conditions
              </a>
            </li>
          </ul>
        </span>
      </div>
      <div className="bottom_section2">
        <img src={download_modified} alt="logo" className="logoImage2" />
        <div>
          <l1>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className="bottomPartcontact "
            >
              dictionarylk.com
            </a>
          </l1>
          <l1>
            <a
              href="https://gmail.google.com"
              target="_blank"
              rel="noreferrer"
              className="bottomPartcontact "
            >
              dictionarylk@gmail.com
            </a>
          </l1>
          <l1>
            <a href="#" className="bottomPartcontact">
              0114564560
            </a>
          </l1>
        </div>
      </div>
    </div>
  );
}
