import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {

  render () {
    return (
      <aside className="Sidebar">
        <img src="/img/vertigo.png"/>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/songs">Songs</Link></li>
        </ul>
      </aside>
    );
  }

}

export default Sidebar;
