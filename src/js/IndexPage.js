import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';

const WORDS = 'Yes No True False Fake Nothing Evil Innocent'.split(' ');

class IndexPage extends React.Component {

  render () {
    const space = (x) => _.repeat('&nbsp;', Math.floor((1 - Math.random() ** 3) * x));
    const body = space(50) + _.range(10).map(() =>
    _.sample(WORDS) + '.' + space(2000)
    ).join('');

    return (
      <div className="IndexPage">
        <Helmet title="Gmork.in"/>
        <div dangerouslySetInnerHTML={{ __html : body }} style={{ wordBreak : 'break-word' }}/>
      </div>
    );
  }

}

export default IndexPage;
