import React, { Fragment } from 'react'
import {connect} from 'react-redux';
import {getSelectedPost} from '../actions/index';

class Detail extends React.Component {

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.getSelectedPost(id);
  }
  
  buildPost(){
    if(this.props.post){
      return (
        <div className="post">
          <h1>{this.props.post.title}</h1>
          <div className="detail">
            {this.props.post.body}
          </div>
        </div>
      )

    }else{
      return (<p>there is no post</p>)
    }
  }

	render(){
		return (
			<Fragment>
				<div className="container">
					<div>
            {this.buildPost()}
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateTopProps = state => {
	return {
		post : state.resources.selectedPost,
	}
}
const mapDispatchToProps = {
	getSelectedPost
}

export default connect(mapStateTopProps, mapDispatchToProps)(Detail);