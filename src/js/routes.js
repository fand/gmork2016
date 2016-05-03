import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App         from './App';
import AboutPage   from './AboutPage';
import SongsPage   from './SongsPage';
import NoMatchPage from './NoMatchPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={AboutPage}/>
      <Route path="songs" component={SongsPage}/>
      <Route path="*" component={NoMatchPage}/>
    </Route>
  </Router>
);
