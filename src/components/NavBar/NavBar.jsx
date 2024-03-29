import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button.js";
import "./NavBar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo l1" onClick={closeMobileMenu}>
            Dictionary
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links l2"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links l3"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/help"
                className="nav-links l4"
                onClick={closeMobileMenu}
              >
                Help
              </Link>
            </li>

            <li>
              <Link
                to="/add"
                className="nav-links-mobile nav-links "
                onClick={closeMobileMenu}
              >
                ADD
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">ADD</Button>} */}
        </div>
      </nav>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "./Button.js";
// import "./NavBar.css";
// export default function NavBar() {

//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

//   return (
//     <div>
//       <nav className="navbar1">
//         <Link to="/" className="nav-links l1" onClick={closeMobileMenu}>
//           <li className="nav-item dic">Dictionary</li>
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//         <Link to="/about" className="nav-links l2" onClick={closeMobileMenu}>
//           <li className="nav-item">About Us</li>
//         </Link>
//         <Link to="/contact" className="nav-links l3" onClick={closeMobileMenu}>
//           <li className="nav-item">Contact</li>
//         </Link>
//         <Link to="/help" className="nav-links l4" onClick={closeMobileMenu}>
//           <li className="nav-item">Help</li>
//         </Link>
//         <Link to="/add" className="nav-links-mobile l5" onClick={closeMobileMenu}>
//           <button className="nav-item add">ADD</button>
//         </Link>
//         </ul>
//         {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
//       </nav>
//     </div>
//   );
// }
