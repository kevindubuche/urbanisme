import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Partenaires from './Partenaires';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';
import inb from './inb.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.google.com/">
        www.urbater.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
        <Partenaires />
      <Container maxWidth="lg">
    
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        
        </Typography>
        <div style={{float:"left", paddingLeft:100}}>
                <Link color="inherit" href="https://www.google.com/"> <FacebookIcon /></Link> 
                <Link color="inherit" href="https://www.google.com/">  <TwitterIcon/></Link> 
                <Link color="inherit" href="https://www.google.com/">  <InstagramIcon/></Link> 
        </div>
        <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
       
        <Box p={1} >
        <img src={inb} width={"60px"} height={"60px"} style={{marginRight:50}} />
        </Box>
        </Box>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};