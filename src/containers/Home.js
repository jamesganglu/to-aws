import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getPosts} from '../actions/index';

class Home extends React.Component {


  render(){
		return (
			<Fragment>
				<div className="container">
					<h1>Welcome to Ah Gang's prototype site</h1>
					<p>this site is for <strong>Amazon Web Services</strong> practise purpose, it was build with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJs</a> and its ecosystem dependencies:</p>
					<ul>
						<li><a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios</a> to handle rest api</li>
						<li><a href="https://formik.org/" target="_blank" rel="noopener noreferrer">formik</a> to do handle form issues</li>
						<li><a href="https://github.com/jquense/yup" target="_blank" rel="noopener noreferrer">yup</a> to do the form validation</li>
						<li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">redux</a> to manage app's states</li>
						<li><a href="https://github.com/reduxjs/redux-thunk" target="_blank" rel="noopener noreferrer">redux-thunk</a> to middleware the async issue</li>
						<li><a href="https://github.com/ReactTraining/react-router" target="_blank" rel="noopener noreferrer">react-router-dom</a> to route page by page</li>
					</ul>
					<p>and some bootstrap to makeup a bit.</p>
					
					<p>If you have account, please <Link to='/login'>login</Link>, or <Link to='/register'>regist</Link> an account</p>
				</div>
			</Fragment>
		)
	}

}

const mapStateTopProps = state => {
	return {
		posts : state.resources.posts,
		message:state.auth
	}
}
const mapDispatchToProps = {
	getPosts
}

export default connect(mapStateTopProps, mapDispatchToProps)(Home);