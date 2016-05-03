import React from 'react';
import Sidebar from './Sidebar';

class App extends React.Component {

  static get propTypes () {
    return {
      children : React.PropTypes.node,
    };
  }

  render () {
    return (
      <div className="App">
        <Sidebar/>
        <div className="App__Content">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default App;
