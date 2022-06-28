//import React from "react";
//import searchBox  from "../../components/SearchBox/searchBox";

import background from "../../images/book_stack.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <img src={background} alt="background" className="backgroundImage" />
        </div>

        {/* <searchBox /> */}

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
    </>
  );
}
