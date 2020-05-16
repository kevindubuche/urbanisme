import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

  
import Form from './Form';

export default class Create extends Component{
    constructor(props){
         super(props);
         this.state={
            opneModal :false
            
        }
   
    }

    handleToggle = () => {
        this.setState({
            opneModal : !this.state.opneModal
            
        })
    }

    render(){
        const {opneModal} = this.state
        return(
            <Fragment>
                
                <Button   onClick={this.handleToggle} >
                    <AddCircleRoundedIcon
                      fontSize="large"/>
                </Button>
                <Dialog
                open={opneModal}
               
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">
                            Creer un nouvel article
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            Veuillez remplir le formulaire suivant
                            </DialogContentText>
                     
                         <Form closeModal={this.handleToggle}/>

                        </DialogContent>
                       
                 </Dialog>
        </Fragment>
        )
    }
}

