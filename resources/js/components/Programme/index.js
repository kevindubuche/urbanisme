// import React, { Component} from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from "react-router-dom";
// import Cheminement from './Cheminement';
// import Admissibilite from './Admissibilite';
// import Perspectives from './Perspectives';
// import Couts from './Couts';
// import Mobilite from './Mobilite';

// class Programme extends Component {
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
//               <Cheminement />
//               <br /> <br /> <br />
//               <Admissibilite />
//               <br /> <br /> <br />
//               <Perspectives/>
//               <br /> <br /> <br />
//               <Couts/>
//               <br /> <br /> <br />
//               <Mobilite/>
//               <br /> <br /> <br />
              
//             </div>
//         );
//     }
    
// }

// export default withRouter (Programme);

