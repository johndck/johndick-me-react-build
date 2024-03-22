import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function openNav() {
    setOpen(!isOpen);
  }

  function closeNav() {
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbarContent">
        <div>
          <Link to="/">
            <img
              src="/assets/johndick.png"
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
              <NavLink to="/Evidence">Past delivery</NavLink>
            </li>
            <li>
              <NavLink to="/Focus">Current focus</NavLink>
            </li>
            <li>
              <NavLink to="/Shaped">Influenced by</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/*logo link to homepage */}
    </header>
  );
}

export default Navbar;
