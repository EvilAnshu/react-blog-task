import React from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/header.css';

const Header = () => {
  return (
    <>
    <nav className="header navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">React BLOG</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/show-blog">Show data</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Header