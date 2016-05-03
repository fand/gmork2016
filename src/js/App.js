import React from 'react';

const SECTIONS = [{
  name: 'Songs',
  items: [
    { name: '監獄の外', href: 'http://www.nicovideo.jp/watch/sm17074703' },
    { name: '君は走ったことがあるかい', href: 'http://www.nicovideo.jp/watch/sm15446051' },
    { name: 'ゲルニカ', href: 'http://www.nicovideo.jp/watch/sm14528963' },
    { name: '水仙の風', href: 'http://www.nicovideo.jp/watch/sm14292989' },
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
      <div className="App">
        {SECTIONS.map(s => <Section section={s} key={s.name}/>)}
      </div>
    );
  }

}

export default App;
