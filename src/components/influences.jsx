function InfluenceCards({ influence }) {
  return (
    <div className="influencesCard">
      <div className="influencerTitle">
        <h3>{influence.influence}</h3>
      </div>
      <div className="influencerDescription">
        <p>{influence.explanation}</p>
      </div>
      <div>
        <a href={influence.linkto} target="_blank" rel="noopener noreferrer">
          Find out more <span className="influencerArrow">&rarr;</span>{" "}
          {influence.linkto}
        </a>
      </div>
    </div>
  );
}

export default InfluenceCards;
