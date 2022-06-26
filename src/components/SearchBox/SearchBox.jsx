import { useState } from "react";

export default function searchBox() {
  const [wordInfo, setInfo] = useState({
    word: "",
  });
  return (
    <div>
      <div className="searchBar section5">
        <form className="form">
          <label className="label">
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
