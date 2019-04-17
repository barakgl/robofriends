import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore }from 'redux';
import './index.css';
import App from './containers/App.js'; 
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>
     ,document.getElementById('root'));
serviceWorker.unregister();
