import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';




const Home = () => <p> the homepage </p>
const Contact = () => <p> the contacpage </p>
const About = () => <p> this is the about page</p>
const NotFound = () => <p>Error! 404</p>


const routingTable = {
  '/': <Home />,
  '/contact': <Contact />,
  '/about': <About />,
  '/RegisterForm': <RegisterForm />,
  '/LoginForm': <LoginForm />

}




class App extends Component {
  render() {
    const {
      location,
    } = this.props

    let page
    const route = routingTable[location]
    if (!route) {
      page = <NotFound />
    } else {
      page = route
    }



    if (!this.props.isLoggedOn) {
      return (
        <div>
          <style>
            @import url('https://fonts.googleapis.com/css?family=Sunflower:300');
</style>
          <Navigation />



          <h1> Welcome to our page </h1>
          {page}

          <hr />

        </div >
      )
    }
    return (
      < div className='App' >
        <Navigation />


        <hr />
        {page}


      </div >
    )
  }
}



const mapStateToProps = (state) => ({
  location: state.router.pathname,
  isLoggedOn: state.user.isLoggedOn,
})



export default connect(mapStateToProps)(App);
