import React from 'react';
import Helmet from 'react-helmet';

import Markdowner from './Markdowner';
// const APPS = Markdowner('Apps');
const APPS = Markdowner('Libs');

class AppsPage extends React.Component {

  render () {
    return (
      <div className="AppsPage">
        <Helmet title="Apps" meta={[{ property : 'og:type', content : 'article' }]}/>
        <div dangerouslySetInnerHTML={{ __html : APPS }}/>
      </div>
    );
  }

}

export default AppsPage;
