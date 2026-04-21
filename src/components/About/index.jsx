import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section_about} id="sobre">
      <div className={styles.sub_section}>
        <h2 className={styles.section_title}>Sobre Mim</h2>
        <p className={styles.section_description}>
          Sou desenvolvedor Front-End e UI/UX, focado na criação de interfaces
          modernas, responsivas e intuitivas. Meu objetivo é transformar ideias
          em experiências digitais envolventes, com layouts bem estruturados,
          visual limpo e navegação fluida.
        </p>
        <div className={styles.section_grid}>
          <div className={styles.about_block}>
            <h3>01</h3>
            <p>Responsividade</p>
          </div>
          <div className={styles.about_block}>
            <h3>02</h3>
            <p>UI Limpas</p>
          </div>
          <div className={styles.about_block}>
            <h3>03</h3>
            <p>Experiência do Usuário</p>
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
