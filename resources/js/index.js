import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Blog from './components/Blog';
import Example from './components/Example';
import BlogArticle from './components/BlogArticle';
import BlogArticlePost from './components/BlogArticlePost';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
export default class  Index extends Component {
   
    render (){
        return(
        <div className="container">
               <Router>
                <Navbar />
                <Route path="/" exact component={Example} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/:id" exact render={props => <BlogArticle{...props} /> }/>
                    <Route path="/blog/postArticle" exact component={BlogArticlePost}/>
               </Router>
            {/* <Router>
                <div>
                    <Navbar />
                    <Link to="/" >Home</Link>
                    <Link to="/blog" >Blog</Link>
                    <Link to="/blog/postArticle" >Post Article</Link>
                    <Route path="/" exact component={Example} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/:id" exact render={props => <BlogArticle{...props} /> }/>
                    <Route path="/blog/postArticle" exact component={BlogArticlePost}/>
                    </div>
            </Router> */}
         </div>
        );
    };
}



if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
