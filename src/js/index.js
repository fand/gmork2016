import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes   from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const initialState = window.__INITIAL_STATE__ || {};
const store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
