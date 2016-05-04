import React from 'react';
import Helmet from 'react-helmet';

import Markdowner from './Markdowner';
const LIBS = Markdowner('Libs');

class LibsPage extends React.Component {

  render () {
    return (
      <div className="LibsPage">
        <Helmet title="Products" meta={[{ property : 'og:type', content : 'article' }]}/>
        <div dangerouslySetInnerHTML={{ __html : LIBS }}/>
      </div>
    );
  }

}

export default LibsPage;
