import React, {Component} from 'react';
import ImageUpload from './ImageUpload';
import Header from './Header';
import Footer from './Footer';
import Blogs from './Blogs';

 export default class  BlogStucture extends Component {
    render (){
        return(
 
            <div className="container">
                <Header />
                <Blogs />
                <ImageUpload />
                <Footer />
            </div>
       
        );
    };   
}
