function TopSection({ title, description }) {
  return (
    <div className="container topSection">
      <h2>{title}</h2>

      <p> {description}</p>
    </div>
  );
}

export default TopSection;
