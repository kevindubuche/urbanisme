import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import an from './ic.jpg'

import {Link} from 'react-router-dom';
import OpenOneArticle from '../Articles/OpenOneArticle';

export default class Activites extends Component {
    render(){
        return (
            <div >
                  <Grid container spacing={0}>
                      
                            <Fragment >
                                <Grid item xs={12} sm={3}>
                                   <img src={an} width={"80%"} height={"80%"} style={{borderRadius:'50px'}}  />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <Paper>
                                            <Typography variant="caption" display="block" gutterBottom >
                                                14 Avril 2020
                                        </Typography>
                                        
                                        <Link to="/"> 
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
                               <br /> <br /> <br /> <br />
                               <Grid item xs={12} sm={3}>
                                   <img src={an} width={"80%"} height={"80%"}  style={{borderRadius:'50px'}}/>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <Paper>
                                        <Typography variant="caption" display="block" gutterBottom>
                                        14 Avril 2020
                                        </Typography>
                                        <Link to="/"> 
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
                               <br /> <br /> <br /> <br />
                               <Grid item xs={12} sm={3}>
                                   <img src={an} width={"80%"} height={"80%"}  style={{borderRadius:'50px'}}/>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <Paper>
                                        <Typography variant="caption" display="block" gutterBottom>
                                        14 Avril 2020
                                        </Typography>
                                        <Link to="/"> 
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
                               <br /> <br /> <br /> <br />
                            </Fragment>   
                       
                     </Grid>
            </div>
        );
    }
    
}



