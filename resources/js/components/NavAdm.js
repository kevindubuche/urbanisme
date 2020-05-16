import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from './Blogs/Create';

import Button from '@material-ui/core/Button';

export default class NavAddm extends Component{  
  render(){
    return(
      <AppBar position="static">
          <Toolbar>
          <Typography variant="h5" color="inherit" style={{flex : 1}}>
               Administrator
           </Typography>
           <Button>Comptes</Button>
          <CreateDialog  />
          </Toolbar>
      </AppBar>
    )
  }

}


