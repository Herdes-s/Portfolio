import { useNavigate } from "react-router-dom";
import projetos from "../../data/projetos";

import styles from "./Projects.module.css";

function Projects() {
  const navigate = useNavigate();

  return (
    <section className={styles.section_projects} id="projetos">
      <div className={styles.sec_projects}>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.show_projects}>
          {projetos.slice(0, 4).map((projeto) => (
            <div key={projeto.id} className={styles.banner}>
              <img
                className={styles.image_banner}
                src={projeto.img}
                alt="imagem do hero site hexatombe"
              />
              <div className={styles.banner_info}>
                {/* <p className={styles.marca}>{projeto.modo}</p> */}
                <h3>{projeto.nome}</h3>
                <p className={styles.description}>{projeto.descricao}</p>
                <div className={styles.btns}>
                  <button className={styles.btn_repository}>
                    <a
                      href={projeto.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projeto.btn_1}
                    </a>
                  </button>
                  <button className={styles.btn_site}>
                    <a
                      href={projeto.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projeto.btn_2}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.more} onClick={() => navigate("/projects")}>
          Ver Todos os Projetos
        </button>
      </div>
    </section>
  );
}

export default Projects;
