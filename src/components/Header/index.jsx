import styles from "./Header.module.css";

import dark_light from "../../assets/images/dark_light.png";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);

    if (!lightMode) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }

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
        <img src={dark_light} alt="botão de mudar modo dark" onClick={toggleLightMode} />
      </div>
    </header>
  );
}

export default Header;
