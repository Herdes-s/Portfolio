import styles from "./Habilidades.module.css";

import {
  frontend,
  ferramentas,
  habilidadesessenciais,
} from "../../data/habilidades";

function Habilidades() {
  return (
    <section className={styles.section_habilidades} id="habilidades">
      <div className={styles.sub_section}>
        <h2>Habilidades</h2>
        <p>
          Criando interfaces de usuário (UI) e experiências de usuário (UX) ,
          além de código limpo.
        </p>
        <div className={styles.habilidades_grid}>
          <div className={styles.habilidades_item}>
            <h3>Front-End</h3>
            <ul>
              {frontend.map((habilidade, i) => (
                <li key={i}>{habilidade}</li>
              ))}
            </ul>
          </div>
          <div className={styles.habilidades_item}>
            <h3>Ferramentas</h3>
            <ul>
              {ferramentas.map((ferramenta, i) => (
                <li key={i}>{ferramenta}</li>
              ))}
            </ul>
          </div>
          <div className={styles.habilidades_item}>
            <h3>Habilidades Essenciais</h3>
            <ul>
              {habilidadesessenciais.map((habilidade, i) => (
                <li key={i}>{habilidade}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
