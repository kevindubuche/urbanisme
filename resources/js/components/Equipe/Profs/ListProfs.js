import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  color:{
    color:"gray",
  }
}));
const image =  <AccountCircleIcon style={{width:50, height:50,  color:"gray"}}/>
export default function CheckboxListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  return (
    <List dense className={classes.root}>
    
       
          <ListItem  button>
        
              {image}
            
            <Link to="profs#ligne1">
                <ListItemText id='l'className={classes.color} primary={`Fabienne Colas`} />
            </Link>
    
          </ListItem>
          <ListItem  button>
            {/* <ListItemAvatar>
              <Avatar
                alt={`Avatar `}
                src={require('../images/prof.jpg')} 
              />
            </ListItemAvatar> */}
                   {image}
            <Link to="profs#ligne1">
                <ListItemText id='l' className={classes.color} primary={`Fabienne Colas`} />
            </Link>
          </ListItem>
          <ListItem  button>
          {image}
            <Link to="profs#ligne1">
                <ListItemText id='l' className={classes.color} primary={`Fabienne Colas`} />
            </Link>
          </ListItem><ListItem  button>
          {image}
            <Link to="profs#ligne1">
                <ListItemText id='l' className={classes.color} primary={`Fabienne Colas`} />
            </Link>
          </ListItem>
      
    
    </List>
  );
}
