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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  return (
    <List dense className={classes.root}>
    
       
          <ListItem  button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar `}
                src={require('../images/prof.jpg')} 
              />
            </ListItemAvatar>
            <Link to="profs#ligne1">
                <ListItemText id='l' primary={`Fabienne Colas`} />
            </Link>
    
          </ListItem>
          <ListItem  button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar `}
                src={require('../images/prof.jpg')} 
              />
            </ListItemAvatar>
            <Link to="profs#ligne1">
                <ListItemText id='l' primary={`Fabienne Colas`} />
            </Link>
          </ListItem><ListItem  button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar `}
                src={require('../images/prof.jpg')} 
              />
            </ListItemAvatar>
            <Link to="profs#ligne1">
                <ListItemText id='l' primary={`Fabienne Colas`} />
            </Link>
          </ListItem><ListItem  button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar `}
                src={require('../images/prof.jpg')} 
              />
            </ListItemAvatar>
            <Link to="profs#ligne1">
                <ListItemText id='l' primary={`Fabienne Colas`} />
            </Link>
          </ListItem>
      
    
    </List>
  );
}
