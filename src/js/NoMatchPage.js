import React from 'react';
import Helmet from 'react-helmet';

class NoMatchPage extends React.Component {

  render () {
    return (
      <div className="NoMatchPage">
        <Helmet title="Songs" meta={[{ property : 'og:type', content : 'article' }]}/>
        <h1>404</h1>
      </div>
    );
  }

}

export default NoMatchPage;
