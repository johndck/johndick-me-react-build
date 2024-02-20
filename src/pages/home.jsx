import "../index.css";
import Hero from "../components/hero";
import Showcase from "../components/iconshowcase";
import Aboutme from "../components/aboutme";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Aboutme />
      <Footer />
    </>
  );
}

export default Home;
