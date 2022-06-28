import React from "react";
import "./SearchBox.css";

export default function searchBox() {
  return (
    <div>
      <div className="searchBar">
        <form className="form">
          <label>
            <span className="english"> English</span>
            <input
              type="text"
              word="words"
              placeholder="Search LK Advanced Learner’s Dictionary"
              className="word"
            />
          </label>
          <div>
            <button className="search">Search </button>
          </div>
        </form>
      </div>
    </div>
  );
}
