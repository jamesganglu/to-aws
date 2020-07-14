import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import {login} from '../actions/index';
import { Fragment } from 'react';

class Navbar extends Component {
   body;
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

  async logout(){
    try {
      await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  componentDidMount(){
    this.body = document.querySelector('body');
    this.menuButton = document.querySelector('#primary-nav-menu');
  }

  render() {
    return (
      <Fragment>
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
               
                {!this.props.user.isLoing && (<NavLink to="/login">login</NavLink>)}
                {this.props.user.isLoing && (
                  <>
                    <span className="greeting">Hello, James</span>
                    <button className="btn btn-primary" onClick={()=>this.logout()}>Logout</button>
                  </>
                )}

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
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user:state.auth
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);