import About from "../../components/About";
import Habilidades from "../../components/Habilidades";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Habilidades />
    </>
  );
}

export default Home;
