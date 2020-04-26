import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Presentation from './Presentation';
import Objectifs from './Objectifs';
import Fondation from './Fondation';
import { withRouter } from "react-router-dom";
import Partenaires from './Partenaires';

class Mission extends Component {
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
              <Presentation />
              <br /> <br /> <br />
              <Objectifs />
              <br /> <br /> <br />
              <Fondation />
              <br /> <br /> <br />
              <Partenaires/>
            </div>
        );
    }
    
}

export default withRouter (Mission);

