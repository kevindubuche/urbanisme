import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import BlogStucture from './components/BlogStucture';
import Home from './components/Home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';


export default class  Application extends Component {
    render (){
        return(
                <div className="container">
                    <Router>
                        <Navbar />
                        <Route path="/" exact component={Home} />
                        <Route path="/blog" exact component={BlogStucture} />
                    </Router>
             </div>
        );
    };
}


