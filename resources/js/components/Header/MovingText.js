import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import Link from '@material-ui/core/Link';

export default class MovingText extends Component {
    render(){
        return (
            <div >
                           
                           <marquee behavior="scroll" direction="left">
                         <Link color="inherit" href="/">Les inscriptions sont ouvertes.. </Link> 
                         <Link color="inherit" href="/blog">|  Mesures concernant le COVID-19..</Link> 
                         <Link color="inherit" href="/">| Vaccin contre le Covid 19.. </Link> 
                         <Link color="inherit" href="/blog">|  FDS inscription 2021</Link> 
                       </marquee>
            </div>
        );
    }
    
}



