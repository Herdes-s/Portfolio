import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section_about} id="sobre">
      <div className={styles.sub_section}>
          <h2 className={styles.section_title}>Sobre Mim</h2>
          <p className={styles.section_description}>
            Eu sou desenvolvedor Front-End e UI/UX especializado em interfaces
            limpa, responsiva e intuitiva. Eu busco passar uma experiencia imersiva
            e atrativa para os usuarios com layouts bem estruturados e interativos
            para melhor experiencia.{" "}
          </p>
          <div className={styles.section_grid}>
            <div className={styles.about_block}>
              <h3>01</h3>
              <p>Sites Responsivos</p>
            </div>
            <div className={styles.about_block}>
              <h3>02</h3>
              <p>Criação de UI Limpas</p>
            </div>
            <div className={styles.about_block}>
              <h3>03</h3>
              <p>Sites Intuitivos</p>
            </div>
          </div>
          <div className={styles.section_flex}>
            <div>
              <h3>01+</h3>
              <p>Anos de Experiência</p>
            </div>
            <div className={styles.line}></div>
            <div>
              <h3>15+</h3>
              <p>Projetos Desenvolvidos</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
