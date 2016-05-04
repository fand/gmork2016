import React from 'react';
import Helmet from 'react-helmet';

import Markdowner from './Markdowner';
// const SONGS = Markdowner('Songs');
const SONGS = Markdowner('Libs');

class SongsPage extends React.Component {

  render () {
    return (
      <div className="SongsPage">
        <Helmet title="Songs" meta={[{ property : 'og:type', content : 'article' }]}/>
        <div dangerouslySetInnerHTML={{ __html : SONGS }}/>
      </div>
    );
  }

}

export default SongsPage;
