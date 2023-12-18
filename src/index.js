import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Imoveis from './componentes/imoveis';
import Consulta from './componentes/consulta';
import Edicao from './componentes/editar';

// Cria um objeto BrowserRouter com as rotas da aplicação
const rotas = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      { path: '/imovel/cadastrar', element: <Imoveis />},
      { path: '/imovel/consultar', element: <Consulta />},
      { path: '/imovel/editar/:idImovel', element: <Edicao />}
    ]
  }
])
// Cria um root ReactDOM para renderizar a aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <RouterProvider router={rotas} />
</React.StrictMode>
);
