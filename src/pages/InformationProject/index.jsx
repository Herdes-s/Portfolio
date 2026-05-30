import { useNavigate, useParams } from "react-router-dom";
import projetos from "../../data/projetos";
import styles from "./InformationProject.module.css";
import { useState } from "react";
import dark_light from "../../assets/images/dark_light.png";

function InformationProject() {
  const { id } = useParams();
  const [lightMode, setLightMode] = useState(false);
  const navigate = useNavigate();

  const toggleLightMode = () => {
    setLightMode(!lightMode);

    if (!lightMode) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  const project = projetos.find((projeto) => projeto.id === Number(id));

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return <>
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
      <h1>{project.nome}</h1>
      <p>{project.descricao}</p>
    </section>
    </>
}

export default InformationProject;
