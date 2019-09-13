import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fffde7',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <ListItemText primary="List 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="List 2 (button)" />
        </ListItem>
        <ListItem disabled>
          <ListItemText primary="List 3 (disabled)" />
        </ListItem>
        <ListItem selected>
          <ListItemText primary="List 4 (selected)" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="List 5 (divider)" />
        </ListItem>
        <ListItemLink href="https://kakakakakku.hatenablog.com/">
          <ListItemText primary="List 6 (link)" />
        </ListItemLink>
      </List>
    </div>
  );
}

export default App;
