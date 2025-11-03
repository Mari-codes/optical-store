import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contato" className={styles.secaoContato}>
      <div className={styles.limitarSecao}>
        <h3>Fale conosco</h3>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
        </p>

        <div className={styles.contatoContainer}>
          <div className={styles.contatoConteudo}>
            <h4>Nossos contatos</h4>
            <div>
              <img src="assets/local.png" alt="Pino de localização" title="Ícone local" />
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div>
              <img src="assets/telefone.png" alt="Ícone de um telefone" title="Ícone telefone" />
              <span>(21) 9999-9999</span>
            </div>
            <div>
              <img src="assets/email.png" alt="Ícone de uma carta" title="Ícone email" />
              <span>contato@oticavida.com</span>
            </div>
          </div>

          <div className={styles.contatoConteudo}>
            <h4>Nossas Redes Sociais</h4>
            <div>
              <img src="assets/fb.png" alt="logo do facebook" title="Ícone facebook" />
              <span>/OticaVida</span>
            </div>
            <div>
              <img src="assets/ig.png" alt="logo do instagram" title="Ícone instagram" />
              <span>@oticavidarj</span>
            </div>
            <div>
              <img src="assets/tt.png" alt="logo do twitter" title="Ícone twitter" />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
