import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuarios from'./AgregarUsuarios';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter, Routes, Route}from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">Crud</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="infoCompleta">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="agregarNota">Agregar usuario</a>
        </li>
       </ul>
      </div>
  </div>
</nav>
      <BrowserRouter>
     <Routes>
     <Route path='/infoCompleta' element={<ListaUsuarios/>}></Route>
      <Route path='/agregarNota' element={<AgregarUsuarios/>}></Route>
      <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>}></Route>
     
     </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
