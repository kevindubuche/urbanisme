import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Blogs from './components/Blogs';
import Home from './components/Home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import APropos from './components/APropos';
import Contact from './components/Contact';
import Articles from './components/Articles';


export default class  Routes extends Component {
    render (){
        return(
                <div className="container">
                    <Router>
                        <Navbar />
                        <Route path="/" exact component={ Home } />
                        <Route path="/blog" exact component={ Blogs } />
                        <Route path="/apropos" exact component={ APropos } />
                        <Route path="/contact" exact component={ Contact } />
                        <Route path="/articles" exact component={ Articles } />
                    </Router>
             </div>
        );
    };
}