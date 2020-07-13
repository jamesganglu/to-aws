import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/index';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';

class Home extends React.Component {
	state={
		userName:'',
		password:''
	}

	onSubmitForm = (e) => {
		e.preventDefault();
		console.log(this.state);

		this.props.login(true);
	}

	onInputChange = (e) =>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}




  render(){
		return (
		<div className="container">
			<Formik
				initialValues= {
					{
						username:'',
						password:''
					}
        }
        
				validationSchema = {
					Yup.object({
						username:Yup.string().required('please input user name'),
						password:Yup.string().required('please enter password')
					})
				}
			>{(formik)=>(
						<form onSubmit={ this.onSubmitForm }>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<input
									ype="text" 
									className="form-control" 
									id="username" 
									{...formik.getFieldProps('username')}
								/>
								{formik.touched.username && formik.errors.username && (
									<div className="text-danger">{formik.errors.username}</div>
								)}
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input 
									type="password" 
									className="form-control" 
									id="password" 
									{...formik.getFieldProps('password')}
								/>
								{formik.touched.password && formik.errors.password && (
									<div className="text-danger">{formik.errors.password}</div>
								)}
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					
				)}
			</Formik>

			<p>Not a memeber, please <Link to="/register">join</Link>!</p>
		</div>
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
	login
}

export default connect(mapStateTopProps, mapDispatchToProps)(Home);