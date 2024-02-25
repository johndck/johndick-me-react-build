import "../index.css";
import Hero from "../components/hero";
import Showcase from "../components/iconshowcase";
import Aboutme from "../components/aboutme";
import Accordian from "../components/accordian";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Aboutme />
      <Accordian />
      <Footer />
    </>
  );
}

export default Home;
