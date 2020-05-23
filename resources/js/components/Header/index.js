import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from './Navbar';
import Search from './Search';
import MovingText from './MovingText';
import logo from '../../images/logo.png';
import SwitchLanguage from './SwitchLanguage';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginLeft:'30px',
    display:'flex',
    justifyContent:'space-between',
    flexWrap:'wrap'
 
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
              <React.Fragment> 
                <MovingText />  <SwitchLanguage  />
                  <Toolbar className={classes.toolbar}> 
                  <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                    <img src={logo}  width="170" height="170" alt="logo"></img> 
                    <h5>URBATER</h5>
                  </div>
                    <Search />
                  </Toolbar>
                    <Navbar />
              </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};