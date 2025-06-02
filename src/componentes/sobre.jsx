import Style from './sobre.module.css';
import imagem from '../imagens/foto-programador.jpg'; 

export default function Sobre() {
  return (
    <div className={Style.sobre}  id="sobre">
      <div className={Style.divisor}>
      <h1 className={Style.titulo}>Sobre Mim</h1>
      <p className={Style.paragrafo}>Olá! Sou <span>Gian Pedro</span>, desenvolvedor apaixonado por tecnologia 
        e inovação. Tenho experiência em diversas ferramentas e estou sempre aprendendo para criar
        soluções que gerem impacto real. Atualmente, curso Licenciatura em Ciências da Computação
         e estou aberto a novos desafios que contribuam para meu crescimento profissional</p>
        </div>
        <div className={Style.imagem}>
          <img src={imagem} alt="Foto do programador" />
        </div>

    </div>
  );
}