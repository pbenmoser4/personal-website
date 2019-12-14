import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component{
  onButtonClick = () => {

  }

  render = () => {
    const pathname = this.props.location.pathname

    return (
      <div className="header header-fixed unselectable header-animated">

        <div className="header-brand">
          <div className="nav-item no-hover">
            <h6 className="title">PBM</h6>
          </div>
        </div>

        <div className="header-nav" id="header-menu">
          <div className="nav-left">
            <div className="nav-item text-center toggle-hover">
              <Link to="/"
                className={`item ${pathname === '/' ? 'active': ''}`}
              >
                Home
              </Link>
            </div>
            <div className="nav-item text-center toggle-hover">
              <Link to="/resume"
                className={`item ${pathname === '/resume' ? 'active': ''}`}
              >
                Resume
              </Link>
            </div>
            <div className="nav-item text-center toggle-hover">
              <Link to="/personal"
                className={`item ${pathname === '/personal' ? 'active': ''}`}
              >
                Personal
              </Link>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-item text-center toggle-hover">
              Contact
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
