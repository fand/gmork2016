import React from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';

class SongsPage extends React.Component {

  render () {
    return (
      <div className="SongsPage">
        <Helmet title="Songs" meta={[{ property : 'og:type', content : 'article' }]}/>
        <div dangerouslySetInnerHTML={{ __html : this.props.markdown.Songs }}/>
      </div>
    );
  }

}

export default connect((state) => (state))(SongsPage);
