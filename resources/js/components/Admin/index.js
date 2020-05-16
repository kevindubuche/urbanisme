import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";

import NavAdm  from './NavAdm';
import ManageConferences from './ManageConferences';
import ManageKonbit from './ManageKonbit';
import ManageAdmin from './ManageAdmin';
import ManageAnnonces from './ManageAnnonces';

class Admin extends Component {
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
               <NavAdm />
               <ManageAnnonces />
              <br /> <br /> <br />
              <ManageConferences />
              <br /> <br /> <br />
              <ManageKonbit />
              <br /> <br /> <br />
              <ManageAdmin />
              <br /> <br /> <br />
            
              
            </div>
        );
    }
    
}

export default withRouter (Admin);

