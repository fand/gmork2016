import React from 'react';
import Helmet from 'react-helmet';

class IndexPage extends React.Component {

  render () {
    return (
      <div className="IndexPage">
        <Helmet title="Gmork.in"/>
        <img src="/static/image/logo.png"/>
      </div>
    );
  }

}

export default IndexPage;
