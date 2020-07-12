import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';

class Home extends React.Component {


  render(){
		return (
			<Fragment>
				<div className="container">
					<h1>Welcome</h1>
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