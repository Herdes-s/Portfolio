import styles from "./Header.module.css";

import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import TemaProvider from "../../hooks/TemaProvider";

function Header() {
  const [open, setOpen] = useState(false);
  const { tema, toggleLightMode } = TemaProvider.useTema();

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
      <div className={styles.modeLight} onClick={toggleLightMode}>
        {tema ? (
          <FaMoon className={styles.mode} />
        ) : (
          <FaSun className={styles.mode} />
        )}
      </div>
    </header>
  );
}

export default Header;
