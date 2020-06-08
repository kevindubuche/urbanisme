import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';
 export default class FormContact extends Component{
    constructor(props){
        super(props);
        this.state= {
            name : '',
            email:'',
            message : '',
            
            
           }
   }
   componentDidMount(){
    this.setState({
        name : '',
        email:'',
        message : '',
    })

   }
   UNSAFE_componentWillReceiveProps({article}){//nou pa use redux la donc nap veye changement de article selectionner
     

   }

   handleSubmit= e =>{
    
   
    
}

   handleChange = name => ({target: {value}}) => {
    this.setState({
        
            ...this.state,
            [name]:value
        
    })
}

    render(){
        
    
        return(
            <form  noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nom"
                label= {this.props.placeholderNom}
                name="nom"
                onChange={this.handleChange('nom')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={this.props.placeholderMail}
                name="email"
                autoComplete="email"
                onChange={this.handleChange('email')}
          
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="message"
                label={this.props.placeholderMsg}
                type="text"
                id="message"
                multiline
                  rows="5"
                  onChange={this.handleChange('message')}
              />
           
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                // className={classes.submit}
              >
                {this.props.boutton}
              </Button>
            
              <Box mt={5}>
              </Box>
            </form>
        )
    }
}
