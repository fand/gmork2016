import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App         from './App';
import AboutPage   from './AboutPage';
import SongsPage   from './SongsPage';
import NoMatchPage from './NoMatchPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={AboutPage}/>
      <Route path="songs" component={SongsPage}/>
      <Route path="*" component={NoMatchPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
