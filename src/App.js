import './App.css';
import Heder from './componentes/heder';
import Home from './componentes/home';
import Sobre from './componentes/sobre';
import Contatos from './componentes/contatos';
import Projetos from './componentes/projetos';
import Footer from './componentes/footer';
import Skils from './componentes/skils';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Heder />
      <Home />      
      <Sobre />
      <Skils />
      <Projetos />
      <Contatos />
      <Footer />


    </div>
  );
}

export default App;
