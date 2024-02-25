function Aboutme() {
  return (
    <div className="container">
      <div className="aboutMeContentContainer">
        <div className="aboutMeTextContent">
          <h3>Hello, me here... 👋</h3>
          <p>
            For the next decade, I will be building solutions to make the
            all-electric economy happen. I want to deliver sustainable economic
            growth (powered by clean, renewable energy).
          </p>
          <br />
          <p>Focus areas for me are:</p>

          <ul>
            <li>
              <span className="aboutMeAreas">Area 1:</span> consumer behaviour &
              services across energy and financial markets
            </li>
            <li>
              <span className="aboutMeAreas">Area 2:</span> tackling the
              barriers to economic growth with sustainable solutions
            </li>
            <li>
              <span className="aboutMeAreas">Area 3:</span> technological
              innovation to drive sustainable economic growth
            </li>
          </ul>
        </div>

        <div className="aboutMeImageContent">
          <img src="assets/jdwork.jpg" alt="profile" className="aboutMeImage" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
