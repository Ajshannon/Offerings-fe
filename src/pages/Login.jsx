//React
import React from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import '../App.css';

//Components
import LoginCard from '../components/LoginCard'

//Redux
import { connect } from 'react-redux';

//Material Ui
import CircularProgress from '@material-ui/core/CircularProgress';

//Actions 
import * as actions from '../store/actions/index'


class LoginPage extends React.Component {

    state = {
        username: '',
        password: '',
        csrfToken: this.props.allCookies.csrftoken ? this.props.allCookies.csrftoken : ''
    }

    //Computed property syntax 
    handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [id]: value
        })
    }

    handleLogin = (e) => {

        this.props.onAuth(this.state.username, this.state.password, this.state.csrfToken)
        this.props.history.push('/');
    }

    render () {
        
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        return (
            <React.Fragment>
                {errorMessage}
                {
                    this.props.loading ?
                    
                    <CircularProgress />
                    :
                    <LoginCard
                        handleInputChange={ this.handleInputChange } 
                        handleLogin={ this.handleLogin }
                    />
                }
             </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        token: state.reducer.token,
        loading: state.reducer.loading,
        error: state.reducer.error
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAuth: (username, password, csrfToken) => dispatch(actions.authLogin(username, password, csrfToken))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
