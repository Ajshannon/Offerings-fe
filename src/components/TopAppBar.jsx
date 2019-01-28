import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styled, { css } from 'styled-components';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`

  class MenuAppBar extends React.Component {
    state = {
      auth: true,
      anchorEl: null,
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
  
    render() {
      const { classes } = this.props;
      const { auth, anchorEl } = this.state;
      const open = Boolean(anchorEl);
  
      return (
        <div className={classes.root}>
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}
          <AppBar position="static" style={{backgroundColor:'Green'}}>
            <Toolbar>
              <Typography variant="h6" marginLeft="20" color="inherit" className={classes.grow}>
                { this.props.header }
              </Typography>
              {auth && (
              <RightContainer>
                  <Typography variant="h6" marginLeft="20" color="inherit" className={classes.grow}>
                        GIVE FEEDBACK
                    </Typography>
                  <IconButton variant="h6" marginLeft="20" color="inherit" className={classes.grow}
                  
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                    <MenuItem onClick={this.handleClose}>Signout</MenuItem>
                  </Menu>
                </RightContainer>
              )}
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
  
  MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuAppBar);