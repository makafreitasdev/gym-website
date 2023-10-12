import styles from "./Navigator.module.css"

export default function() {
    return (
        <div className={styles.navigator}>
            <nav href="#" className={styles.nav}>INÍCIO</nav>
            <nav href="#" className={styles.nav}>SOBRE</nav>
            <nav href="#" className={styles.nav}>PERSONAL</nav>
            <nav href="#" className={styles.nav}>CONTATO</nav>
            <button className={styles.navButton}>MATRICULE-SE</button>
        </div>
    )
}