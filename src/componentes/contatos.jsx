import Style from './contatos.module.css';

export default function Contatos() {
  return (
    <div className={Style.contatos} id="contatos">
      <h1 className={Style.titulo}>Contatos</h1>
      <p className={Style.paragrafo}>Você pode entrar em contato comigo através dos seguintes meios:</p>
      <ul className={Style.lista}>
        <li>
          <a href="devgianpedro@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </li>
        <li>
          <a href="tel:+55000000000">
            <i className="fas fa-phone"></i> Telefone
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/gian-pedro-0432b9358" target="_blank" rel="noopener noreferrer"> 
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/gianpedrobc" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gian_pedrobc?igsh=MWRoM2lpNzlxcWh1dA==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>

    </div>
  )
}