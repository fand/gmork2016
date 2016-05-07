import React from 'react';
import Sidebar from './Sidebar';
import _ from 'lodash';

class App extends React.Component {

  static get propTypes () {
    return {
      children : React.PropTypes.node,
    };
  }

  render () {
    const imgStyle = {
      position : 'fixed',
      left     : `${Math.random() * 100 - 20}%`,
      top      : `${Math.random() * 100 - 20}%`,
      opacity  : 0.8,
      zIndex   : -1,
    };
    const imgSrc = `/static/image/logo_0${_.random(1, 8)}.png`;

    return (
      <div className="App">
        <Sidebar/>
        <div className="App__Content">
          {this.props.children}
        </div>
        <img src={imgSrc} style={imgStyle}/>
      </div>
    );
  }

}

export default App;
