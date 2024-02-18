import TopSection from "../components/topsection";

const evidenceTitle = "Important influences";
const evidenceDescription = "What shapes and influences my thinking.";

function Shaped() {
  return (
    <div>
      <TopSection title={evidenceTitle} description={evidenceDescription} />
    </div>
  );
}

export default Shaped;
