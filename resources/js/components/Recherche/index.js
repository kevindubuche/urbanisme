// import React, { Component} from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from "react-router-dom";
// import LaRecherche from './LaRecherche';
// import Urbalab from './Urbalab';
// import Theses from './Theses';

// class Recherche extends Component {
//     componentDidMount = () => this.handleScroll();

//     componentDidUpdate = prevProps => {
//       const { location: { pathname, hash } } = this.props;
//       if (
//         pathname !== prevProps.location.pathname ||
//         hash !== prevProps.location.hash
//       ) {
//         this.handleScroll();
//       }
//     };
  
//     handleScroll = () => {
//       const { location: { hash } } = this.props;
//       const element = document.getElementById(hash.replace("#", ""));
  
//       setTimeout(() => {
//         window.scrollTo({
//           behavior: element ? "smooth" : "auto",
//           top: element ? element.offsetTop : 0
//         });
//       }, 100);
//     };
 
 
//     render(){
//         return (
//             <div >
//                 <br /> <br /> <br /><br /> <br />
//               <LaRecherche />
//               <br /> <br /> <br />
//               <Urbalab />
//               <br /> <br /> <br />
//               <Theses />
          
//             </div>
//         );
//     }
    
// }

// export default withRouter (Recherche);

