import React from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';

class LibsPage extends React.Component {

  render () {
    return (
      <div className="LibsPage">
        <Helmet title="Products" meta={[{ property : 'og:type', content : 'article' }]}/>
        <div dangerouslySetInnerHTML={{ __html : this.props.markdown.Libs }}/>
      </div>
    );
  }

}

export default connect((state) => (state))(LibsPage);
