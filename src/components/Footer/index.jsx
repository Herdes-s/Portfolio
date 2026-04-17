import styles from "./Footer.module.css";

import instagram from "../../assets/images/instagram.svg";
import github from "../../assets/images/github_circle.svg";
import linkedin from "../../assets/images/linkedin_circle.svg";

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
            <a
              href="https://linkedin.com/in/ernand-soares"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="link linkedin" />
            </a>
            <a
              href="https://instagram.com/mizum.dev?igsh=YXcwZ2YzbmwxbjBq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="link instagram" />
            </a>
            <a
              href="https://github.com/Herdes-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="link github" />
            </a>
          </div>
        </div>
        <p>© 2026 Ernand Soares. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
