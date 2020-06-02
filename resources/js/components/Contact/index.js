import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import data from './Contact.json';
import {useSelector} from 'react-redux';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        www.urbater.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    paddingTop:40
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const store = useSelector(store => store);
  const TEXT = store.langue.item =='1' ?data.francais : data.creole;
  
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
   
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
     
      <Grid container spacing={3}>
            <Grid item xs={12} sm={10}>
            <Typography variant="body2" color="textSecondary" align="center" style={{paddingBottom:40}}>Pour nous contacter</Typography>
                
               <Typography variant="body2" color="textSecondary" align="center">{TEXT.tilleContact}</Typography>
                <Divider/>
                <Typography variant="body2" color="textSecondary" align="left" style={{paddingBottom:20}}><HomeIcon/>
                 27, rue Toussaint Louverture, Delmas 33 (local Laboratoire National du Bâtiment et des Travaux Publics)</Typography>
          <Divider/>
                <Typography variant="body2" color="textSecondary" align="left" style={{paddingBottom:20}}>
                  <PhoneIcon/>
                +509 31 35 9233
                </Typography>
                <Divider/>
                <Typography variant="body2" color="textSecondary" align="left" style={{paddingBottom:20}}>
                  <MailIcon/>
                  urbater@ueh.edu.ht
                </Typography>
                <Divider/>
            </Grid>
          </Grid>
     
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          {TEXT.titleLeaveMsg}
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nom"
              label= {TEXT.placeholderNom}
              name="nom"
        
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={TEXT.placeholderMail}
              name="email"
              autoComplete="email"
        
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="message"
              label={TEXT.placeholderMsg}
              type="text"
              id="message"
              multiline
                rows="5"
            />
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {TEXT.boutton}
            </Button>
          
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}