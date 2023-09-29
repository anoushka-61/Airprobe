import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store.js'; // Import your Redux store

ReactDOM.render(
  <Router>
    <Provider store={store}> {/* Wrap your App with Provider */}
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

