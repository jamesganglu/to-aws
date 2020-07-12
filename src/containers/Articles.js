import React, { Fragment } from 'react'
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';
import { resources } from '../config';

class List extends React.Component {


	componentDidMount(){
		this.props.getPosts();
	}

	gotoPost = (id,e) => {
		e.preventDefault();
		this.props.history.push({
			pathname:`/post/${id}`
		});
	}

	buildPostList(){
		const lis = this.props.posts && this.props.posts.map(post=>{
			return (
				<li key={post.id}>
					<a href={resources.POST_URL+'/'+post.id} onClick={(e)=>this.gotoPost(post.id,e)}>{post.title}</a>
				</li>
			)
		})

		return this.props.posts && (
			<ul>
				{lis}
			</ul>
		)
	}

	render(){
	  return (
			<Fragment>
				<div className="container">
					<div>
						<h1>Post list</h1>
						{this.buildPostList()}
					</div>
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

export default connect(mapStateTopProps, mapDispatchToProps)(List);