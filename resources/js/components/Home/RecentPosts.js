import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import CircularProgress from '@material-ui/core/CircularProgress';

import OpenOneArticle from '../Articles/OpenOneArticle';

class RecentPosts extends Component {
    constructor(props){
        super(props);
        this.state={
           localArticle: {
               id :'',
               title : 'Bienvenue !',
               body:'Selectionnez un article dans la liste ci-contre.',
               author : '',
               source : '',
               created_at: '',
               updated_at : ''
               
           },
           isLoading : true
       }
   }

   UNSAFE_componentWillMount(){
    this.props.fetchPosts();
    }
    componentDidMount() {
        this.setState({isLoading: false})
    }
    render(){
        return (
           this.state.isLoading ? <CircularProgress />:  
            <div>
   
                    <h5>Recent Posts</h5><br />
                    <Grid container spacing={1}>
                        
                        {this.props.posts.map(( article, index) => 
                            <Fragment key={index}>
                                <Grid item xs={12} sm={4}>
                                    <Paper><img src={"/articles_images/"+article.image} width={"100%"} height={"100%"} /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Paper>
                                        <h5>{article.title}</h5>
                                        <h6 > Auteur : {article.author} </h6>
                                        <h6> Publie le : {article.created_at} </h6>
                                        <OpenOneArticle article={article}/>
                                    </Paper>
                                </Grid>
                               <br /> <br /> <br /> <br />
                            </Fragment>   
                        )}
                        
                     </Grid>
            </div>
        );
    }
    
}


RecentPosts.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
    newPost : PropTypes.object
}
const mapStateToProps = (state) =>({
    posts : state.posts.items,
});
export default connect (mapStateToProps,{ fetchPosts})(RecentPosts);
