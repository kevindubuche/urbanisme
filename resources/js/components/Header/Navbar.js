import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Link, Route} from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'; 

import RegisterModal from '../Login/RegisterModal';
import HomeIcon from '@material-ui/icons/Home';
export default class  Navbar extends Component {
    render (){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
               
    {/* <img src={logo}  width="30" height="30" alt="logo"></img> <a className="navbar-brand" href="#">
  </a> */}
        {/* <Link to="/" className="navbar-brand">URBATER</Link> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/"><HomeIcon /></Link>
          <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mission
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/mission#presentation" className="nav-link dropdown-item">Présentation d’Urbater</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/mission#objectifs" className="nav-link dropdown-item">Objectifs / Démarche</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/mission#fondation" className="nav-link dropdown-item" href="/">Fondation</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/mission#partenaires" className="nav-link dropdown-item" href="/">Partenaires</Link> 
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Equipe
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/equipe#direction" className="nav-link dropdown-item ">Direction</Link>
                <div className="dropdown-divider"></div>
                  <Link to="/equipe#profs" className="nav-link dropdown-item ">Professeurs</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="equipe#internationale" className="nav-link dropdown-item" href="/">Equipe internationale</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Programme
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/programme#cheminement" className="nav-link dropdown-item">Cheminement et structure</Link>
                <div className="dropdown-divider"></div>
                  <Link to="/programme#admissibilite" className="nav-link dropdown-item ">Conditions d’admissibilite</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/login" className="nav-link dropdown-item" href="/">Ressources</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/programme#perspectives" className="nav-link dropdown-item" href="/">Perspectives d’avenir</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/programme#couts" className="nav-link dropdown-item" href="/">Couts et aide financiere</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/programme#mobilite" className="nav-link dropdown-item" href="/">Mobilite internationale</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Recherche
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/recherche#laRecherche" className="nav-link dropdown-item ">La Recherche a UrBater</Link>
                <div className="dropdown-divider"></div>
                  <Link to="/recherche#urbalab" className="nav-link dropdown-item ">UrbaLab</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/recherche#theses" className="nav-link dropdown-item" href="/">Theses et Memoire</Link>
                   </div>
              </li>
              <li className="nav-item">
                  <Link to="/articles" className="nav-link dropdown-item">Publications</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ressources
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/ressources#lexique" className="nav-link dropdown-item ">Lexique</Link>
                <div className="dropdown-divider"></div>
                  <Link to="/ressources#liensUtiles" className="nav-link dropdown-item ">Liens utiles</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Activites
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/activites#konbit" className="nav-link dropdown-item ">Konbit</Link>
                <div className="dropdown-divider"></div>
                  <Link to="/activites#conferences" className="nav-link dropdown-item" href="/">Conferences</Link>
                 </div>
              </li>
                 <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Espace Etudiant
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/login" className="nav-link dropdown-item ">Informations Pratiques</Link>
                <div className="dropdown-divider"></div>
                  <Link to="/blog" className="nav-link dropdown-item ">Stage</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/" className="nav-link dropdown-item" href="/">Collation des grades </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/" className="nav-link dropdown-item" href="/">Acces Moodle, Teams et Zoom </Link>
                 </div>
              </li>
              
              <li className="nav-item">
                  <Link to="/contact" className="nav-link ">Contact</Link>
              </li>
              
              {/* <li className="nav-item">
                  <Link to="/articles" className="nav-link dropdown-item">Articles</Link>
              </li> */}
              <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Se Connecter
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               {/* <LoginModal/>  */}
               <RegisterModal />
               {/* <Link to="/" className="nav-link dropdown-item" href="/">Log in</Link>     */}
               <Link to="/login" className="nav-link dropdown-item ">Se Connecter</Link>
                <Link to="/blog" className="nav-link dropdown-item ">Gestion des articles</Link>
                <div className="dropdown-divider"></div>
                <Link to="/" className="nav-link dropdown-item" href="/">Log out</Link> 
              </div>
            </li>
          </ul>
         
      
          {/* <form className="form-inline my-2 my-lg-0">
          <marquee behavior="scroll" direction="left">
                         <Link to="/">Les inscriptions sont ouvertes.. </Link> 
                         <Link to="/blog">|  Mesures concernant le COVID-19..</Link> 
                         <Link to="/">| Vaccin contre le Covid 19.. </Link> 
                         <Link to="/blog">|  FDS inscription 2021</Link> 
                       </marquee>

            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
        );
    
}
}

