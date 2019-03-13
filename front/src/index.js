import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as APP_CONSTS from './config'
import * as serviceWorker from './serviceWorker';

/**
 * Remove console.log & console.error on production
 */
if(APP_CONSTS.APP_ENV === APP_CONSTS.PROD_ENV) {
    console.error = () => {};
    console.log = () => {};
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
