import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './dashboard.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecentPosts from './RecentPosts';
import Card from './Card';

import Message from './Message';

import ImageWelcome from './ImageWelcome';

export default class HomeDesign extends Component {
    render(){
        return ( 
        <div >
            {/* <div   className="bkDashboard"></div>
            <div className="contenantDashboard" >
                <h1 className="txtBienvenu">Urbanisme Something Good.</h1>
                <h3 className="petitText">I Don't Know What To Write .</h3>
            </div> */}
            <ImageWelcome />
            <div className="grid container"> 
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Paper>
                            <Grid container spacing={3}>
                                <Message />
                                <Grid item xs={12} sm={6}>
                                    <Card />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper>
                            <RecentPosts />
                        </Paper>
                    </Grid>
                 </Grid>
            </div>
            
             
        </div>
             
        );
    }
    
}



