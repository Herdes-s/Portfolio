import styles from "./Header.module.css";


import sun from "../../assets/images/sun.svg";
import menu from "../../assets/images/menu.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#serviços">Serviços</a>
      </nav>
      <div className={`${styles.menu} `} onClick={() => setOpen(!open)}>
        <img src={menu} alt="botão de abrir menu" />
      </div>
      <div className={styles.modeLight}>
        <img src={sun} alt="botão de mudar modo dark" />
      </div>
    </header>
  );
}

export default Header;
