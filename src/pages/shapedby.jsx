import TopSection from "../components/topsection";
import Footer from "../components/footer";

const evidenceTitle = "Important influences";
const evidenceDescription =
  "This is holding content for me to design the page. Just run out of time for the assignment deadline. This page is not in scope for the assignment.";

function Shaped() {
  return (
    <div>
      <TopSection title={evidenceTitle} description={evidenceDescription} />
      <Footer />
    </div>
  );
}

export default Shaped;
