import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import CreateDialog from './Blogs/Create';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

import ButtonGroup from '@material-ui/core/ButtonGroup';
export default class NavAddm extends Component{  
  render(){
    return(
      <AppBar position="static">
          <Toolbar>
          <Typography variant="h5" color="inherit" style={{flex : 1}}>
               Administrator
           </Typography>
        
           <ButtonGroup size="small"  aria-label="small outlined button group">
              <Link to="admin#conferences">
                <Button>Conferences</Button>
              </Link>
              <Link to="admin#annonces">
                <Button>Annonces</Button>
              </Link>
              <Link to="admin#konbit">
                <Button>Konbit</Button>
              </Link>
              <Link to="admin#addAdmin">
                <Button>Add Admin</Button>
              </Link>

          </ButtonGroup>
          </Toolbar>
      </AppBar>
    )
  }

}


