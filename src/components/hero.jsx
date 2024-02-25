{
  /* This hero section is unique to the homepage*/
}

function Hero() {
  return (
    <div className="container hero">
      <h1>John Dick</h1>
      <h4 className="problemText">Problem:</h4>
      <h2>
        Who am I<span className="redq">?</span>
      </h2>
      <h4 className="solutionText">Solution:</h4>
      <p>
        {" "}
        <span className="orangehighlight">
          This is my website. It provides{" "}
          <span>facts about my past, present and future work.</span>
        </span>{" "}
        🤔
      </p>
    </div>
  );
}

export default Hero;
