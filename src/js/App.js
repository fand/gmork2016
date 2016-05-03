import React from 'react';
import { Link } from 'react-router';

const SECTIONS = [{
  name: 'Songs',
  items: [
  ],
}, {
  name: 'Codes',
  items: [
    { name: '監獄の外', href: 'http://www.nicovideo.jp/watch/sm17074703' },
    { name: '君は走ったことがあるかい', href: 'http://www.nicovideo.jp/watch/sm15446051' },
    { name: 'ゲルニカ', href: 'http://www.nicovideo.jp/watch/sm14528963' },
    { name: '水仙の風', href: 'http://www.nicovideo.jp/watch/sm14292989' },
  ],
}, {
  name: 'Slides',
  items: [
    { name: '監獄の外', href: 'http://www.nicovideo.jp/watch/sm17074703' },
    { name: '君は走ったことがあるかい', href: 'http://www.nicovideo.jp/watch/sm15446051' },
    { name: 'ゲルニカ', href: 'http://www.nicovideo.jp/watch/sm14528963' },
    { name: '水仙の風', href: 'http://www.nicovideo.jp/watch/sm14292989' },
  ],
}];

class Section extends React.Component {

  render () {
    const { section } = this.props;
    return (
      <div className="Section">
        <h2>{section.name}</h2>
        <ul>
          {section.items.map(i => <li><a href={i.href}>{i.name}</a></li>)}
        </ul>
      </div>
    );
  }

}

class App extends React.Component {

  render () {
    return (
      <div>
        <aside className="App__Sidebar">
          <Link to="/about">About</Link>
          <Link to="/songs">Songs</Link>
        </aside>
        <div className="App__Content">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default App;
