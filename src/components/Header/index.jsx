import styles from "./Header.module.css";

import sun from "../../assets/images/sun.svg";
import menu from "../../assets/images/menu.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.modeLight}>
        <img src={sun} alt="botão de mudar modo dark" />
      </div>
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <a href="/">Home</a>
        <a href="/">Sobre</a>
        <a href="/">Habilidades</a>
        <a href="/">Projetos</a>
        <a href="/">Serviços</a>
      </nav>
      <div className={`${styles.menu} `} onClick={() => setOpen(!open)}>
        <img src={menu} alt="botão de abrir menu" />
      </div>
    </header>
  );
}

export default Header;
