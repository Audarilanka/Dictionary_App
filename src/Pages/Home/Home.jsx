//import React from "react";
//import searchBox  from "../../components/SearchBox/searchBox";
//import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import background   from "../../images/book_stack.jpg";


//import background from "../../images/book_stack.jpg";

//import background from "../../images/book_stack.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <img src={background} alt="background" className="backgroundImage" />
        </div>
        {/* <div className="result-box"></div> */}

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
              <button className="search">
                <FaSearch size="30px" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
