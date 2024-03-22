function TopSection({ title, description }) {
  return (
    <div className="container topSection">
      <h3>{title}</h3>

      <p> {description}</p>
    </div>
  );
}

export default TopSection;
