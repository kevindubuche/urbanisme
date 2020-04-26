import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import Konbit from './Konbit';
import Conferences from './Conferences';

class Activites extends Component {
    componentDidMount = () => this.handleScroll();

    componentDidUpdate = prevProps => {
      const { location: { pathname, hash } } = this.props;
      if (
        pathname !== prevProps.location.pathname ||
        hash !== prevProps.location.hash
      ) {
        this.handleScroll();
      }
    };
  
    handleScroll = () => {
      const { location: { hash } } = this.props;
      const element = document.getElementById(hash.replace("#", ""));
  
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0
        });
      }, 100);
    };
 
 
    render(){
        return (
            <div >
                <br /> <br /> <br /><br /> <br />
              <Konbit/>
              <br /> <br /> <br />
              <Conferences/>
              <br /> <br /> <br />
            </div>
        );
    }
    
}

export default withRouter (Activites);

