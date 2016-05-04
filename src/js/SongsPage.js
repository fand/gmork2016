import React from 'react';
import Helmet from 'react-helmet';

const SONGS = [
  {
    title       : '監獄の外',
    nicovideo   : 'http://www.nicovideo.jp/watch/sm17074703',
    youtube     : 'https://www.youtube.com/watch?v=IYAVSmpKp5Y',
    thumb       : '',
    description : '',
  },
  {
    title       : '君は走ったことがあるかい',
    nicovideo   : 'http://www.nicovideo.jp/watch/sm15446051',
    youtube     : 'https://www.youtube.com/watch?v=KpKopRiNQS4',
    thumb       : '',
    description : '',
  },
  {
    title       : 'ゲルニカ',
    nicovideo   : 'http://www.nicovideo.jp/watch/sm14528963',
    youtube     : 'https://www.youtube.com/watch?v=eqf8mese2sU',
    thumb       : '',
    description : '',
  },
  {
    title       : '水仙の風',
    nicovideo   : 'http://www.nicovideo.jp/watch/sm14292989',
    youtube     : 'https://www.youtube.com/watch?v=QGO_9XKILRI',
    thumb       : '',
    description : '',
  },
];

class Song extends React.Component {

  render () {
    const { song } = this.props;
    return (
      <div className="Song">
        <h3 className="Song__Title">{song.title}</h3>
        <a className="Song__Thumb" href={song.nicovideo}><img alt={song.name} src={song.thumb}/></a>
        <a className="Song__Link" href={song.nicovideo}>Youtube</a>
        <a className="Song__Link" href={song.youtube}>Nicovideo</a>
        <p className="Song__Description">{song.description}</p>
      </div>
    );
  }

}

class SongsPage extends React.Component {

  render () {
    return (
      <div className="SongsPage">
        <Helmet title="Songs" meta={[{ property : 'og:type', content : 'article' }]}/>
        <h2>songs</h2>
        <ul>
          {SONGS.map(s => <Song song={s} key={s.title}/>)}
        </ul>
      </div>
    );
  }

}

export default SongsPage;
