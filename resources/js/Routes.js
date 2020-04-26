import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Mission from './components/Mission';
import Contact from './components/Contact';
import Articles from './components/Articles';
import Recherche from './components/recherche';
import Blogs from './components/Blogs';
import HomeDesign from './components/Home//HomeDesign';
import LoginForm from './components/Login/LoginForm';
import {PrivateRoute} from './components/PrivateRoute';
import Header from './components/Header';

import Blog from './components/New/Blog';

export default class  Routes extends Component {
    render (){
        return(
                <Router >
                    {/* <Navbar /> */}
                    {/* <Header/>
                    <Switch>
                        <Route path="/" exact component={ HomeDesign } />
                    </Switch>
                    <div className="container">
                     <Switch>
                        <Route path="/login" exact component={ LoginForm } />
                        <PrivateRoute path="/blog" exact component={ Blogs } />
                        <Route path="/mission" exact component={ Mission } />
                        <Route path="/contact" exact component={ Contact } />
                        <Route path="/articles" exact component={ Articles } />

                        <Route path="/recherche" exact component={ Recherche } />
                    </Switch>
                    </div>
                    <Footer />   */}
                    <Blog />
                </Router>
        );
    };
}