function Aboutme() {
  return (
    <div className="container">
      <div className="aboutMeContentContainer">
        <div className="aboutMeTextContent">
          <h3>Hello this is me</h3>
          <p>
            In one sentence this is your story if it is correct and this will
            only go as far as 50%
          </p>
          <ul>
            <li>4 facts</li>
            <li>4 facts</li>
            <li>4 facts</li>
            <li>4 facts</li>
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
