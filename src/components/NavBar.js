import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import {toggleLogin} from '../actions/index';
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <span className="navbar-brand" href="#">boilderplate</span>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"> 
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">post list</Link>
              </li>
            </ul>

            <Link to="/login" className="nav-link btn btn-primary">login</Link>
          </div>
        </div>
      </nav>
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