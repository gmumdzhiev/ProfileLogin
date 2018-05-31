import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

class App extends Component {
  render() {
    if (!this.props.isLoggedOn) {
      return <LoginForm />
    }
    return (
      <div className='App'>
        <ProfileForm />
      </div>
    )
  }
}



const mapStateToProps = (state) => ({

  isLoggedOn: state.user.isLoggedOn,
})



export default connect(mapStateToProps)(App);
