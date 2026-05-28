import styles from "./AllProjects.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import dark_light from "../../assets/images/dark_light.png";
import { useState } from "react";
import projetos from "../../data/projetos";

function AllProjects() {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);

    if (!lightMode) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <header className={styles.header}>
        <p className={styles.back} onClick={() => navigate(-1)}>
          Voltar
        </p>
        <div className={styles.modeLight}>
          <img
            src={dark_light}
            alt="botão de mudar modo dark"
            onClick={toggleLightMode}
          />
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.sub_project}>
          <h1 className={styles.title}>Todos os Projetos</h1>
          <div className={styles.show_projects}>
            {projetos.map((projeto) => (
                <div className={styles.banner}>
                    <img className={styles.image_banner} src={projeto.img} />
                  <h2>{projeto.nome}</h2>
                  <p className={styles.description}>{projeto.descricao}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProjects;
