import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {toggleLogin} from '../actions/index';
class Navbar extends Component {
   body = document.querySelector('body');
   menuButton;

  toggleMenu=()=>{
    if(this.body.classList.contains('menu-shown')){
      this.closeMenu();
    }else{
      this.openMenu()
    }
  }

  closeMenu = () => {
      this.body.classList.remove('menu-shown');
      this.menuButton.setAttribute('aria-expanded',false);
  }

  openMenu = () => {
      this.body.classList +=' menu-shown';
      this.menuButton.setAttribute('aria-expanded',true);
  }

  componentDidMount(){
    this.menuButton = document.querySelector('#primary-nav-menu');
  }

  render() {
    console.log(this.menuButton)
    return (
      <>
        <nav className="primary-nav">
          <div className="container">
            <div className="top-bar">
              <div className="site-name"><span>AWS Practise</span></div>
              <div className="nav-links">
                <ul>
                  <li className="nav-item"> 
                    <NavLink to="/" activeClassName="current" onClick={()=>this.closeMenu()}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/posts" activeClassName="current" onClick={()=>this.closeMenu()}>post list</NavLink>
                  </li>
                </ul>
              </div>

              <div className="infos">
                <NavLink to="/login">login</NavLink> <span className="greeting">Hello, James</span>
                <button id="primary-nav-menu" aria-expanded="false" onClick={()=>this.toggleMenu()}>
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user:state.auth
  }
}

const mapDispatchToProps = {
  toggleLogin
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);