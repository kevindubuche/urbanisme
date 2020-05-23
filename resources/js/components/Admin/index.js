import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";

import NavAdm  from './NavAdm';
import ManageConferences from './ManageConferences';
import ManageKonbit from './ManageKonbit';
import ManageAdmin from './ManageAdmin';
// import ManageAnnonces from './ManageAnnonces';

class Admin extends Component {

    render(){
        return (
            <div >
               <NavAdm />
               {/* <ManageAnnonces />
              <br /> <br /> <br />
              <ManageConferences />
              <br /> <br /> <br />
              <ManageKonbit />
              <br /> <br /> <br />
              <ManageAdmin /> */}
              <br /> <br /> <br />
            
              
            </div>
        );
    }
    
}

export default withRouter (Admin);

