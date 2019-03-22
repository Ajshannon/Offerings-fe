//React
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

// Import PropTypes from 'prop-types';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';

import styled from 'styled-components';

// Redux
import { connect } from 'react-redux';

// Actions
import * as actions from '../store/actions/index';


const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  && {
    @media(max-width: 600px) {
      display: none;
    }
  }
`

const MobileContainer = styled(MenuIcon)`
&& {
  @media(min-width: 600px) {import { withTheme } from 'styled-components';
    display: none;
  }
  }
`

const Title = styled(Typography)`
&& {
  margin: 0 auto;
  text-align: center;
  margin-left: -15vw;
  @media(max-width: 600px) {import { withTheme } from 'styled-components';
    margin-left: 10vw;
  }
  }
`
const TopNav = styled(Typography)`
&& {
  
  text-align: right;
  @media(min-width: 600px) {import { withTheme } from 'styled-components';
    display: none;
  }
  }
`

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function MaterialIcon(props) {
  return (
    <i className='material-icons'>
      {props.icon}
    </i>
  )
}

  class NavBar extends React.Component {
    state = {
      auth: true,
      anchorEl: null,
      left: false,
    };
    
    handleChange = event => {
      this.setState({ auth: event.target.checked });
    };
  
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    toggleDrawer = (side, open) => () => (
      this.setState({
        [side]: open,
      })
    )
    
    render() {
      const { auth, anchorEl } = this.state;
      const open = Boolean(anchorEl);
      const sideList = (
        <div>
              {
                this.props.isAuthenticated ?
                <List>
                  <MenuItem component={Link} to='/'>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText>Home</ListItemText>
                  </MenuItem>
                  <MenuItem component={Link} to='/feedback'>
                    <ListItemIcon>{<MaterialIcon icon='report_problem' />}</ListItemIcon>
                    <ListItemText>Give feedback</ListItemText>
                  </MenuItem>
                  <MenuItem component={Link} to='/logout'>
                    <ListItemIcon>{<MaterialIcon icon='undo' />}</ListItemIcon>
                    <ListItemText>logout</ListItemText>
                  </MenuItem>
                  <MenuItem component={Link} to='/offering-post'>
                    <ListItemIcon>{<MaterialIcon icon='settings' />}</ListItemIcon>
                    <ListItemText>Offering-post</ListItemText>
                  </MenuItem>
                  <MenuItem component={Link} to='/settings'>
                    <ListItemIcon>{<MaterialIcon icon='settings' />}</ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                  </MenuItem>
                </List>
                :
                <List>
                  <MenuItem component={Link} to='/login'>
                    <ListItemIcon>{<MaterialIcon icon='undo' />}</ListItemIcon>
                    <ListItemText>login</ListItemText>
                  </MenuItem>
                  <MenuItem component={Link} to='/signup'>
                    <ListItemIcon>{<MaterialIcon icon='settings' />}</ListItemIcon>
                    <ListItemText>Signup</ListItemText>
                  </MenuItem>
                </List>
              }
              
        </div>
      )

      return (
        <div>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
          <AppBar position="static" style={{backgroundColor:'primary'}}>
            <Toolbar>
              
              {auth && (
                <Grid container alignItems='center' direction='row'>
                <Grid color="inherit"item xs={1} sm={false}>
                  <TopNav color="inherit" variant="h6" marginleft="20">
                  <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                    <MobileContainer/>
                  </IconButton>
                  </TopNav>
                </Grid>
                <Grid item xs={10} sm={1}> 
                  <Title variant="h6" color="inherit" ><Button href="/" color="inherit">Offerings</Button></Title>
                </Grid>
                <Grid item xs={false} sm={10}>
                  <RightContainer>
                      <Typography variant="h6" marginleft="20" color="inherit">
                            {
                              this.props.user ?
                              <React.Fragment>
                                <Button color="inherit" href="/settings">{this.props.user.username}</Button>
                                <Button color="inherit" href="mailto:aj@kenzie.academy">Give feedback</Button>
                              </React.Fragment>
                              :
                              <React.Fragment>
                                <Button color="inherit" href="/login">Login</Button>
                                <Button color="inherit" href="mailto:aj@kenzie.academy">Give feedback</Button>
                              </React.Fragment>
                            }
                      </Typography>
                      <IconButton variant="h6" marginleft="20"
                        color="inherit"
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                      >
                        <AccountCircle />
                      </IconButton>
                      {
                          this.props.isAuthenticated ?

                      <Menu 
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        // anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                        transformOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                        open={open}
                        onClose={this.handleClose}
                      >
                        <MenuItem component={ Link } onClick={this.handleClose} to='/settings'>Settings</MenuItem>
                        <MenuItem component={ Link } onClick={this.handleClose} to='/offering-post'>Post Offering</MenuItem>
                        <MenuItem component={ Link } onClick={this.props.logout} to='/'>Signout</MenuItem> 

                      </Menu>:
                      <Menu 
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        // anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                        transformOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                        open={open}
                        onClose={this.handleClose}
                      >
                        <MenuItem component={ Link } onClick={this.handleClose} to='/settings'>Settings</MenuItem>
                        <MenuItem component={ Link } onClick={this.handleClose} to='/signup'>Signup</MenuItem>
                        <MenuItem component={ Link } onClick={this.handleClose} to='/login'>Login</MenuItem>
                        
                      </Menu>
                        }
                      
                    </RightContainer>
                </Grid>
                </Grid>
              )}
            </Toolbar>
          </AppBar>
          {this.props.children}
        </div>
      );
    }}


  const mapStateToProps = (state) => {
    return { 
        user: state.reducer.user
    }
}
 const mapDispatchToProps = dispatch => {
   return {
     logout: () => dispatch(actions.logout())
   }
 }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));