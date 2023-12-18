import './App.css';
import { Link, Outlet} from 'react-router-dom'

function App() {
    return (
    <div className="App">
        <h1>Imobiliaria</h1>
        <hr />
        <nav className='nav-bar'>
            <Link to='/imovel/cadastrar'>Cadastro</Link> &nbsp;
            <Link to='/imovel/consultar'>Consulta</Link>
        </nav>
        <main>
          <Outlet />  {/* O Outlet renderiza o conteúdo dinâmico baseado nas rotas aninhadas */}
        </main>
    </div>
  );
}

export default App;