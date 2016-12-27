import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';

const WORDS = 'Yes No True False Fake Nothing Evil Innocent'.split(' ');

class IndexPage extends React.Component {

  render () {
    const body = _.sample(WORDS);
    return (
      <div className="IndexPage">
        <Helmet title="Gmork.in"/>
        <div dangerouslySetInnerHTML={{ __html : body }} style={{ wordBreak : 'break-word' }}/>
      </div>
    );
  }

}

export default IndexPage;
