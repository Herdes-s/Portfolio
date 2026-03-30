import Header from '../Header';

import styles from './Hero.module.css'

function Hero() {
    return(
        <section className={styles.sectionHero}>
            <Header />
            <div className={styles.subHero}>

            </div>
        </section>
    ) 
}

export default Hero;