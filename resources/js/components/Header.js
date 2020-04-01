import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from './Blogs/Create';

export default class Header extends Component{  
  render(){
    return(
      <AppBar position="static">
          <Toolbar>
          <Typography variant="h5" color="inherit" style={{flex : 1}}>
                Manage Blog
           </Typography>
          <CreateDialog  />
          </Toolbar>
      </AppBar>
    )
  }

}


