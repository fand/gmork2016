import React from 'react';
import Helmet from 'react-helmet';

class AboutPage extends React.Component {

  render () {
    return (
      <div className="AboutPage">
        <Helmet title="About" meta={[{ property : 'og:type', content : 'article' }]}/>
        <h2>About</h2>
        <dl>
          <dt>NAME</dt><dd>Takayosi Amagi / Jun Fan</dd>
          <dt>Attribute</dt><dd>Frontend engineeer</dd>
          <dt>Twitter</dt><dd><a href="//twitter.com/amagitakayosi">@amagitakayosi</a></dd>
          <dt>GitHub</dt><dd><a href="//github.com/fand">@fand</a></dd>
          <dt>Blog</dt><dd><a href="//amagitakayosi.hatenablog.com/">マルシテイア</a></dd>
        </dl>
      </div>
    );
  }

}

export default AboutPage;
