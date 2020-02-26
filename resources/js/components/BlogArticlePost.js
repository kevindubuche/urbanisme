import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';

export default class BlogArticlePost  extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            body: ''
        }
    }
    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }
    handleBodyChange(e){
        this.setState({
            body: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios.post('/api/blog', this.state).then(response =>{
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
    
 render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Post a new article</div>
                        <div className="card-body">
                             <form onSubmit={this.handleSubmit.bind(this)}>
                                 <div>
                                     <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter blog title"
                                        onChange={this.handleNameChange.bind(this)}
                                        value={this.state.name}
                                     />
                                 </div>
                      
                                 <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
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
                                 
                              <Button variant="contained" type="submit" color="primary"> Submit  </Button>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    );
}
}
