import React from 'react';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Cours from './Cours';
import fondation from '../images/direction.jpg';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Style/GeneralJSX';

export default function Fondation() {
  
  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
        padding :'3%',
    }
}

  return (
    <div className={classes.root} id="fondation">
      <Divider />
      <div >
        <ExpansionPanelSummary
          // expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1c-content"
          // id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>U R B A T E R</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
        <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              
            <Paper>
                <img src={fondation}  style={style.image}/>
                 </Paper>
       
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="h4" className="card-body">
              CHEMINEMENT ET STRUCTURE
            </Typography>
                <div className="card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
             
            </Grid>
            
         </Grid>
         <Divider /><Divider /><Divider />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
                <Cours />
           </Grid>
            <Grid item xs={12} sm={6}>
            <Cours />
            </Grid>
            <Grid item xs={12} sm={12}>
            <a href="/files/formulaire.pdf" target='_blank'>   
                <Button  variant="contained" color="primary" >VOIR LE PROGRAMME COMPLET</Button>
          </a>
            </Grid>
           
         </Grid>
      </div>
    </div>
  );
}
