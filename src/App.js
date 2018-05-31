import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import RegForm from './RegForm';

class App extends Component {
  render() {
    if (!this.props.isLoggedOn) {
      return <LoginForm />
    }
    return (
      <div className='App'>
        <RegForm />
      </div>
    )
  }
}



const mapStateToProps = (state) => ({

  isLoggedOn: state.user.isLoggedOn,
})



export default connect(mapStateToProps)(App);
