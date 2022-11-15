import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown, FiChevronsDown } from "react-icons/fi";
import logo from './img/logoMellows.png';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" id='nav'>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src={logo}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/QuemSomos" className="nav-link">Quem somos</Link>
        </li>
        <li className="nav-item">
          <Link to="/LivrosInt" className="nav-link">Livros interativos</Link>
        </li>
        <li className="nav-item">
          <Link to="/TrocaLivros" className="nav-link">Troque seus livros</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/Cadastro" className="dropdown-item">Cadastre-se</Link></li>
            <li><Link to="/AdminArea" className="dropdown-item">Administrador</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
 </nav>
    );
}

export default Navbar