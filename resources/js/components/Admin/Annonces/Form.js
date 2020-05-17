import React, { Component} from 'react';
import TextField from '@material-ui/core/TextField';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types'; 
import {connect} from 'react-redux';
import { createOrEditAnnonce } from '../../../actions/annonceActions';

import { withStyles } from '@material-ui/styles';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

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
                   image :'',
                   created_at: '',
                   updated_at : '',
                //    token : localStorage.getItem('user')
               },
               imagePreviewUrl:'',
               crop: {
                unit: 'px', // default, can be 'px' or '%'
                x: 130,
                y: 50,
                width: 200,
                height: 200
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
            resume :'',
            image: '',
            created_at: '',
            updated_at : '',
            // token : localStorage.getItem('user')
     },
     imagePreviewUrl:''
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
    this.props.createOrEditAnnonce(this.state.localArticle);
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
getBase64 = (file,callback) => {
    const reader = new FileReader();
    reader.addEventListener('load',()=>callback(reader.result));
    reader.readAsDataURL(file);

    //po preview image la
    reader.onloadend = () => {
    this.setState({
        imagePreviewUrl: reader.result
      });
    }
}
fileTransform = (e) =>{
    this.getBase64(e.target.files[0], (base64String)=>{
        this.state.localArticle.image =base64String;
        console.log(this.state.localArticle)
    })
}
setCrop = crop => {
    this.setState({ crop });
  };
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
    
        return(
            <form onSubmit={this.handleSubmit}>
            <TextField
                label="Title"
                onChange={this.handleChange('title')}
                value={this.state.localArticle.title}
                margin="normal"
                className={this.props.classes.FormControl}
                required
                /> 
                <br />
                    <TextField
                label="Auteur"
                onChange={this.handleChange('author')}
                value={this.state.localArticle.author}
                margin="normal"
                className={this.props.classes.FormControl}
                required
                /> 
                <br />
                    <TextField
                label="Source"
                onChange={this.handleChange('source')}
                value={this.state.localArticle.source}
                margin="normal"
                className={this.props.classes.FormControl}
                required
                /> 
                <br />
                <br />
                    <TextField
                label="Resume"
                onChange={this.handleChange('resume')}
                value={this.state.localArticle.resume}
                margin="normal"
                multiline
                rows="4"
                className={this.props.classes.FormControl}
                required
                /> 
              <h6>Image</h6>
                <input type="file" id="image" onChange={this.fileTransform} />
                <br /> 
                {  imagePreviewUrl ?
                    $imagePreview = (<img src={imagePreviewUrl} width='200px' height='200px'/>) 
                    :  <img src={"/annonces_images/"+this.state.localArticle.image} width={200} height={200} /> 
                } 

            <ReactCrop src={imagePreviewUrl} crop={this.state.crop} onChange={newCrop => setCrop(newCrop)} />
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
                    >
                   {this.props.article ? 'Edit' : 'Enregistrer'}
                    
                </Button>
                
                  
            </form>
        )
    }
}
Form.propTypes = {
    createOrEditAnnonce : PropTypes.func.isRequired
}
export default connect(null, { createOrEditAnnonce })(withStyles (styles) (Form) )