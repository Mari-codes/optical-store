import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textWrapper}>
          <p>Preços baixos em</p>
          <h1>Óculos de grau e de sol</h1>
          <p>Você só encontra aqui</p>                            
        </div>
      </div>
    </section>
  );
}
