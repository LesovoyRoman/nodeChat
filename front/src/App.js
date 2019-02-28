import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

/**
 * Events
 */
import './helpers/events'

/**
 * Router
 */
import RouterApp from './router'

/**
 * Global Styles
 */
import './styles/modules.scss'

/**
 * Components
 */
import Navbar from './components/partials/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={ store }>
              <Router>
                  <>
                      <Navbar/>

                      <RouterApp/>
                  </>
              </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
