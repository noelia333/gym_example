import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntradaPagina from './EntradaPagina';
import Registro from './Registro';
import IniciarSesion from './IniciarSesion';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Entrada" element={<EntradaPagina />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<IniciarSesion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

