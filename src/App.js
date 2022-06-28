import "./App.css";
import HeaderBar                        from "./components/HeaderBar/HeaderBar";
import NavBar                           from "./components/NavBar/NavBar";
import Home                             from "./Pages/Home/Home";
import About                            from "./Pages/About/About";
import Contact                          from "./Pages/Contact/Contact";
import Help                             from "./Pages/Help/Help";
import BottomBar                        from "./components/BottomBar/BottomBar";
import Logo                             from "./components/Logo/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="container">
            <div className="section0">
              <HeaderBar />

              <NavBar />
            </div>

            <div className="section1">
              <Logo />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/abot" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
            </Routes>
            <div className="section3">{<BottomBar />}</div>
          </div>
        </BrowserRouter>
        <div>{/* <span>............................</span> */}</div>
      </div>
    </>
  );
}

export default App;
