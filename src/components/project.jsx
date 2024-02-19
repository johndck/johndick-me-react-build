function ProjectCard({ card }) {
  return (
    <div>
      <h2>{card.companyName}</h2>
      <h3>The challenge:</h3>
      <p>{card.challenge}</p>
      <h3>My actions</h3>
      <p>{card.actions[0]}</p>
      <p>{card.actions[1]}</p>
      <p>{card.actions[2]}</p>
      <h3>Results</h3>
      <p>{card.results[0]}</p>
      <p>{card.results[1]}</p>
      <p>{card.results[2]}</p>
    </div>
  );
}

export default ProjectCard;
