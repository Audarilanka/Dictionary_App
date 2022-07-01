import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
//import { FaSearch } from "react-icons/fa";
import background from "../../images/book_stack.jpg";
import "./Home.css";

export default function Home() {
  const [value, setValue] = useState([
    {
      id: 5,
      first_name: "Rabbi",
      last_name: "Goggan",
      email: "rgoggan4@last.fm",
    },
    {
      id: 6,
      first_name: "Marina",
      last_name: "Hannond",
      email: "mhannond5@meetup.com",
    },
    {
      id: 7,
      first_name: "Miquela",
      last_name: "Lief",
      email: "mlief6@skyrock.com",
    },
    {
      id: 8,
      first_name: "Nata",
      last_name: "Corless",
      email: "ncorless7@creativecommons.org",
    },
    {
      id: 9,
      first_name: "Rivkah",
      last_name: "Hedditch",
      email: "rhedditch8@blogs.com",
    },
    {
      id: 10,
      first_name: "Loren",
      last_name: "Yurshev",
      email: "lyurshev9@liveinternet.ru",
    },
    {
      id: 11,
      first_name: "Moishe",
      last_name: "MacAree",
      email: "mmacareea@mlb.com",
    },
    {
      id: 12,
      first_name: "Bertrand",
      last_name: "Garken",
      email: "bgarkenb@marriott.com",
    },
    {
      id: 13,
      first_name: "Dudley",
      last_name: "Merrigan",
      email: "dmerriganc@unicef.org",
    },
    {
      id: 14,
      first_name: "Dwain",
      last_name: "O'Duilleain",
      email: "doduilleaind@instagram.com",
    },
  ]);
  const [filtereddata, setFiltereddata] = useState([]);
  const [wordEnterd, setWordEnterd] = useState("");

  const handdleFilter = (Event) => {
    const searchWorld = Event.target.value;
    setWordEnterd(searchWorld);
    const newFilter = value.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWorld.toLowerCase());
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
        {/* <div className="result-box"></div> */}

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
                  <SearchIcon />
                ) : (
                  <CloseIcon onClick={clearInput} />
                )}
              </button>
            </div>
          </form>
        </div>
        {filtereddata.length !== 0 && (
          <div className="dropdown">
            {filtereddata.slice(0, 10).map((value, key) => {
              return (
                <a className="dropdownrow" href="google.com" target="_blank">
                  <p>{value.first_name}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
