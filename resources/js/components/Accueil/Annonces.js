import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import an from './an.png'

import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAnnonces } from '../../actions/annonceActions';

 class Annonces extends Component {
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
                                            <Typography variant="caption" display="block" gutterBottom >
                                                {annonce.created_at}
                                        </Typography>
                                        
                                        <Link to={"/annonce/"+annonce.id}> 
                                        <Typography variant="subtitle2" gutterBottom>
                                        {annonce.title}
                                         </Typography>
                                        </Link>
                                        <Typography variant="body2" gutterBottom>
                                        {annonce.resume}
                                    </Typography>
                                    </Paper>
                                </Grid>

                               <br /> <br /> <br /> <br />
                               </Fragment >
                  )}
                           
                         

                                {/* A DELETE */}
{/*                            
                               <br /> <br /> <br /> <br />
                               <Grid item xs={12} sm={3}>
                                   <img src={an} width={"80%"} height={"80%"}  />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <Paper>
                                            <Typography variant="caption" display="block" gutterBottom >
                                                14 Avril 2020
                                        </Typography>
                                        
                                        <Link to="/annonce"> 
                                        <Typography variant="subtitle2" gutterBottom>
                                            Decouverte d'un vaccin contre le COVID 19
                                         </Typography>
                                        </Link>
                                        <Typography variant="body2" gutterBottom>
                                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                        unde suscipit
                                    </Typography>
                                    </Paper>
                                </Grid>

                               <br /> <br /> <br /> <br /> */}
                               {/* FIN A DELETE */}
                               <Link to='/annonces'>Voir plus</Link>
                            </Fragment>   
                       
                     </Grid>
            </div>
        );
    }
    
}
Annonces.propTypes = {
    fetchAnnonces : PropTypes.func.isRequired,
    annonces : PropTypes.array.isRequired,
    newAnnonce : PropTypes.object, 
}
const mapStateToProps =(state) => ({
        annonces : state.annonces.items,
        newAnnonce : state.annonces.item,
      
});
export default connect(mapStateToProps,{ fetchAnnonces })(Annonces)


