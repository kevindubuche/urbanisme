import React, { Component} from 'react';
import DialogActions from '@material-ui/core/DialogActions';

import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

import { withRouter } from 'react-router-dom';
import './login.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CardActions from '@material-ui/core/CardActions';



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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';

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
  
  const useStyles = withTheme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        withTheme.palette.type === 'light' ? withTheme.palette.grey[50] : withTheme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: withTheme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: withTheme.spacing(1),
      backgroundColor: withTheme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: withTheme.spacing(1),
    },
    submit: {
      margin: withTheme.spacing(3, 0, 2),
    },
  });

  class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state= {
                   email : '',
                   password:''
              
           }
           
   }
 
   
   handleChange  = (e) =>{
    e.preventDefault();
    this.setState({
        [e.target.id] : e.target.value
    })
}
handleSubmit = (e) =>{
    e.preventDefault();
    console.log('ready to log in');
    console.log(this.state);
    this.props.login(this.state)
   // console.log('history :'+JSON.stringify(history))
 // history.push('/')
    

}
UNSAFE_componentWillReceiveProps=(nextProps)=>{
    if(nextProps.authResponse =='Cridentials ar ok'){

            // this.props.handleClose()
          this.props.history.push('/blog'); 
       
       
    }
}


    render(){
        const classes = useStyles();
        return(
          
            <form onSubmit={this.handleSubmit} >
           
                <div className=""></div>
               
                <div className="">
                {/* <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                  L O G   I N
                </Typography>
             
             
                  <div >
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={this.handleChange}
                            required
                        />
                        </Grid>
                        </Grid>
                    </div>
                    <div >
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LockIcon />
                        </Grid>
                        <Grid item>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Mot de passe"
                            type="password"
                            fullWidth
                            onChange={this.handleChange}
                            required
                        />
                        </Grid>
                        </Grid>
                    </div>
                    </CardContent>
            <CardActions>
              <Button type="submit" color="primary">
                  Send
              </Button>
           </CardActions>
          </Card>
         
 */}










          <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Se connecter
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              
              type="email"
              onChange={this.handleChange}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"

              id="password"
              
              onChange={this.handleChange}
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublie?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Pas de compte? S'inscrire"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>















           <b>{this.props.authResponse!=null && this.props.authResponse !="" ? this.props.authResponse :null }</b>
                </div>
                
        </form>
      
        )
    }
}

const mapStateToProps =(state) => ({
    authResponse : state.user.authResponse
});

export default connect(mapStateToProps,{ login })(withRouter (withStyles (useStyles )(LoginForm)) )
