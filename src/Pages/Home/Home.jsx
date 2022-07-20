import { useState } from "react";
import background from "../../images/book_stack.jpg";

//import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";

export default function Home() {
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
      words: "Abate",
      meaning: "to reduce in degree or intensity",
      pic: "",
    },
    {
      words: "Abatement",
      meaning: "reduction or weakening or something",
      pic: "",
    },
    {
      words: "Abattoir",
      meaning: "a place where animals are taken to slaughter",
      pic: "",
    },
    {
      words: "Abbess",
      meaning: "the female superior of a community of nuns",
      pic: "",
    },
    {
      words: "Abbreviate",
      meaning: "to shorten a word or phrase",
      pic: "",
    },
    {
      words: "Abdicate",
      meaning:
        "to stop accepting a particular responsibility or obligation that you have",
      pic: "",
    },
    {
      words: "Abdominal",
      meaning:
        "related to the abdomen/stomach, or the part between the thorax and the pelvis",
      pic: "",
    },
    {
      words: "Abduct",
      meaning: "to grab an individual by trickery or force",
      pic: "",
    },
  ];

  const [word, setWord] = useState("");
  const [submited, setSubmited] = useState(false);
  const [vaild, setVaild] = useState(false);
  const [ok, setOk] = useState(false);

  const handleSubmit = (Event) => {
    Event.preventDefault();

    setSubmited("");
    setOk(true);
  };

  function showEntry(list_item) {
    if (list_item.words === word)
      return <li key={list_item.words}>{list_item.meaning}</li>;
  }

  // const [filtereddata, setFiltereddata] = useState([]);
  // const [wordEnterd, setWordEnterd] = useState("");

  // const handdleFilter = (Event) => {
  //   const searchWorld = Event.target.value;
  //   setWordEnterd(searchWorld);
  //   const newFilter = value.filter((value) => {
  //     return value.word.toLowerCase().includes(searchWorld.toLowerCase());
  //   });

  //   if (searchWorld === "") {
  //     setFiltereddata([]);
  //   } else {
  //     setFiltereddata(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFiltereddata([]);
  //   setWordEnterd("");
  // };

  // return (
  //   <>
  //     <div>
  //       <div>
  //         <img src={background} alt="background" className="backgroundImage" />
  //       </div>
  //       <div id="result" className="result-box"></div>

  //       <div className="searchBar">
  //         <form className="form">
  //           <label>
  //             <span className="english"> English</span>
  //             <input
  //               type="text"
  //               placeholder="Search LK Advanced Learner’s Dictionary"
  //               className="word"
  //               value={wordEnterd}
  //               // data={bookdata}
  //               onChange={handdleFilter}
  //             />
  //           </label>
  //           <div>
  //             <button className="search">
  //               {filtereddata.length === 0 ? (
  //                 <SearchIcon className="click" />
  //               ) : (
  //                 <CloseIcon className="click" onClick={clearInput} />
  //               )}
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //       {filtereddata.length !== 0 && (
  //         <div className="dropdown">
  //           {filtereddata.slice(0, 10).map((value, key) => {
  //             return (
  //               <a className="dropdownrow" href="#result">
  //                 <p>{value.word}</p>
  //               </a>
  //             );
  //           })}
  //         </div>
  //       )}
  //     </div>
  //   </>
  // );

  return (
    <>
      <div>
        <img src={background} alt="background" className="backgroundImage" />
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
              onChange={(e) => {
                setWord(e.target.value);
                setOk(false);
              }}
            />
            {ok && !word ? (
              <div className="warning">Please Enter a word </div>
            ) : null}
          </label>
          <div>
            <button className="search">Search</button>
          </div>
        </form>
      </div>
      {ok && word ? (
        <div className="result-box">
          {ok && <ul>{List.map(showEntry)}</ul>}
          bbbbbbbbbbbbbbbbbbbbbbb
        </div>
      ) : null}
    </>
  );
}
