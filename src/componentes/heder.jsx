import Style from './heder.module.css';

export default function Header() {
    return (
        <header className={Style.heder}>
            <div className={Style.logo}>
                <i className="fa-brands fa-pied-piper-alt"></i>
             </div>
                
            <div className={Style.menu}>
                <a href='#homer'><p>Home</p></a>
                <a href='#sobre'>Sobre</a>
                <a href='#projetos'>Projetos</a>
                 <a href='#skils'>Skils</a>
                <a href='#contatos'>Contatos</a>
            </div>

            <div className={Style.button}>
                <button>Contatos</button>
            </div>
        </header>
    );
}
