import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => <Link {...props} activeClassName="is-active"/>;

class Sidebar extends React.Component {

  render () {
    return (
      <aside className="Sidebar">
        <img src="/img/vertigo.png"/>
        <ul role="nav">
          <li><NavLink  to="/about">About</NavLink></li>
          <li><NavLink to="/songs">Songs</NavLink></li>
          <li><NavLink to="/apps">Apps</NavLink></li>
          <li><NavLink to="/libs">Codes</NavLink></li>
        </ul>
      </aside>
    );
  }

}

export default Sidebar;
