import React from "react";
import "./HeaderBar.css";

export default function HeaderBar() {
  return (
    <div className="header">
      <span>
        <a
          className="headerText"
          href="http://localhost:3000/abot"
          target="_blank"
          rel="noreferrer"
        >
          dictionary.lk
        </a>
      </span>
    </div>
  );
}
