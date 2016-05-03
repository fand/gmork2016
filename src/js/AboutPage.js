import React from 'react';

class AboutPage extends React.Component {

  render () {
    return (
      <div className="AboutPage">
        <h2>About</h2>
        <dl>
          <dt>NAME</dt><dd>Takayosi Amagi / Jun Fan</dd>
          <dt>Attribute</dt><dd>Frontend engineeer</dd>
          <dt>Twitter</dt><dd><a href="//twitter.com/amagitakayosi">@amagitakayosi</a></dd>
          <dt>GitHub</dt><dd><a href="//github.com/fand">@fand</a></dd>
        </dl>
      </div>
    );
  }

}

export default AboutPage;