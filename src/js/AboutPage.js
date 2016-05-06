import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class AboutPage extends React.Component {

  render () {
    return (
      <div className="AboutPage">
        <Helmet title="About" meta={[{ property : 'og:type', content : 'article' }]}/>
        <div dangerouslySetInnerHTML={{ __html : this.props.markdown.About }}/>
      </div>
    );
  }

}

export default connect((state) => (state))(AboutPage);
