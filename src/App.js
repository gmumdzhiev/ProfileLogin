import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
/*import LoginForm from './LoginForm';*/
/*import RegForm from './RegForm';*/

class App extends Component {
  render() {


    <div className='App'>
      <LoginForm />
      <RegForm />
    </div>
      );
  } /*else {
      return (
         <LoginForm />
      )*/
}
}
//}
/*const mapStateToProps = (state) => ({
  username: state.user.username,
  isLoggedOn: state.user.isLoggedOn,
})*/




export default connect(/*mapStateToProps*/)(App);
