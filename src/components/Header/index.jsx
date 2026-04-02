import styles from "./Header.module.css";

import sun from "../../assets/images/sun.svg";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#sobre" onClick={() => setOpen(false)}>
          Sobre
        </a>
        <a href="#habilidades" onClick={() => setOpen(false)}>
          Habilidades
        </a>
        <a href="#projetos" onClick={() => setOpen(false)}>
          Projetos
        </a>
        <a href="#serviços" onClick={() => setOpen(false)}>
          Serviços
        </a>
      </nav>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}
      <div className={`${styles.menu} `} onClick={() => setOpen(!open)}>
        <img src={open ? close : menu} alt="botão de abrir menu" />
      </div>
      <div className={styles.modeLight}>
        <img src={sun} alt="botão de mudar modo dark" />
      </div>
    </header>
  );
}

export default Header;
