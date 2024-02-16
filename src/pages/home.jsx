import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>johndick.me personal site</p>
      <p>You are @johndick.me home</p>
      <Link style={{ paddingRight: "10px" }} to="/">
        Home
      </Link>
      <Link style={{ paddingRight: "10px" }} to="/Evidence">
        Evidence
      </Link>
      <Link style={{ paddingRight: "10px" }} to="/Focus">
        Focus
      </Link>
      <Link style={{ paddingRight: "10px" }} to="/Shaped">
        Shaped
      </Link>
      <Link style={{ paddingRight: "10px" }} to="/Contact">
        Contact
      </Link>
    </div>
  );
}

export default Home;
