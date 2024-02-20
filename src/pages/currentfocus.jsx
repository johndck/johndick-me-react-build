import TopSection from "../components/topsection";
import Footer from "../components/footer";

const evidenceTitle = "Current Focus";
const evidenceDescription =
  "This is holding content for me to design the page. Just run out of time for the assignment deadline. This page is not in scope for the assignment.";

function Focus() {
  return (
    <>
      <TopSection title={evidenceTitle} description={evidenceDescription} />
      <Footer />
    </>
  );
}

export default Focus;
