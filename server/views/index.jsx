import React from 'react';

class Index extends React.Component {

  static get propTypes () {
    return {
      title    : React.PropTypes.string,
      children : React.PropTypes.node,
    };
  }

  render () {
    return (
      <html lang="ja" amp>
        <head>
          <meta charSet="utf-8"/>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta itemProp="name" content="グモルク"/>
          <meta itemProp="image" content="http://cdn.mogile.archive.st-hatena.com/v1/image/amagitakayosi/302452276901284719.png"/>
          <meta property="og:title" content="グモルク"/>
          <meta property="og:type" content="blog"/>
          <meta property="og:url" content="http://gmork.in/"/>
          <meta property="og:image" content="http://gmork.in/static/image/og_image.png"/>
          <meta property="og:description" content="グモルク"/>
          <meta property="og:site_name" content="http://gmork.in/"/>
          <link rel="canonical" href="http://gmork.in/"/>
          <link rel="stylesheet" href="/public/css/index.css" />
        </head>
        <body>
          <div id="app">{this.props.children}</div>
          <script src="/public/js/index.js"></script>
        </body>
      </html>
    );
  }

}

export default Index;
