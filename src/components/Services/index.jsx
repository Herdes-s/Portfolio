import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.services} id="serviços">
      <div className={styles.sec_services}>
        <h2 className={styles.services_title}>Serviços</h2>
        <p className={styles.services_description}>
          Designer e desenvolvimento
        </p>
        <div className={styles.services_grid}>
            <div className={styles.services_container}>
              <h3>UI / UX Designer</h3>
              <p>
                Interfaces limpas, layout organizado, hierarquia visual, cores
                contrastantes, tipografias e espaçamentos
              </p>
              <div className={styles.line}></div>
              <button className={styles.services_btn}><a href="">Ver mais (Em desenvolvimento)</a></button>
            </div>
            <div className={styles.services_container}>
              <h3>Desenvolvedor Front_End</h3>
              <p>
                Codigo limpo, organizado, semantico e estruturado, grids, flex e
                positions assim como media query
              </p>
              <div className={styles.line}></div>
              <button className={styles.services_btn}><a href="">Ver mais (Em desenvolvimento)</a></button>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
