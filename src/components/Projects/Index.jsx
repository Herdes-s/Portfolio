import { useState } from "react";

import projetos from "../../data/projetos";

import styles from "./Projects.module.css";

function Projects() {
  const [active, setActive] = useState("designer");
  return (
    <section className={styles.section_projects}>
      <div className={styles.sec_projects}>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.modes}>
          <p
            className={`${styles.mode} ${active === "designer" ? styles.active : ""}`}
            onClick={() => setActive("designer")}
          >
            Designer
          </p>
          <p
            className={`${styles.mode} ${active === "developer" ? styles.active : ""}`}
            onClick={() => setActive("developer")}
          >
            Developer
          </p>
        </div>
        <div className={styles.show_projects}>
          {projetos.filter(project => project.modo === active).map((projeto) => (
            <div className={styles.banner}>
              <img
                className={styles.image_banner}
                src={projeto.img}
                alt="imagem do hero site hexatombe"
              />
              <div className={styles.banner_info}>
                <p className={styles.marca}>developer</p>
                <h3>{projeto.nome}</h3>
                <p className={styles.description}>{projeto.descricao}</p>
                <div className={styles.btns}>
                  <button className={styles.btn_repository}>
                    <a href={projeto.repositorio}>Ver Repositorio</a>
                  </button>
                  <button className={styles.btn_video}>
                    <a href={projeto.video}>Video</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
