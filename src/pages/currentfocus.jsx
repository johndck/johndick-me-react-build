import TopSection from "../components/topsection";
import Footer from "../components/footer";
import KeyPerf from "../components/kpi";

const evidenceTitle = "Current Focus";
const evidenceDescription = "Here are my Q1 2024 KPIs:";

function Focus() {
  return (
    <>
      <TopSection title={evidenceTitle} description={evidenceDescription} />
      <KeyPerf />
      <Footer />
    </>
  );
}

export default Focus;
