import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import ImageWelcome from './ImageWelcome';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Annonces from './Annonces';
import Activites from './Activites';
import Carousel from './Carousel';
import Card from './Card';

import './accueil.css';
import Box from '@material-ui/core/Box';

export default class Accueil extends Component {
    
    render(){
        const mainFeaturedPost = {
            title: 'URBATER un joli titre ici stp',
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image: 'https://source.unsplash.com/random',
            imgText: 'main image description',
            linkText: 'Continue reading…',
          };
        return (
            <div >
                <ImageWelcome post={mainFeaturedPost} />
                <Grid container spacing={3}>
                      
                          <Grid item xs={12} sm={6}>
                              <Paper> 
                                  <Typography variant="h6" display="block" gutterBottom className='annoncesTitle'> 
                                <Box display="flex" justifyContent="center"  >
                                    <Box p={1} >
                                        <Typography variant="h6" display="block" gutterBottom className='annoncesTitle'> Annonces </Typography>
                                    </Box>
                                </Box>
                               </Typography>
                                  <Divider />
                                  <Divider />
                              <Annonces />
                              </Paper>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <Paper> 
                             
                              <Typography variant="h6" display="block" gutterBottom className='annoncesTitle'> 
                                <Box display="flex" justifyContent="center"  >
                                    <Box p={1} >
                                        <Typography variant="h6" display="block" gutterBottom className='annoncesTitle'> Activites </Typography>
                                    </Box>
                                </Box>
                               </Typography>
                                  
                                  <Divider />
                                  <Divider />
                              <Activites />
                              </Paper>
                          </Grid>
               </Grid>

               <Grid container spacing={3} style={{marginTop:'100px'}}>
                      
                      <Grid item xs={12} sm={4}>
                          <Paper> 
                     <Card />
                          </Paper>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                      <Paper> 
                    <Carousel/>
                     </Paper>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                      <Paper> 
                      <Card />
                     </Paper>
                      </Grid>
           </Grid>
              
            </div>
        );
    }
    
}



