import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/index';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as Yup from 'yup';

class Home extends React.Component {
  async loginUser(values){
    try {
      const user = await Auth.signIn(values.username, values.password);
      
      const currentSession = Auth.currentSession();
      const currentCredentials = Auth.currentCredentials();
      console.log(user, currentSession, currentCredentials)

    } catch (error) {
        console.log('error signing in', error);
    }
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

					onSubmit = {(values)=>{
						this.loginUser(values);
					}}

				>{(formik)=>(
						<div className="form-size">
							<form onSubmit={ formik.handleSubmit }>
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
						</div>
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