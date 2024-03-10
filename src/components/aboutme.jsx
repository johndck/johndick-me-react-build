function Aboutme() {
  return (
    <div className="container">
      <div className="aboutMeContentContainer">
        <div className="aboutMeTextContent">
          <h3>Hello, me here... 👋</h3>
          <p>
            For the next decade, my work will on removing blockers to the
            all-electric economy. I want sustainable economic growth (powered by
            clean, renewable energy).
          </p>
          <br />
          <p>Areas of focus:</p>
          <br />
          <ul>
            <li className="focusArea">
              <span className="aboutMeAreas">Area 1:</span> all-electric homes
              powered by clean renewable energy
            </li>
            <li className="focusArea">
              <span className="aboutMeAreas">Area 2:</span> barriers to economic
              growth within sustainable energy solutions
            </li>
            <li className="focusArea">
              <span className="aboutMeAreas">Area 3:</span> tech innovation
              unlocking sustainable economic growth
            </li>
          </ul>
        </div>

        <div className="aboutMeImageContent">
          <img
            src="assets/johndick.jpg"
            alt="profile"
            className="aboutMeImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
