import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 20,
    height:20,
    marginTop:-40,
    
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
  
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Langue</InputLabel>
        <Select defaultValue="Francais" id="grouped-select">
          <MenuItem value={1}>FR</MenuItem>
          <MenuItem value={2}>CR</MenuItem>
       
        </Select>
      </FormControl>
    </div>
  );
}
