import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Footer from './pages/Footer';
import Websocket from './pages/Websocket'
import LoginPage from './pages/LogInPage';
import ContactPage from './pages/ContactUsPage';
import AboutPage from './pages/AboutUsPage';
import Router from '../src/Router'

const Home = () => <h2> the homepage </h2>
const NotFound = () => <h2>Error! 404</h2>

class App extends Component {
  render() {
    const {
      connected,
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
          <Footer />
        </div>
      )
    }

    return (
      <div className='App'>
        <Navigation />

        <Footer />
        <hr />
        <Router routes={{
          '/': Home,
          '/contact': ContactPage,
          '/about': AboutPage,
          '/websocket': Websocket,
          'error': NotFound,
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  connected: state.connection.connected,
  loggedOn: state.connection.name !== null,
})

export default connect(mapStateToProps)(App);
