import React,{Fragment} from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../../Style/GeneralJSX';
import data from './Profs.json';
import UnProf from './UnProf';

export default function Fondation() {
  
  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
        padding :'3%',
    }
}
const image = <AccountCircleIcon style={{height:'200px',width:'200px' , padding:'15px', color:"gray"}}/>
  return (
    <div className={classes.root} >
      <Divider />
      <div >
        <ExpansionPanelSummary  >
          <div className={classes.column}>
            <Typography className={classes.heading}>U R B A T e R</Typography>
          </div>
        
        </ExpansionPanelSummary>
         <Divider /><Divider /><Divider />
          <Grid container spacing={1}>
          {data.profs.map((prof, index)=>
             
          <Fragment key={index}>
            <Grid item xs={12} sm={4}>
               <UnProf 
             nom={prof.nom}
             titre={prof.titre}
             email={prof.email}
             phone={prof.phone}
             diplomes={prof.diplomes}
             biographie={prof.biographie}
             cours={prof.cours}
             expertise={prof.expertise}
             />
            </Grid>
          </Fragment>
           
              )}
          
         </Grid>
      </div>
    </div>
  );
}
