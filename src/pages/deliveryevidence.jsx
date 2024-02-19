import TopSection from "../components/topsection";
import ProjectCard from "../components/project";
import data from "../deliveryList.json";

const evidenceTitle = "Previous Delivery Evidence";
const evidenceDescription =
  "Here is a list of previous deliveries that I have made happen over the last 20 years.";

function Evidence() {
  console.log(data);

  return (
    <>
      <TopSection title={evidenceTitle} description={evidenceDescription} />

      <div className="container">
        {data.map((card) => {
          return <ProjectCard key={card.id} card={card} />;
        })}
      </div>
    </>
  );
}

export default Evidence;
