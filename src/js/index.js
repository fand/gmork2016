import React    from 'react';
import ReactDOM from 'react-dom';
import routes   from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const initialState = window.__INITIAL_STATE__ || {};
const store = createStore(reducers, initialState);

ReactDOM.render(<Provider store={store}><div>{routes}</div></Provider>, document.getElementById('app'));
