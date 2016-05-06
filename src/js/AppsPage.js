import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class AppsPage extends React.Component {

  render () {
    return (
      <div className="AppsPage">
        <Helmet title="Apps" meta={[{ property : 'og:type', content : 'article' }]}/>
        <div dangerouslySetInnerHTML={{ __html : this.props.markdown.Apps }}/>
      </div>
    );
  }

}

export default connect((state) => (state))(AppsPage);
