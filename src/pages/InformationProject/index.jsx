import { useNavigate, useParams } from "react-router-dom";
import projetos from "../../data/projetos";
import styles from "./InformationProject.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import TemaProvider from "../../hooks/TemaProvider";
import Footer from "../../components/Footer";

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
          <div className={styles.technologies}>
            {project.tecnologias.map((tecnologia, index) => (
              <span key={index} className={styles.technology}>
                {tecnologia}
              </span>
            ))}
          </div>
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
          <div className={styles.case_use}>
            {project.caseUse? <h2 className={styles.case_use_title}>Case Use</h2> : null}
            {project.caseUse && Object.entries(project.caseUse).map(([key, value]) => (
              <div key={key} className={styles.case_use_section}>
                <h3 className={styles.case_use_subtitle}>{key.replace(/_/g, " ")}</h3>
                <ul className={styles.case_use_list}>
                  {value.map((item, index) => (<li key={index} className={styles.case_use_item}>{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default InformationProject;
