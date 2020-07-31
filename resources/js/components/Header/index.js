import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from './Navbar';
import Search from './Search';
import MovingText from './MovingText';
import logo from '../../images/logo.png';
import SwitchLanguage from './SwitchLanguage';
import { Link} from 'react-router-dom';

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
                <div style={{display:'flex', flexWrap:'wrap', flexDirection:'column'}}>
                      
                <div style={{display:'flex', flexWrap:'wrap', flexDirection:'column'}} >
                  
                      <div>
                          <SwitchLanguage  />
                      </div>
                    <div>
                      <Toolbar  > 
                            <div  style={{marginLeft:'35px'}}>
                            <Link to="/" > 
                                  <img src={logo}  width="170" height="170" alt="logo" style={{float:"left"}}></img> 
                                  </Link>  
                            </div>
                                <div>
                              
                                  <div>
                                    <p style={{fontSize:30}}>URBATeR,</p>
                                    <p style={{fontSize:25}}>Maîtrise en Urbanisme Résilient</p>
                                    <p style={{fontSize:25}}>et Aménagement des Territoires à Risques</p>
                                  </div>
                                </div>
                          
                        </Toolbar>
                    </div>
                        

                </div>
              
                      <div style={{alignSelf:'flex-end', marginRight:'60px'}}>
                          <Search />
                      </div>
                       
                  
                  
                  <div style={{paddingTop:20, paddingBottom:20}}>
                     <Navbar />
                  </div>
                </div>
              </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};