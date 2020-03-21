import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import TextField from '@material-ui/core/TextField';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import PropTypes from 'prop-types'; 
import {connect} from 'react-redux';
import { createPost } from '../../../actions/postActions';
class Create extends Component{
    constructor(props){
         super(props);
         this.state={
            open :false,
            localArticle :
                {
                name:'',
                body:'',
                created_at:''
            }
            
        }
   
    }
    handleToggle = () => {
        this.setState({
            open : !this.state.open,
            localArticle : {
                name:'',
                body:'',
                created_at:''
            },
            
        })
    }
    handleChange = name => ({target: {value}}) => {
        this.setState({
            localArticle :{
                ...this.state.localArticle,
                [name]:value
            }
        })
    }
   

    handleSubmit= e =>{
        // TODO : validate

        e.preventDefault();
        this.props.createPost(this.state.localArticle);
    }
    
    render(){
        const {open} = this.state
        return(
            <Fragment>
                
                <Button   onClick={this.handleToggle} >
                    <AddCircleRoundedIcon
                      fontSize="large"/>
                </Button>
                <Dialog
                open={open}
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">
                            Creer un nouvel article
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            Veuillez remplir le formulaire suivant
                            </DialogContentText>
                     
                        <form onSubmit={this.handleSubmit.bind(this)}>
                        <TextField
                            label="Title"
                            onChange={this.handleChange('name')}
                            value={this.state.localArticle.name}
                            margin="normal"
                            /> 
                            <br />
                             <TextField
                            label="Body"
                            multiline
                            rows="4"
                            onChange={this.handleChange('body')}
                            value={this.state.localArticle.body}
                            margin="normal"
                            />
                              
                 <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Ajoutez votre texte ici !</p>"
                    config={{ckfinder: {
                        // Upload the images to the server using the CKFinder QuickUpload command.
                        uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                      }}}
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({body: data})
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    
                />
                
                              
                        </form>
                        </DialogContent>
                        <DialogActions>
                                                
                        <Button
                         color="primary" 
                         type="submit"
                         onClick={this.handleSubmit}>
                            Enregistrer
                        </Button>
                        </DialogActions>
                 </Dialog>
        </Fragment>
        )
    }
}

Create.propTypes = {
    createPost : PropTypes.func.isRequired
}
export default connect(null, { createPost })(Create)