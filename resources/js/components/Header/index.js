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
                <MovingText /> 
                <div>
                    <SwitchLanguage  />
                </div>
               
                  <Toolbar  style={{display:'flex', flexWrap:'wrap', flexDirection:'column'}}> 
                  <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                    <img src={logo}  width="170" height="170" alt="logo" style={{float:"left"}}></img> 
                    <h5 style={{display:'flex', flexWrap:'wrap', alignItems: 'left'}}>URBATeR, Maîtrise en Urbanisme Résilient et Aménagement des Territoires à Risques</h5>
                  </div>
                
                    <div  style={{ alignSelf:'flex-end', marginRight:"-100px"}}>
                      <div >
                         <Search />
                      </div>
                    
                    </div>
                  
                  </Toolbar>
                  <div style={{paddingTop:20, paddingBottom:20}}>
                     <Navbar />
                  </div>
                   
              </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};