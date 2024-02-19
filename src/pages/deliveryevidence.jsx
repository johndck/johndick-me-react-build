import TopSection from "../components/topsection";
import ProjectCard from "../components/project";
import data from "../deliveryList.json";

const evidenceTitle = "Previous Delivery Evidence";
const evidenceDescription =
  "Examples of things I have made happen in my career so far...";

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
    </>
  );
}

export default Evidence;
