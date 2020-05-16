import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../Header/index';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from '../Footer';

import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';

// import Equipe from '../Equipe';
// import Programme from '../Programme';
//ANNONCES
import Annonces from '../Annonces/Annonces';
import Annonce from '../Annonces/Annonce';
// MISSIOON
import Presentation from '../Mission/Presentation';
import Objectifs from '../Mission/Objectifs';
import Fondation from '../Mission/Fondation';
import Partenaires from '../Mission/Partenaires';
//EQUIPE
import Direction from '../Equipe/Direction';
import Profs from '../Equipe/Profs';
import Internationale from '../Equipe/Internationale';
//PROGRAMME
import Cheminement from '../Programme/Cheminement';
import Admissibilite from '../Programme/Admissibilite';
import Perspectives from '../Programme/Perspectives';
import Couts from '../Programme/Couts';
import Mobilite from '../Programme/Mobilite';
//RECHERCHE
import LaRecherche from '../Recherche/LaRecherche';
import Urbalab from '../Recherche/Urbalab';
import Theses from '../Recherche/Theses';
//RESSOURCES 
import Lexique from '../Ressources/Lexique';
import LiensUtiles from '../Ressources/LiensUtiles';
//ACTIVITES
import Konbit from '../Activites/Konbit';
import Conferences from '../Activites/Conferences';
//ESPACE ETUDIANT
import InfoPratiques from '../EspaceEtudiant/InfoPratiques';
import PrixEtBourses from '../EspaceEtudiant/PrixEtBourses';
import Stage from '../EspaceEtudiant/Stage';

import Contact from '../Contact';
import Articles from '../Articles';
// // import Recherche from '../recherche';
// // import Ressources from '../Ressources';
// import Activites from '../Activites';
// import EspaceEtudiant from '../EspaceEtudiant';
//ONLY FOR ADMIN
import Admin from '../Admin';
import Blogs from '../Blogs';
import HomeDesign from '../Home//HomeDesign';
import LoginForm from '../Login/LoginForm';
import {PrivateRoute} from '../PrivateRoute';


// import Blog from './components/New/Blog';
import Accueil from '../Accueil';


export default class Blog extends Component {
  
render(){
    
  return (
    <React.Fragment>    
           <Router >
      <CssBaseline />
      <Container maxWidth="lg">
   
        <Header  />
        <main> 
                    <div className="container">
                     <Switch>
                         <Route path="/" exact component={ Accueil } />
                         {/* ANNONCES */}
                         <Route path="/annonces" exact component={Annonces} />
                         <Route path="/annonce" exact component={Annonce} />
                         {/* MISSION */}
                         <Route path="/mission/presentation" exact component={Presentation} />
                         <Route path="/mission/objectifs" exact component={Objectifs} />
                         <Route path="/mission/fondation" exact component={Fondation} />
                         <Route path="/mission/partenaires" exact component={Partenaires} />
                          {/* EQUIPE */}
                          <Route path="/equipe/direction" exact component={Direction} />
                          <Route path="/equipe/profs" exact component={Profs} />
                          <Route path="/equipe/internationale" exact component={Internationale}/>
                          {/* PROGRAMME */}
                          <Route path="/programme/cheminement" exact component={Cheminement}/>
                          <Route path="/programme/admissibilite" exact component={Admissibilite}/>
                          <Route path="/programme/perspectives" exact component={Perspectives}/>
                          <Route path="/programme/couts" exact component={Couts} />
                          <Route path="/programme/mobilite" exact component={Mobilite} />
                          {/* RECHERCHE */}
                          <Route path="/recherche/laRecherche" exact component={LaRecherche} />
                          <Route path="/recherche/urbalab" exact component={Urbalab} />
                          <Route path="/recherche/theses" exact component={Theses} />
                          {/* RESSOURCES */}
                          <Route path="/ressources/lexique" exact component={Lexique} />
                          <Route path="/ressources/liensUtiles" exact component={LiensUtiles} />
                          {/* ACTIVITES */}
                          <Route path="/activites/konbit" exact component={Konbit} />
                          <Route path="/activites/conferences" exact component={Conferences}/>
                           {/* ESPACE ETUDIANT */}
                           <Route path="/espaceEtudiant/info" exact component={InfoPratiques} />
                          <Route path="/espaceEtudiant/prix" exact component={PrixEtBourses}/>
                          <Route path="/espaceEtudiant/stage" exact component={Stage}/>


                         {/* <Route path="/equipe" exact component={Equipe}/> */}
                         {/* <Route path="/programme" exact component={Programme}/> */}
                         {/* <Route path="/recherche" exact component={ Recherche } /> */}
                         {/* <Route path="/ressources" exact component={Ressources} /> */}
                        
                         {/* <Route path="/espaceEtudiant" exact component={EspaceEtudiant} /> */}
                         {/* POUM METE PRIVATE ROUTE APRES */}
                         <Route path="/admin" exact component={Admin} />

                        <Route path="/login" exact component={ LoginForm } />
                        <PrivateRoute path="/blog" exact component={ Blogs } />
                       
                        <Route path="/contact" exact component={ Contact } />
                        <Route path="/articles" exact component={ Articles } />

                        
                    </Switch>
                    </div>
                    {/* <Blog /> */}
                
        </main>
        
      </Container>
      <Footer  />
      </Router>
    </React.Fragment>
  );
}
}