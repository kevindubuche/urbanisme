import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Link, Route} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'; 

export default class  Navbar extends Component {
    render (){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
    <img src={logo}  width="30" height="30" alt="logo"></img> <a className="navbar-brand" href="#">
  </a>
        <Link to="/" className="navbar-brand">URBANISME</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
          <ul className="navbar-nav mr-auto">
             <li className="nav-item">
                  <Link to="/" className="nav-link">Accueil</Link>
              </li>
              <li className="nav-item">
                  <Link to="/articles" className="nav-link">Articles</Link>
              </li>
              <li className="nav-item">
                  <Link to="/apropos" className="nav-link">A Propos</Link>
              </li>
              <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Log in
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/" className="nav-link" href="/">Log in</Link>    
                <Link to="/blog" className="nav-link ">Gestion des articles</Link>
                <div className="dropdown-divider"></div>
                <Link to="/" className="nav-link" href="/">Log out</Link> 
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
         
      
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        );
    
}
}

