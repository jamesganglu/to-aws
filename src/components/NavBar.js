import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {toggleLogin} from '../actions/index';
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="primary-nav">
          <div className="container">
            <div className="top-bar">
              <div className="site-name"><span>AWS Practise</span></div>
              <ul className="nav-links">
                <li className="nav-item"> 
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts">post list</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </ul>
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