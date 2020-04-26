import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import UneThese from './UneThese';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    boruderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function Theses() {
  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
        paddingRight :'5%',
    }
}

  return (
    <div className={classes.root} id="theses">
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>U R B A T E R</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Theses et Memoire</Typography>
          </div>
        </ExpansionPanelSummary>
     
        <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
         </Grid>
         <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
         </Grid>
         <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
            <Grid item xs={12} sm={3}>
            <UneThese />
            </Grid>
         </Grid>
      </ExpansionPanel>
    </div>
  );
}
