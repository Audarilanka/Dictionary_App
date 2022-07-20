import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
//import { FaSearch } from "react-icons/fa";
import background from "../../images/book_stack.jpg";
import "./Home.css";

export default function Home() {
  const [value, setValue] = useState([
    {
      word: "A bed of roses",
      meaning:
        "a phrase used to reference a situation that is easy or comfortable",
      pic: "",
    },
    {
      word: "A Priori",
      meaning:
        "something that is believed to be true without actual reinforcement with facts or statistics",
      pic: "",
    },
    {
      word: "Aardvark",
      meaning:
        "a large, long-eared nocturnal animal that uses its long tongue to eat ants and termites",
      pic: "",
    },
    {
      word: "Aback ",
      meaning: "in amazement; shocked",
      pic: "",
    },
    {
      word: "Abaft",
      meaning: "toward the stern; behind",
      pic: "",
    },
    {
      word: "Abandon",
      meaning: "to stop caring and leave or to desert",
      pic: "",
    },
    {
      word: "Abase",
      meaning: "to lower so as to hurt feelings",
      pic: "",
    },
    {
      word: "Abaser",
      meaning: "someone who degrades or lowers someone",
      pic: "",
    },
    {
      word: "Abash",
      meaning: "to humiliate someone and make them feel embarrassed or ashamed",
      pic: "",
    },
    {
      word: "Abate",
      meaning: "to reduce in degree or intensity",
      pic: "",
    },
    {
      word: "Abatement",
      meaning: "reduction or weakening or something",
      pic: "",
    },
    {
      word: "Abattoir",
      meaning: "a place where animals are taken to slaughter",
      pic: "",
    },
    {
      word: "Abbess",
      meaning: "the female superior of a community of nuns",
      pic: "",
    },
    {
      word: "Abbreviate",
      meaning: "to shorten a word or phrase",
      pic: "",
    },
    {
      word: "Abdicate",
      meaning:
        "to stop accepting a particular responsibility or obligation that you have",
      pic: "",
    },
    {
      word: "Abdominal",
      meaning:
        "related to the abdomen/stomach, or the part between the thorax and the pelvis",
      pic: "",
    },
    {
      word: "Abduct",
      meaning: "to grab an individual by trickery or force",
      pic: "",
    },
  ]);
  const [filtereddata, setFiltereddata] = useState([]);
  const [wordEnterd, setWordEnterd] = useState("");

  const handdleFilter = (Event) => {
    const searchWorld = Event.target.value;
    setWordEnterd(searchWorld);
    const newFilter = value.filter((value) => {
      return value.word.toLowerCase().includes(searchWorld.toLowerCase());
    });

    if (searchWorld === "") {
      setFiltereddata([]);
    } else {
      setFiltereddata(newFilter);
    }
  };

  const clearInput = () => {
    setFiltereddata([]);
    setWordEnterd("");
  };

  return (
    <>
      <div>
        <div>
          <img src={background} alt="background" className="backgroundImage" />
        </div>
         <div id="result" className="result-box"></div> 

        <div className="searchBar">
          <form className="form">
            <label>
              <span className="english"> English</span>
              <input
                type="text"
                placeholder="Search LK Advanced Learner’s Dictionary"
                className="word"
                value={wordEnterd}
                // data={bookdata}
                onChange={handdleFilter}
              />
            </label>
            <div>
              <button className="search">
                {filtereddata.length === 0 ? (
                  <SearchIcon className="click" />
                ) : (
                  <CloseIcon className="click" onClick={clearInput} />
                )}
              </button>
            </div>
          </form>
        </div>
        {filtereddata.length !== 0 && (
          <div className="dropdown">
            {filtereddata.slice(0, 10).map((value, key) => {
              return (
                <a className="dropdownrow" href="#result">
                  <p>{value.word}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
