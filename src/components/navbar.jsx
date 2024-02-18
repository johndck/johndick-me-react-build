import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function openNav() {
    setOpen(!isOpen);
  }

  function closeNav() {
    setOpen(false);
  }

  return (
    <div className="container navbar">
      {/*logo link to homepage */}
      <div>
        <Link to="/">
          <img
            src="/src/assets/logo.svg"
            alt="my site logo of 6 block colours"
            className="logo"
          />
        </Link>
      </div>
      {/*logo link to homepage */}
      <div>
        <div className="hamburger">
          <button onClick={openNav}>&#9776;</button>
        </div>

        {/* nav bar for smaller screens*/}

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <button className="closebtn" onClick={closeNav}>
            X{" "}
          </button>

          <ul>
            <li>
              <Link to="/" onClick={closeNav}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/Evidence" onClick={closeNav}>
                Past delivery
              </Link>
            </li>
            <li>
              <Link to="/Focus" onClick={closeNav}>
                Current focus
              </Link>
            </li>
            <li>
              <Link to="/Shaped" onClick={closeNav}>
                Influenced by
              </Link>
            </li>
          </ul>
        </div>

        <ul className="navbarElements">
          <li>
            <Link to="/Evidence">Past delivery</Link>
          </li>
          <li>
            <Link to="/Focus">Current focus</Link>
          </li>
          <li>
            <Link to="/Shaped">Influenced by</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
