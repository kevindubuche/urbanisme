import React, {Component,Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

class  Blogs extends Component {

UNSAFE_componentWillMount(){
   this.props.fetchPosts();
}
UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost); //on ajoute le nouveau article en tete de liste
    }
}
    render(){
        const styles ={
            Paper : {padding :20,
                  marginTop : 10,
                  marginBottom: 10,
                   height:500,
                   overflowY:'auto'}
        }
         return(
            <Grid container>
                <Grid item sm={4} >  <Paper style={styles.Paper} >
                        {this.props.posts.map(( blog, index) => 
                        <Fragment key={index}>
                            <Typography 
                                variant="h6"
                                style={{ textTransform:'capitalize' }} >
                                {blog.name}
                        </Typography>
                        <List component="ul">
                            <ListItem button
                            onClick={()=> console.log('click'+blog.id)}
                            >
                            <ListItemText 
                            primary={blog.created_at} 
                            />
                            </ListItem>
                            
                        </List>
                        </Fragment>
                        
                        )}
                    
                        </Paper>
                </Grid>
                <Grid item sm={8} >
                <Paper style={styles.Paper}>
                            <Typography
                            variant="h3"
                            >
                                Bienvenue ! {99}
                            </Typography >
                            <Typography
                            variant="h5"
                            >
                                Selectionnez un article dans la liste ci-contre.
                            </Typography>
                        </Paper>
                </Grid>
            </Grid>
    )}
}

Blogs.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
    newPost : PropTypes.object
}
const mapStateToProps =(state) => ({
        posts : state.posts.items,
        newPost : state.posts.item
});

export default connect(mapStateToProps,{ fetchPosts })(Blogs)
