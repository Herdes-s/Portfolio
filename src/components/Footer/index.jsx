import styles from "./Footer.module.css";

import linkedin from "../../assets/images/linkedIn_circle.svg"
import instagram from "../../assets/images/instagram.svg"
import github from "../../assets/images/github_circle.svg"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_box}>
        <h2>Mizum.Dev</h2>
        <div className={styles.line}></div>
        <div className={styles.footer_content}>
          <nav className={styles.footer_nav}>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#serviços">Serviços</a>
          </nav>
            <div className={styles.footer_logo}>
                <img src={linkedin} alt="link linkedin" />
                <img src={instagram} alt="link instagram" />
                <img src={github} alt="link github" />
            </div>
        </div>
        <p>© 2026 Ernand Soares. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
