import React from "react";
import "./Add.css";

const Delete = () => {
  return (
    <div className="Delete-box">
      <div className="dlt-title">
        Do you want to delete words from the dictionary? You can only remove
        words that you’ve added yourself.
      </div>
      <input
        type="text"
        placeholder="What do you want to delete"
        className="deleteaword"
        //value={value}
        //onChange={handdleWord}
      />

      {/* {ok && !value ? (
          <div className="warning">Please Enter a word !</div>
        ) : null} */}

      <button className="dltbtn">Delete</button>
    </div>
  );
};
export default Delete;
