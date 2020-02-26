import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link , Route} from 'react-router-dom';
import ImageUpload from './ImageUpload';
import Header from './Header';
import Footer from './Footer';
import Blogs from './Blogs';

export default class  Blog extends Component {
    constructor(){
        super();
        this.state={
            blogs: [],
            selectedBlog:[]
        }
     
    }
    componentWillMount(){
        axios.get('/api/blog').then(response => {
            this.setState({
                blogs: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }
    
    getIdOfSelectedBlog= id=> {
    //     this.setState(({blogs})=>({
    //          selectedBlog : this.blogs.find(art => art.id ===id)
    // //         })
   console.log(id)
   this.setState((prevState)=>({
    selectedBlog : prevState.blogs.find(art => art.id ===id)
   })
//    console.log(this.state.selectedBlog[0])
    // //    console.log(this.state.selectedBlog)
        
    //      })
         
    //      );
    ) }
    render (){
       
        return(
        <div className="container">
          <Header />
            <Blogs blogs={this.state.blogs} onSelect={this.getIdOfSelectedBlog} blogSelected={this.state.selectedBlog}/>
          
            <ImageUpload />

        <Footer />
        </div>
        );
    };


    
}



// if (document.getElementById('example')) {
//     ReactDOM.render(<Blog />, document.getElementById('example'));
// }
