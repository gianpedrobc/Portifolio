import Style from './skils.module.css';

export default function Skils() {
  return (
    <div className={Style.container} id="skils">
      <h1 className={Style.titulo}>
        Minhas <span>Habilidades</span>
      </h1>

      <div className={Style.quadro}>
        <div className={Style.cont}>
          <i className="fab fa-python"></i>
          <p>Python</p>
        </div>
        <div className={Style.cont}>
          <i className="fab fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div className={Style.cont}>
          <i className="fab fa-react"></i>
          <p>React</p>
        </div>
        <div className={Style.cont}>
          <i className="fab fa-git-alt"></i>
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}
