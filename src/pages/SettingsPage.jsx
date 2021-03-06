//React
import React from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import '../App.css';

//Components
import PostSettingsForm from '../components/PostSettingsForm';

//Redux
import { connect } from 'react-redux';

//Material Ui
import CircularProgress from '@material-ui/core/CircularProgress';

//Actions 
import * as actions from '../store/actions/index'

// Filestack
import * as filestack from 'filestack-js';
const client = filestack.init('AF4xbENiITyaZU5EGIVXgz');


class SettingsPage extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        password: '',
        file: [],
        filePreview: '',
        image: '',
    }

    //Computed property syntax
    handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [id]: value
        })
    }

    handlePost = (e) => {
        console.log(this.state.file)
        client.upload(this.state.file)
            .then(res => {
                console.log('success: ', res)
                this.setState({image: res.url})
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                this.props.post(this.state.first_name, this.state.last_name, this.state.phone_number, this.state.password, this.state.image, this.props.user.id, this.props.user.username);
                this.props.history.push('/');
            })
        }
    

    // React-dropzone
    onDrop = (acceptedFiles, preview) => {
        if (acceptedFiles && acceptedFiles.length > 0){
          this.setState({
            file: acceptedFiles[0],
            filePreview: preview
          })
        }
        console.log(this.state)
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
                        <React.Fragment>
                            
                            <PostSettingsForm
                                preview={ this.state.filePreview }
                                handleInputChange={ this.handleInputChange } 
                                handlePost={ this.handlePost }
                                onDrop={ this.onDrop }
                            />
                        </React.Fragment>
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
        error: state.reducer.error,
        user: state.reducer.user,
    }
  }

  const mapDispatchToProps = dispatch => {

    return {
        post: (first_name, last_name, phone_number, password, image, id, username) => dispatch(actions.updateProfile(first_name, last_name, phone_number, password, image, id, username)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingsPage))