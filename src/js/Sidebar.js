import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => <Link {...props} activeClassName="is-active"/>;

class Sidebar extends React.Component {

  render () {
    return (
      <aside className="Sidebar">
        <Link to="/">
          <img src="/static/image/vertigo.png"/>
          <div className="Sidebar__Header">Gmork.in</div>
        </Link>
        <ul role="nav">
          <li><NavLink  to="/about">About</NavLink></li>
          <li><NavLink to="/apps">Works</NavLink></li>
          <li><NavLink to="/libs">Codes</NavLink></li>
          <li><NavLink to="/songs">Songs</NavLink></li>
          <li><a href="http://amagitakayosi.hatenablog.com/">Blog</a></li>
        </ul>
      </aside>
    );
  }

}

export default Sidebar;
