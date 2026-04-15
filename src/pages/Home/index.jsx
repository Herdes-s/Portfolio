import About from "../../components/About";
import Footer from "../../components/Footer";
import Habilidades from "../../components/Habilidades";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects/Index";
import Services from "../../components/Services";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Habilidades />
      <Projects />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
