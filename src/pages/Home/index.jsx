import About from "../../components/About";
import Habilidades from "../../components/Habilidades";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects/Index";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Habilidades />
      <Projects />
    </>
  );
}

export default Home;
