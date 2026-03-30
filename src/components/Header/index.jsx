import styles from './Header.module.css'

import sun from '../../assets/images/sun.svg'
import menu from '../../assets/images/menu.svg'

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.modeLight}>
                <img src={sun} alt="botão de mudar modo dark" />
            </div>
            <div className={styles.menu}>
                <img src={menu} alt="botão de abrir menu" />
            </div>
        </header>
    ) 
}

export default Header