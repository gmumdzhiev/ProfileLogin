import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Footer from './pages/Footer';
import Websocket from './pages/Websocket'
import LoginPage from './pages/LogInPage';
import ContactPage from './pages/ContactUsPage';
import AboutPage from './pages/AboutUsPage';
import Router from './components/Router';
import Home from './pages/Homepage';
import Fade from './Fade';


const NotFound = () => <h2>Error! 404</h2>


const routes = {
  '/': Home,
  '/contact': ContactPage,
  '/about': AboutPage,
  '/websocket': Websocket,
  'error': NotFound,
}

class App extends Component {
  constructor() {
    super()
    this.state = { in: true }
  }

  componentDidMount() {
    const f = () => {
      this.setState({ in: false })
    }
    setTimeout(f, 2000)
  }

  render() {
    const {
      connected,
      location,
      oldlocation,
      loggedOn,

    } = this.props

    if (!connected) {
      return (
        <p>Websocket disconnected, please refresh the page.</p>
      )
    }

    if (!loggedOn) {
      return (
        <div>
          <LoginPage />
          <Fade in={this.state.in} />
          <Footer />
        </div>
      )
    }

    return (
      <div className='App'>
        <Navigation />

        <Footer />
        <hr />
        <Router location={oldlocation} routes={routes} />
        <Router location={location} routes={routes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  connected: state.connection.connected,
  loggedOn: state.connection.name !== null,
  location: state.router.location,
  previousLocation: state.router.location,
})

export default connect(mapStateToProps)(App);
