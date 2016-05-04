import express from 'express';
import morgan  from 'morgan';

import React                    from 'react';
import { renderToString }       from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes                   from '../src/js/routes';

const app = express();
app.use(morgan('combined'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
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

    const initialComponent = renderToString(<RouterContext {...renderProps} />);
    res.render('index', { initialComponent });
  });
});

app.listen(3000);
