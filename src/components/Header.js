import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchAppSections,
  fetchMenuStatus,
  toggleMenuStatus,
  setMenuStatus
} from '../actions';

class Header extends React.Component{
  componentDidMount = () => {
    this.props.fetchAppSections();
    this.props.fetchMenuStatus();
  }

  onBurgerClick = (event) => {
    this.props.toggleMenuStatus();
  }

  closeMenu = () => {
    this.props.setMenuStatus(false);
  }

  renderBurger = () => {
    const menuIsActive = this.props.app.menu.isActive;
    if (this.props.appSections){
      return (
        <div role="button" aria-label="menu"
          className={`navbar-burger burger ${menuIsActive ? "is-active": ""}`}
          aria-expanded="false" data-target="navbarOptions"
          onClick={this.onBurgerClick}>
          {Object.keys(this.props.appSections).map(key => <span key={key} aria-hidden="true"></span>)}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }

  renderNavbarMenuLinks = () => {
    if (this.props.appSections) {
      const sections = this.props.appSections;
      return (
        Object.keys(sections).map(k => (
          <Link
            to={sections[k]["path"]}
            className="navbar-item"
            onClick={this.closeMenu}
            key={k}
          >
            <span className={`icon has-text-${sections[k]["color"]}`}>
              <i className={`fa fa-${sections[k]["icon"]}`}></i>
            </span>
            <span>{k}</span>
          </Link>
        ))
      )
    } else {
      return <div>Loading...</div>
    }
  }

  renderNavbarMenu = () => {
    const menuIsActive = this.props.app.menu.isActive;
    return (
      <div className={`navbar-menu ${menuIsActive ? "is-active": ""}`}>
        <div className="navbar-start">
          {this.renderNavbarMenuLinks()}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <span className="icon has-text-danger">
              <i className="fa fa-envelope-o"></i>
            </span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    )
  }

  renderNavbarBrand = () => {
    return (
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={require('../files/pbm_icon.png')} alt="logo"/>
        </Link>
        <div className="navbar-item">Ben Moser's Site</div>
        {this.renderBurger()}
      </div>
    )
  }

  render = () => {
    return (
      <nav className="navbar is-fixed-top has-shadow" id="navbar">
        <div className="container">
          {this.renderNavbarBrand()}
          {this.renderNavbarMenu()}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return ({
    appSections: state.appSections,
    app: state.app
  })
}

export default connect(
  mapStateToProps,
  {
    fetchAppSections,
    fetchMenuStatus,
    toggleMenuStatus,
    setMenuStatus
  }
)(withRouter(Header));
