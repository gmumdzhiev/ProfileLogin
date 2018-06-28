import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Footer from './pages/Footer';
import Websocket from './pages/Websocket'
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactUsPage';
import AboutPage from './pages/AboutUsPage'

const Home = () => <h2> the homepage </h2>
const NotFound = () => <h2>Error! 404</h2>

const routingTable = {
  '/': <Home />,
  '/contact': <ContactPage />,
  '/about': <AboutPage />,
  '/login': <LoginPage />,
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
        <Websocket />
        <hr />
        {page}

      </div >
    )
  }
}



const mapStateToProps = (state) => ({
  location: state.router.pathname,
  //isLoggedOn: state.isLoggedOn,
})



export default connect(mapStateToProps)(App);
