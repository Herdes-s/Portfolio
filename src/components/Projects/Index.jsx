import { useState } from "react";

import banner from "../../assets/images/banner.jpg";

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
        <div className={styles.banner}>
            <img className={styles.image_banner} src={banner} alt="imagem do hero site hexatombe" />
            <div className={styles.banner_info}>
                <p className={styles.marca}>developer</p>
                <h3>Hexatombe</h3>
                <p className={styles.description}>Site baseado em uma serie de RPG OrdemParanormal</p>
                <div className={styles.btns}>
                    <button>Ver Video</button>
                    <button>Ver Repositorio</button>
                </div>
            </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
