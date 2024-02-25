import TopSection from "../components/topsection";
import ProjectCard from "../components/project";
import data from "../deliveryList.json";
import Footer from "../components/footer";

const evidenceTitle = "Past delivery";
const evidenceDescription =
  "Evidence of my work over the last couple of decades....";

function Evidence() {
  console.log(data);

  return (
    <>
      <TopSection title={evidenceTitle} description={evidenceDescription} />

      <div className="container">
        <div className="evidenceCardHolder">
          <div className="evidenceGridHolder">
            {data.map((card) => {
              return <ProjectCard key={card.id} card={card} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Evidence;
