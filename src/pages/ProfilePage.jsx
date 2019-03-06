import React, { Component } from 'react';
import '../App.css';
import ProfileForm from '../components/ProfileForm'

class ProfilePage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <ProfileForm />
            </React.Fragment>
        )
    }
}

export default ProfilePage