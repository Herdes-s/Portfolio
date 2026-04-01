import Header from "../Header";

import styles from "./Hero.module.css";

import my_photo from "../../assets/images/my_photo.png";
import gitHub from "../../assets/images/gitHub.svg";
import linkedIn from "../../assets/images/linkedIn.svg";

function Hero() {
  return (
    <section className={styles.section_hero}>
      <div className={styles.sub_hero}>
        <div className={styles.hero_image}>
          <img src={my_photo} alt="Foto do criador do site e dono" />
        </div>
        <div className={styles.hero_info}>
          <h1>
            <span className={styles.line1}>Font-End</span>
            <span className={styles.line2}>Desenvolvedor & Designer</span>
          </h1>
          <p className={styles.description}>
            Desenvolvedor front-end focado em desenvolvimento web e web
            designer, fazendo sites semanticos e responsivos .
          </p>
          <button className={styles.cta_button}>Download CV</button>
          <div className={styles.logos_rede}>
            <a href="">
              <img src={gitHub} alt="link do meu gitHub" />
            </a>
            <a href="">
              <img src={linkedIn} alt="link do meu linkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
