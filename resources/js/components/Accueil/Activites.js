import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAnnonces } from '../../actions/annonceActions';
var moment  = require('moment');
 class Activites extends Component {
    constructor(props){
        super(props);
    }

    UNSAFE_componentWillMount(){
        this.props.fetchAnnonces();
     }
    render(){
        return (
            <div >
                  <Grid container spacing={0}>
                  <Fragment >
                  {this.props.annonces.slice(0, 5).map(( annonce, index) => 
                   <Fragment key={index} >
                         <Grid item xs={12} sm={3}>
                                   <img src={"/annonces_images/"+annonce.image} width={"80%"} height={"80%"}  />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <Paper>
                                            <Typography variant="caption" display="block" gutterBottom style={{ color:"#8c8c8c"}} >
                                            
                                                {moment(new Date(annonce.created_at)).format('ll') }
                                        </Typography>
                                        
                                        <Link to={"/annonce/"+annonce.id}> 
                                        <Typography
                                         variant="subtitle2"
                                          gutterBottom style={{ fontWeight:"bold",
                                          fontFamily:"Open Sans",
                                          color:"black"}}>
                                        {annonce.title}
                                         </Typography>
                                        </Link>
                                        <Typography 
                                        variant="body2" 
                                        gutterBottom
                                        style={{fontFamily:"Arial Regular"}}>
                                        {annonce.resume}
                                    </Typography>
                                    </Paper>
                                </Grid>

                               <br /> <br /> <br /> <br />
                               </Fragment >
                  )}
                               <Link to='/annonces'>Voir plus</Link>
                            </Fragment>   
                       
                     </Grid>
            </div>
        );
    }
    
}
Activites.propTypes = {
    fetchAnnonces : PropTypes.func.isRequired,
    annonces : PropTypes.array.isRequired,
    newAnnonce : PropTypes.object, 
}
const mapStateToProps =(state) => ({
        annonces : state.annonces.items,
        newAnnonce : state.annonces.item,
      
});
export default connect(mapStateToProps,{ fetchAnnonces })(Activites)


