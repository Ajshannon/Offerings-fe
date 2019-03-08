//React
import React from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import '../App.css';

//Components
import SignupForm from '../components/SignupForm';

//Material Ui
import CircularProgress from '@material-ui/core/CircularProgress';

//Actions 
import * as actions from '../store/actions/index';

//Redux
import { connect } from 'react-redux';

class SignupPage extends React.Component {
    state = {
        username: '',
        password1: '',
        password2: '',
        first_name: '',
        last_name: '',
        email: '',
    }

    //Computed property syntax 
    handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [id]: value
        })
    }

    handleSignup = (e) => {

        this.props.signUp(this.state.username, this.state.password1, this.state.password2, this.state.first_name, this.state.last_name, this.state.email)
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
                <div>
                    {errorMessage}
                    {
                        this.props.loading ?
                        
                        <CircularProgress />
                        :
                        <SignupForm 
                            handleInputChange={ this.handleInputChange } 
                            handleSignup={ this.handleSignup }
                        />
                    }
                </div>
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
        signUp: (username, password1, password2, first_name, last_name, email) => dispatch(actions.authSignup(username, password1, password2, first_name, last_name, email)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupPage))