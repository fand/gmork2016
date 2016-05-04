import React from 'react';
import Helmet from 'react-helmet';

const APPS = [
  {
    title       : 'aozora',
    href        : '',
    blog        : '',
    description : '',
  },
  {
    title       : 'aviglitch',
    href        : '',
    blog        : '',
    description : '',
  },
  {
    title       : 'eventemitter-decorator',
    href        : '',
    blog        : '',
    description : '',
  },
  {
    title       : '@fand/irasutorya',
    href        : '',
    blog        : '',
    thumb       : '',
    description : '',
  },
  {
    title       : '木魚クリッカー',
    href        : 'http://gmork.in/mokugyo/',
    blog        : '',
    thumb       : '',
    description : '',
  },
  {
    title       : 'evil',
    href        : 'http://evil.gmork.in/',
    blog        : '',
    thumb       : '',
    description : '',
  },
  {
    title       : 'RVD',
    href        : 'http://gmork.in/rvd/',
    blog        : '',
    thumb       : '',
    description : '',
  },
  {
    title       : 'Cyro',
    href        : 'http://gmork.in/cyro/',
    blog        : 'http://amagitakayosi.hatenablog.com/entry/2015/10/13/080000',
    thumb       : '',
    description : '',
  },
  {
    title       : 'GuitarBreaks',
    href        : 'http://gmork.in/guitarbreaks',
    blog        : 'http://amagitakayosi.hatenablog.com/entry/2015/12/29/215009',
    thumb       : '',
    description : '',
  },
];

class App extends React.Component {

  render () {
    const { app } = this.props;
    return (
      <div className="App">
        <h3 className="App__Title">{app.title}</h3>
        <a className="App__Thumb" href={app.href}><img alt={app.title} src={app.thumb}/></a>
        <a className="App__Link" href={app.href}>{app.href}</a>
        <a className="App__Link" href={app.blog}>解説</a>
        <p className="App__Description">{app.description}</p>
      </div>
    );
  }

}

class AppsPage extends React.Component {

  render () {
    return (
      <div className="AppsPage">
        <Helmet title="Apps" meta={[{ property : 'og:type', content : 'article' }]}/>
        <h2>Apps</h2>
        <ul>
          {APPS.map(a => <App app={a} key={a.title}/>)}
        </ul>
      </div>
    );
  }

}

export default LibsPage;
