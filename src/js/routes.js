import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App         from './App';
import IndexPage   from './IndexPage';
import AboutPage   from './AboutPage';
import SongsPage   from './SongsPage';
import AppsPage    from './AppsPage';
import LibsPage    from './LibsPage';
import NoMatchPage from './NoMatchPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="songs" component={SongsPage}/>
      <Route path="apps" component={AppsPage}/>
      <Route path="libs" component={LibsPage}/>
      <Route path="*" component={NoMatchPage}/>
    </Route>
  </Router>
);
