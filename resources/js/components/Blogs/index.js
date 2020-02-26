import React, {Component,Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




export default class  Blogs extends Component {
    constructor(){
        super();
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
            {this.props.blogs.map(( blog, index) => 
            <Fragment key={index}>
                <Typography 
                  
                    variant="h6"
                    style={{ textTransform:'capitalize' }} >
                    {blog.name}
                   
                    
            </Typography>
            <List component="ul">
                <ListItem button>
                <ListItemText 
                primary={blog.created_at} 
                 onClick={()=> this.props.onSelect(blog.id)}
              
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
                    Bienvenue ! {this.props.blogSelected.id}
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