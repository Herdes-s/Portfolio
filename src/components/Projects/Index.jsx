import projetos from "../../data/projetos";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.section_projects} id="projetos">
      <div className={styles.sec_projects}>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.show_projects}>
          {projetos.map((projeto) => (
            <div className={styles.banner}>
              <img
                className={styles.image_banner}
                src={projeto.img}
                alt="imagem do hero site hexatombe"
              />
              <div className={styles.banner_info}>
                <p className={styles.marca}>{projeto.modo}</p>
                <h3>{projeto.nome}</h3>
                <p className={styles.description}>{projeto.descricao}</p>
                <div className={styles.btns}>
                  <button className={styles.btn_repository}>
                    <a href={projeto.repositorio}>{projeto.btn_1}</a>
                  </button>
                  <button className={styles.btn_video}>
                    <a href={projeto.video}>{projeto.btn_2}</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.more}>Ver mais</p>
      </div>
    </section>
  );
}

export default Projects;
