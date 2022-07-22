import { useState } from "react";
// import background   from "../../images/book_stack.jpg";

//import dog from "../../pictures/dog.jpg";
//import Data         from "./Data";

//import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";

export default function Home(props) {
  const List = [
    {
      words: "A bed of roses",
      meaning:
        "a phrase used to reference a situation that is easy or comfortable",
      pic: "",
    },
    {
      words: "A Priori",
      meaning:
        "something that is believed to be true without actual reinforcement with facts or statistics",
      pic: "",
    },
    {
      words: "Aardvark",
      meaning:
        "a large, long-eared nocturnal animal that uses its long tongue to eat ants and termites",
      pic: "",
    },
    {
      words: "Aback",
      meaning: "in amazement; shocked",
      pic: "",
    },
    {
      words: "Abaft",
      meaning: "toward the stern; behind",
      pic: "",
    },
    {
      words: "Abandon",
      meaning: "to stop caring and leave or to desert",
      pic: "",
    },
    {
      words: "Abase",
      meaning: "to lower so as to hurt feelings",
      pic: "",
    },
    {
      words: "Abaser",
      meaning: "someone who degrades or lowers someone",
      pic: "",
    },
    {
      words: "Abash",
      meaning: "to humiliate someone and make them feel embarrassed or ashamed",
      pic: "",
    },
    {
      words: "Pen",
      meaning:
        "an instrument for writing or drawing with ink, typically consisting of a metal nib or ball, or a nylon tip, fitted into a metal or plastic holder.",
      pic: "",
    },
    {
      words: "Book",
      meaning:
        "a written or printed work consisting of pages glued or sewn together along one side and bound in covers.",
      pic: "",
    },
    {
      words: "Flower",
      meaning:
        "the seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) that are typically surrounded by a brightly coloured corolla (petals) and a green calyx (sepals).",
      pic: "",
    },
    {
      words: "Tree",
      meaning:
        "a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.",
      pic: "",
    },
    {
      words: "Sun",
      meaning: "the star round which the earth orbits.",
      pic: "",
    },
    {
      words: "Moon",
      meaning:
        "the natural satellite of the earth, visible (chiefly at night) by reflected light from the sun.",
      pic: "",
    },
    {
      words: "Cat",
      meaning:
        "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.",
      pic: "",
    },
    {
      words: "Dog",
      meaning:
        "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice",
      pic: "",
    },
  ];

  const [word, setWord] = useState("");
  const [ok, setOk] = useState(false);
  // const [filtereddata, setFiltereddata] = useState([]);

  const handleSubmit = (Event) => {
    Event.preventDefault();
    setOk(true);
  };

  function showEntry(list_item) {
    if (list_item.words === word)
      return <li key={list_item.words}>{list_item.meaning}</li>;
  }

  const [filtereddata, setFiltereddata] = useState([]);
  const [wordEnterd, setWordEnterd] = useState("");

  const handdleFilter = (Event) => {
    //const searchWord = Event.target.value;
    Event.preventDefault();
    setWord(Event.target.value);
    setOk(false);
    setWordEnterd(word);
    const newFilter = List.filter((list_item) => {
      return list_item.words.toLowerCase().includes(word.toLowerCase());
    });

    if (word === "") {
      setFiltereddata([]);
    } else {
      setFiltereddata(newFilter);
    }
  };

  return (
    <>
      <div>
        <img
          src={`data:image/jpeg;base64,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`}
          alt="background"
          className="backgroundImage"
        />
      </div>
      {/* <div id="result" className="result-box"></div> */}

      <div className="searchBar">
        <form className="form" onSubmit={handleSubmit}>
          {/* {word && ok ? <div className="message"> {word}hello</div> : null} */}
          <label>
            <span className="english"> English</span>
            <input
              type="text"
              placeholder="Search LK Advanced Learner’s Dictionary"
              className="word"
              value={word}
              // onChange={(e) => {
              //   setWord(e.target.value);
              //   setOk(false);
              //   //setWordEnterd(word);
              // }}
              onChange={handdleFilter}
            />
            {ok && !word ? (
              <div className="warning">Please Enter a word !</div>
            ) : null}
          </label>
          <div>
            <button className="search">Search</button>
          </div>
        </form>
      </div>

      {filtereddata.length !== 0 && (
        <div className="dropdown">
          {filtereddata.slice(0, 10).map((list_item, key) => {
            return (
              <a className="dropdownrow" href="#">
                <p> {list_item.words}</p>
              </a>
            );
          })}
        </div>
      )}
      {ok && word ? (
        <div className="result-box">
          <p>{word}</p>
          <hr />
          {ok && <ul>{List.map(showEntry)}</ul>}
          bbbbbbbbbbbbbbbbbbbbbbb
        </div>
      ) : null}
    </>
  );
}
