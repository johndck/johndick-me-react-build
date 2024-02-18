import { Link } from "react-router-dom";

function Navbar() {
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
        <div className="hamburger">&#9776;</div>
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
