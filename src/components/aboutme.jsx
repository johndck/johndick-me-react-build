function Aboutme() {
  return (
    <div className="container">
      <div className="aboutMeContentContainer">
        <div className="aboutMeTextContent">
          <h3>Hello this is me 👋</h3>
          <p>
            Over the next decade, my work will be on making the transition to
            the all-electric economy happen, and doing my best to unlock growth
            for the UK economy.
          </p>
          <ul>
            <li>
              Priority 1: develop digital services to reduce the cost of
              residential energy.
            </li>
            <li>
              Priority 2: improve my coding skills and understand how new AI
              tools can make me more productive.
            </li>
            <li>
              Priority 3: launch test services to tackle specific problems in
              the GB energy system.{" "}
            </li>
            <li>
              Priority 4: offer my expertise and passion to unlock delivery of
              public sector services.
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
