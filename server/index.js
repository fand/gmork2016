import express from 'express';
import morgan  from 'morgan';
import path    from 'path';
import { renderFile } from 'ejs';

import React                    from 'react';
import { renderToString }       from 'react-dom/server';
import { createStore }          from 'redux';
import { Provider }             from 'react-redux';
import { match, RouterContext } from 'react-router';
import routes                   from '../src/js/routes';
import reducers                 from '../src/js/reducers';

const app = express();
app.use(morgan('combined'));
app.engine('ejs', renderFile);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/*', (req, res) => {
  match({ routes, location : req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
      return;
    }
    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    const store = createStore(reducers);
    const initialState = JSON.stringify(store.getState());

    const initialComponent = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    res.render('index', { initialComponent, initialState });
  });
});

app.listen(process.env.GMORK_PORT);
