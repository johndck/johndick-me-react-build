{
  /* This hero section is unique to the homepage*/
}
import { Link } from "react-router-dom";

function Showcase() {
  return (
    <div className="showcaseSection">
      <div className="container">
        <div className="showcase showcaseTitle">
          <h2>
            I have made things happen{" "}
            <span className="showcaseTitleOrange">in these organisations.</span>{" "}
          </h2>
        </div>

        <div className="showcaseLogocontainer">
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/RGA.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/ESURE.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/PrincesTrust.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/FCA.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/NetworkRail.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/Homeserve.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/MOD.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
          <div className="showcaseLogoCard">
            <div>
              <img
                src="/assets/Capgemini.png"
                alt="Reinsurance Group of America"
                className="showcaseIcon"
              />
            </div>
          </div>
        </div>

        <div className="showcase showcaseTitle">
          {" "}
          Want evidence? See:
          <Link to="/Evidence" className="showcaseLink">
            Past delivery
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
