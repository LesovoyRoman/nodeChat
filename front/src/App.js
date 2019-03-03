import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import { setUserName } from './actions/user'
import ConnectSocketMessanger from './components/chat/ConnectSocketMessanger'


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

    /**
     * Set user name
     */
    componentDidMount() {
        let userName = prompt('Type your name');
        (async () => {
            store.dispatch(setUserName(userName))
        })();
    }

  render() {
    return (
      <div className="App">
          <Provider store={ store }>
              <Router>
                  <>
                      <ConnectSocketMessanger/>
                      <Navbar/>

                      <div className="content">
                          <RouterApp/>
                      </div>
                  </>
              </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
