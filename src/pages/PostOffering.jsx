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
        this.setState({
            [id]: value
        })
    }

    handlePost = (e) => {

        this.props.post(this.state.title, this.state.address, this.state.description)
        this.props.history.push('/');
    }

    // React-dropzone
    onDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0){
          this.setState({
            file: acceptedFiles[0],
            image: acceptedFiles[0]["preview"]
          })
        }
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
        post: (title, address, description, image, user) => dispatch(actions.PostOffering(title, address, description, image, user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostOfferingPage))