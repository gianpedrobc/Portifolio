import Style from './home.module.css';

export default function Home() {
  return (
    <div className={Style.home}>
      <h1 className={Style.titulo}>Bem-vindo ao meu portfólio!</h1>
      <img href="./imagens/foto-programador.jpg" alt="" srcset="" />
      <p className={Style.complemento}>Este é o espaço onde compartilho meus projetos e experiências.</p>
      <button className={Style.button} type="button" >Sobre min</button>
    </div>
  );
}