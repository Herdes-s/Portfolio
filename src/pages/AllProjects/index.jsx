import styles from "./AllProjects.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import projetos from "../../data/projetos";
import { IoIosArrowBack } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import TemaProvider from "../../hooks/TemaProvider";

function AllProjects() {
  const { tema, toggleLightMode } = TemaProvider.useTema();
  const navigate = useNavigate();



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
          <h1 className={styles.title}>Todos os Projetos</h1>
          <div className={styles.show_projects}>
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                className={styles.banner}
                onClick={() => navigate(`/project/${projeto.id}`)}
              >
                <div className={styles.banner_info}>
                  <img className={styles.image_banner} src={projeto.img} />
                  <h2>{projeto.nome}</h2>
                  <p className={styles.description}>{projeto.descricao}</p>
                </div>
                <div className={styles.overlay}>
                  <h3>Abrir Projeto</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProjects;
