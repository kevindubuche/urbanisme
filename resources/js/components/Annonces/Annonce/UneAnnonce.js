import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { fetchAnnonce } from '../../../actions/annonceActions';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';

// const Image= <img style={{height:'250px',width:'250px', borderRadius:'125px'}} src={require('../marc.jpg')} />

class UneAnnonce extends Component {
    constructor(props){
        super(props);
    }
    UNSAFE_componentWillMount(){
        this.props.fetchAnnonce(this.props.match.params.id);
        // console.log(this.props.match.params.id);
    }

    //sim nan page UneAnnonce la deja e m klike sou annonces kap deroule anle a, url la chanje but pa gen render
    //so nou veye chanjman nan url la pou refetch data yo
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.match.params.id !=this.props.match.params.id ){
            this.props.fetchAnnonce(nextProps.match.params.id);
        }
           
      
    }
   
    render(){
        return (
            <div>
                 <Grid item xs={12} sm={3}>
                  <img src={"/annonces_images/"+this.props.annonce.image} style={{height:'250px',width:'250px', borderRadius:'125px'}} />
                  
                  </Grid>
                     <Grid item xs={12} sm={9}>
                     <Paper>
                             <Typography variant="caption" display="block" gutterBottom >
                             {this.props.annonce.created_at} <br />
                                 {this.props.annonce.author}
                         </Typography>
                         <Typography variant="h2" gutterBottom>
                          {this.props.annonce.title}
                          </Typography>
                        
                         <Typography variant="body2" gutterBottom>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit
                     </Typography>
                     <Typography variant="body2" gutterBottom>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit
                     </Typography>
                     <Typography variant="body2" gutterBottom>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit
                     </Typography>
                     <Typography variant="body2" gutterBottom>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit
                     </Typography>
                     <Typography variant="body2" gutterBottom>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit
                     </Typography>
                     <Typography variant="body2" gutterBottom>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipitLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                         unde suscipit
                     </Typography>
                     </Paper>
                 </Grid>
            </div>
           
           );
    }
 
}
UneAnnonce.propTypes = {
    fetchAnnonce : PropTypes.func.isRequired,
    // annonces : PropTypes.array.isRequired,
    annonce : PropTypes.object,
}
const mapStateToProps = (state) => ({
    //  annonces : state.annonces.items,
    annonce : state.annonces.item,
})
export default connect(mapStateToProps, { fetchAnnonce })( withRouter(UneAnnonce) );