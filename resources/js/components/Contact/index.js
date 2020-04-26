import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LeaveMessage from './LeaveMessage';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SmallChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
     
     <Chip
        size="small"
        icon={<PermIdentityIcon />}
        label="Directeur : Le Bron James"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size="small"
        icon={<HomeIcon />}
        label="Adresse : #34,Delmas 33, Haiti WE"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
       <Chip
        size="small"
        icon={<PhoneIcon />}
        label="Phone : +509 36897623"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
       <Chip
        size="small"
        icon={<MailIcon />}
        label="Email : hurbanisme@mail.com"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size="small"
        icon={<AccessAlarmIcon />}
        label="Heure de fonctionnement : Lundi au Samedi: 8H-4H"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
<LeaveMessage />
    </div>
  );
}
