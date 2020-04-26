import React, { Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { connect } from 'react-redux';
import { signUp } from '../../actions/authActions';

 class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state= {
                     name : '',
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
    console.log('ready to register');
    console.log(this.state);
    this.props.signUp(this.state);
}

    render(){
        return(
          
            <form onSubmit={this.handleSubmit} >
            <DialogContent>
              <DialogContentText>
                  To log in to this website, please enter your email address here an paswword.
              </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Nom et Prenom"
                  type="name"
                  fullWidth
                  onChange={this.handleChange}
                  required
              />
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
          </DialogContent>
          <br />
          <b>{this.props.authResponse!=null && this.props.authResponse !="" ? this.props.authResponse :null }</b>
          <DialogActions>
              <Button type="submit" color="primary">
                  Send
              </Button>
           </DialogActions>
        </form>
      
        )
    }
}


const mapStateToProps =(state) => ({
    authResponse : state.user.authResponse
});

export default connect(mapStateToProps,{ signUp })(RegisterForm)
