import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {

  render () {
    return (
      <aside className="Sidebar">
        <img src="/img/vertigo.png"/>
        <Link to="/about">About</Link>
        <Link to="/songs">Songs</Link>
      </aside>
    );
  }

}

export default Sidebar;
