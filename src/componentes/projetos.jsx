import Style from './projetos.module.css';
import imagen1 from '../imagens/4707122.jpg';
import imagen2 from '../imagens/19362653.jpg';
import imagen3 from '../imagens/developer_male.jpg';
import imagen4 from '../imagens/pexels-kevin-ku-92347-577585.jpg';

export default function projetos() {
  return (
    <div className={Style.projetos} id="projetos">
      <h1 className={Style.titulo}>Projetos</h1>
      <p className={Style.paragrafo}>Aqui estão alguns dos meus projetos mais recentes:</p>
      <div className={Style.container}>
          <div className={Style.conter} >
            <img src={imagen1} alt="imagem do projeto 1" />
            <h2>Projeto 1</h2>
            <p>Descrição do projeto 1.</p>
          </div>

          <div className={Style.conter}>
            <img src={imagen2} alt="imagem do projeto 2" />
            <h2>Projeto 2</h2>
            <p>Descrição do projeto 2.</p>
          </div>

          <div className={Style.conter}>
            <img src={imagen3} alt=" imagem do projeto 3" />
            <h2>Projeto 3</h2>
            <p>Descrição do projeto 3.</p>
          </div>


          <div className={Style.conter}>
            <img src={imagen4} alt="imagem do projeto 4" />
            <h2>Projeto 4</h2>
            <p>Descrição do projeto 4.</p>   
          </div>
      </div>
    </div>
  );
}
