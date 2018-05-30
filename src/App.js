import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import RegForm from './RegForm';

class App extends Component {
  render() {
    const {
      isLoggedOn,
      username,
    } = this.props
    if (isLoggedOn) {
      return (
        <div className="App">
          Hello {username}
        </div>
      );
    } else {
      return (
        <LoginForm />
      )
    }
  }
}
const mapStateToProps = (state) => ({
  username: state.user.username,
  isLoggedOn: state.user.isLoggedOn,
})
export default connect(mapStateToProps)(App);