import { useNavigate, useParams } from "react-router-dom";
import projetos from "../../data/projetos";
import styles from "./InformationProject.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import TemaProvider from "../../hooks/TemaProvider";

function InformationProject() {
  const { id } = useParams();
  const { tema, toggleLightMode } = TemaProvider.useTema();
  const navigate = useNavigate();

  const project = projetos.find((projeto) => projeto.id === Number(id));

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <>
      <header className={styles.header}>
        <p className={styles.back} onClick={() => navigate(-1)}>
          <IoIosArrowBack /> Voltar
        </p>
        <div className={styles.modeLight} onClick={toggleLightMode}>
          {tema ? (
            <FaMoon className={styles.mode} />
          ) : (
            <FaSun className={styles.mode} />
          )}
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.sub_project}>
          <h1 className={styles.title}>{project.nome}</h1>
          <img src={project.img} alt={project.nome} className={styles.image} />
          <p className={styles.description}>{project.descricao}</p>
          <div className={styles.buttons}>
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <button className={styles.btn_site}>{project.btn_2}</button>
            </a>
            <a
              href={project.repositorio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.btn_repositorio}>
                {project.btn_1}
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default InformationProject;
