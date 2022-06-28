import React from "react";
import "./HeaderBar.css";

export default function HeaderBar() {
  return (
    <div>
      <span className="header">
        <a
          className="headerText"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer"
        >
          dictionary.lk
        </a>
      </span>
    </div>
  );
}
