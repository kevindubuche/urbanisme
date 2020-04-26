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

import Mission from '../Mission';
import Equipe from '../Equipe';
import Programme from '../Programme';

import Contact from '../Contact';
import Articles from '../Articles';
import Recherche from '../recherche';
import Ressources from '../Ressources';
import Activites from '../Activites';
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
            {/* LE BODY QUI VARIE */}
          {/* <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
       
                    {/* <Navbar /> */}
                    {/* <Header/> */}
                   
                    <div className="container">
                     <Switch>
                         <Route path="/" exact component={ Accueil } />
                         <Route path="/mission" exact component={ Mission } />
                         <Route path="/equipe" exact component={Equipe}/>
                         <Route path="/programme" exact component={Programme}/>
                         <Route path="/recherche" exact component={ Recherche } />
                         <Route path="/ressources" exact component={Ressources} />
                         <Route path="/activites" exact component={Activites} />

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