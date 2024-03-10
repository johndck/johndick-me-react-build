function ProjectCard({ card }) {
  return (
    <div className="evidenceCard">
      <div className="evidenceTop">
        <div>
          <img src={card.logo} alt="logo" className="evidenceLogo" />
        </div>

        <h2>{card.companyName}</h2>
      </div>

      <hr />
      <h3>
        <span className="evidenceChallenge">The challenge:</span>
      </h3>
      <p>{card.challenge}</p>
      <h3>
        <span className="evidenceActions">My Actions: </span>
      </h3>
      <p>{card.actions[0]}</p>
      <p>{card.actions[1]}</p>
      <p>{card.actions[2]}</p>
      <h3>
        <span className="evidenceResults">Results: </span>
      </h3>
      <ul className="evidenceUL">
        <li>{card.results[0]}</li>
        {card.results[1] && <li>{card.results[1]}</li>}
        {card.results[2] && <li>{card.results[2]}</li>}
      </ul>
    </div>
  );
}

export default ProjectCard;
