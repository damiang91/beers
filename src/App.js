import React from 'react';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
import './App.css';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const classes = useStyles();
  return (
    
      <Router>  

      <div className={classes.root + " App"}>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>          
                <MenuIcon />             
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}><Link to={'/'}>Home</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to={'/list'}>List of our Beers</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to={'/about'}>About us</Link></MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>  
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
