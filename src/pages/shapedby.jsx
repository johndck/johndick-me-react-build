import TopSection from "../components/topsection";
import data from "../influences.json";
import InfluenceCards from "../components/influences";
import Footer from "../components/footer";

const evidenceTitle = "Sources of influences";
const evidenceDescription =
  "These resources are my common reference material when trying to crack an important problem or remind myself on important thinking.";

console.log(data);

function Shaped() {
  return (
    <div>
      <TopSection title={evidenceTitle} description={evidenceDescription} />

      <div className="container">
        <div className="influenceCardHolder">
          <div className="influenceGridHolder">
            {data.map((influence) => {
              return (
                <InfluenceCards key={influence.id} influence={influence} />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shaped;
