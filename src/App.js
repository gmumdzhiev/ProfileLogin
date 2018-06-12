import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Footer from './pages/Footer';
import Websocket from './pages/Websocket'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
//import About from './pages/AboutUsPage';



const Home = () => <h2> the homepage </h2>
const Contact = () => <h2> the contacpage </h2>
const About = () => <h2> this is the about page</h2>

const NotFound = () => <h2>Error! 404</h2>


const routingTable = {
  '/': <Home />,
  '/contact': <Contact />,
  '/about': <About />,
  '/login': <LoginPage />,
  '/register': <RegisterPage />,
  '/websocket': <Websocket />
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
          <Navigation />
          <Footer />
          <h1> Welcome to our page </h1>
          {page}

          <hr />


        </div >
      )
    }
    return (
      < div className='App' >
        <Navigation />
        <Footer />

        <hr />
        {page}

      </div >
    )
  }
}



const mapStateToProps = (state) => ({
  location: state.router.pathname,
  isLoggedOn: state.isLoggedOn,
})



export default connect(mapStateToProps)(App);
