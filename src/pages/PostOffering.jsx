//React
import React from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import '../App.css';

//Components
import PostOffering from '../components/PostOfferingForm';

//Material Ui
import CircularProgress from '@material-ui/core/CircularProgress';

//Actions 
import * as actions from '../store/actions/index';

//Redux
import { connect } from 'react-redux';

// React DropZone
// import DropShit from '../components/DropShit';

// Filestack
import * as filestack from 'filestack-js';
const client = filestack.init('AF4xbENiITyaZU5EGIVXgz');


class PostOfferingPage extends React.Component {
    state = {
        title: '',
        address: '',
        description: '',
        file: [],
        image: '',
    }

    //Computed property syntax
    handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        console.log(this.state)
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
                this.props.post(this.state.title, this.state.address, this.state.description, this.state.image, this.props.user.id,)
                this.props.history.push('/');
            })
    }

    // React-dropzone
    onDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0){
          this.setState({
            file: acceptedFiles[0],
            console
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
                            
                            <PostOffering
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
        post: (title, address, description, image, id) => dispatch(actions.PostOffering(title, address, description, image, id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostOfferingPage))