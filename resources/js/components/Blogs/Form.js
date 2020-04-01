import React, { Component} from 'react';
import TextField from '@material-ui/core/TextField';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types'; 
import {connect} from 'react-redux';
import { createOrEditPost } from '../../actions/postActions';

import { withStyles } from '@material-ui/styles';


const styles = theme =>({
    FormControl :{
        width :500
    }
})
 class Form extends Component{
    constructor(props){
        super(props);
        this.state= {
            localArticle :{
                   title : '',
                   body:'',
                   author : '',
                   source : '',
                   created_at: '',
                   updated_at : ''
               }
           }
   }
   componentDidMount(){
    this.setState({
        localArticle :this.props.article ? this.props.article :{
            title : '',
            body:'',
            author : '',
            source : '',
            created_at: '',
            updated_at : ''
     }
    })

   }
   UNSAFE_componentWillReceiveProps({article}){
       this.setState({
           localArticle : article
       })

   }

   
   handleSubmit= e =>{
    // TODO : validate

    e.preventDefault();
    this.props.createOrEditPost(this.state.localArticle);
    
    //si c'est SAVE on ferme le modal & si EDIT on affiche succes
    !this.state.localArticle.id ? this.props.closeModal() :this.props.openAlert();
   
    
}

   handleChange = name => ({target: {value}}) => {
    this.setState({
        localArticle :{
            ...this.state.localArticle,
            [name]:value
        }
    })
}
// handleCKChange = data => {
//     this.setState({
//         ...this.state.localArticle,
//           body : data.getData()
        
//     })
// }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                
            <TextField
                label="Title"
                onChange={this.handleChange('title')}
                value={this.state.localArticle.title}
                margin="normal"
                required={true}
                className={this.props.classes.FormControl}
                /> 
                {/* <br />
                 <TextField
                label="Article"
                multiline
                rows="4"
                onChange={this.handleChange('body')}
                value={this.state.localArticle.body}
                margin="normal"
                className={this.props.classes.FormControl}
                /> */}
                <br />
                    <TextField
                label="Auteur"
                onChange={this.handleChange('author')}
                value={this.state.localArticle.author}
                margin="normal"
                required={true}
                className={this.props.classes.FormControl}
                /> 
                <br />
                    <TextField
                label="Source"
                onChange={this.handleChange('source')}
                value={this.state.localArticle.source}
                margin="normal"
                required={true}
                className={this.props.classes.FormControl}
                /> 
                <br />
                  
                <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.localArticle.body}
                    //"<p>Ajoutez votre texte ici !</p>"
                    config={{ckfinder: {
                        // Upload the images to the server using the CKFinder QuickUpload command.
                        uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                    }}}
                    onInit={ (editor,body=this.state.localArticle.body) => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                        editor.data.set(body);
                    } }
                    
                    onChange={ ( event, editor ) => {
                        // this.handleCKChange(editor);
                        const data = editor.getData();
                        this.setState({
                            localArticle :{
                                ...this.state.localArticle,
                                body:data
                            }
})
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    
                />
                <br />
             
                <Button
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    onClick={this.handleSubmit}>
                   {this.props.article ? 'Edit' : 'Enregistrer'}
                    
                </Button>
                  
            </form>
        )
    }
}

Form.propTypes = {
    createOrEditPost : PropTypes.func.isRequired
}
export default connect(null, { createOrEditPost })(withStyles (styles) (Form) )