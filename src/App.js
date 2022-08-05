import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Help from "./Pages/Help/Help";
import BottomBar from "./components/BottomBar/BottomBar";
import Logo from "./components/Logo/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Data } from "./Data";
//import { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState(0);
  // useEffect(() => {
  //   console.log("Occurs ONCE, AFTER the initial render.");
  //   setData(Data);
  // }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <div>
              <HeaderBar />

              <NavBar />
            </div>

            <div>
              <Logo />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/abot" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
            </Routes>
            <div>{<BottomBar />}</div>
          </div>
          {/* {console.log(data[0])} */}
        </BrowserRouter>
        <div>{/* <span>............................</span> */}</div>
      </div>
    </>
  );
}

export default App;
