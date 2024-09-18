import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import ListarProductos from './pages/Productos';
import ListarTiendas from './pages/Tiendas';
import ListarUsuarios from './pages/Usuarios';

const history = createBrowserHistory();


function App() {
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/productos" element={<ListarProductos/>}/>
          <Route path="/tiendas" element={<ListarTiendas/>}/>
          <Route path="/usuarios" element={<ListarUsuarios/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
