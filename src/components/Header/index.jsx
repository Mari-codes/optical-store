import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img
          className={styles.logo}
          src="assets/logo.png"
          alt="imagem de um óculos à direita e o nome da ótica à esquerda"
        />

        <nav className={styles.nav}>
          <a href="#produtos" className={styles.navLink}>PRODUTOS</a>
          <a href="#sobre" className={styles.navLink}>SOBRE</a>
          <a href="#contato" className={styles.navLink}>CONTATO</a>
        </nav>
      </div>
    </header>
  );
}

