import React from "react";
import { useState } from "react";
import "./Home.css";

import background1 from "../../images/book_stack.jpg";
import background2 from "../../images/books-bob-deca-slide.jpg";
import background3 from "../../images/1586857293-pexels-photo-590493.jpeg";
import background4 from "../../images/001.jpg";
import background5 from "../../images/library-b694b8c4b0334227a4d614158cc1deb6.jpg";
import background6 from "../../images/photo-1521410396661-220864cbc37d.jpg";
import background7 from "../../images/66666.jpg";

// const background1 = new URL(
//   "../../images/book_stack - Copy.jpg",
//   import.meta.url
// );

// const background7 = {
//   backgroundImage: new URL("../../images/66666.jpg", import.meta.url),
// };

import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const images = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
    //background8,
  ];

  const [background, setBackground] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBackground((v) => {
        return v === 6 ? 0 : v + 1;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

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

  const [value, setValue] = useState("");
  const [ok, setOk] = useState(false);

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setOk(true);
  };

  function showEntry(list_item) {
    const searchTerm = value.toLowerCase();
    const word = list_item.words.toLowerCase();
    if (word === searchTerm)
      return <div key={list_item.words}>{list_item.meaning}</div>;
  }

  const handdleWord = (Event) => {
    Event.preventDefault();
    setValue(Event.target.value);
    setOk(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${images[background]})` }}
      className="home-container"
    >
      {/* <div className="background">
        <img src={images[background]} alt="img" className="backgroundImage" />
      </div> */}

      <div className="searchBar">
        <div className="english">
          <p className="eng">English</p>
        </div>

        <input
          type="text"
          placeholder="Search LK Advanced Learner’s Dictionary"
          className="word"
          value={value}
          onChange={handdleWord}
        />

        {/* {ok && !value ? (
          <div className="warning">Please Enter a word !</div>
        ) : null} */}

        <button className="search" onClick={() => onSearch(value)}>
          <SearchIcon />
        </button>
        {/* <div>.................</div> */}
        <div className="dropdown">
          {List.filter((item) => {
            const searchTerm = value.toLowerCase();
            const word = item.words.toLowerCase();
            return (
              searchTerm && word.startsWith(searchTerm) && word !== searchTerm
            );
          })
            .slice(0, 10)
            .map((item) => (
              <div onClick={() => onSearch(item.words)} className="dropdownrow">
                <a className="dropdownlink">{item.words}</a>
              </div>
            ))}
        </div>
      </div>

      {ok && value ? (
        <div className="result-box">
          <div className="YourSearch rb">You are Searching</div>
          <div className="value rb ">{value}</div>

          <div>
            <hr className="hr rb" />
          </div>
          <div className="ys">
            <p className="YourSearch rb">Meaning of {value} in English</p>
            {ok && <div className="meaning rb">{List.map(showEntry)}</div>}
          </div>
        </div>
      ) : null}
    </div>
  );
}
