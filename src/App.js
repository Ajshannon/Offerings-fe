// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//React-Cookies
import { withCookies } from 'react-cookie';

// Redux
import { connect } from 'react-redux';

// CSS
import './App.css';

// Pages
import CreateOffering from './pages/CreateOffering.jsx';
import Homepage from './pages/Homepage.jsx';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';
import NavBar from './components/NavBar';
import PostOffering from './pages/PostOffering';

// Actions
import * as actions from './store/actions/index'

// Styled Components
import { withTheme } from 'styled-components';

import DropYourShitZone from './components/DropShit';


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoLogin();
    console.log(this.props)
  }

  render() { 
    return (
      <React.Fragment>
            <NavBar {...this.props}>
              <Switch>
                <Route exact path='/' render={() => <Homepage {...this.props}/>} />
                <Route exact path='/create_offering' render={() => <CreateOffering {...this.props}/>} />
                <Route exact path='/login' render={() => <LoginPage {...this.props}/>} />
                <Route exact path='/signup' render={() => <SignupPage {...this.props}/>} />
                <Route exact path='/offering-post' render={() => <PostOffering {...this.props}/>} />
                <Route exact path='/dropzone' render={() => <DropYourShitZone {...this.props}></DropYourShitZone>} />
              </Switch>
            </NavBar>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // let auth = false;
  // if(state.token) {
  //   auth = true
  // }
  // else { auth = false }
  console.log(state.reducer.token)
  return {
    isAuthenticated: state.reducer.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(withTheme(App)));
