import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

class Home extends React.Component {
	
	/* onInputChange = (e) =>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}  */
  render(){
		return (
			<Fragment>
				<div className="container">
					<Formik
						initialValues={{
							username:'',
							email:'',
							password:'',
							repassword:''
						}}

						validationSchema = {
							Yup.object({
								username:Yup.string()
									.max(15, 'user name can not excce 15 characters')
									.min(6, 'user name can not least 6 characters')
									.required('user name is required'),
								email: Yup.string()
									.email('Invalid email address')
									.required('Required'),
								password:Yup.string()
									.min(8, 'password can not least then 6 characters')
									.required('password is required')
									.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
								repassword: Yup.string()
									.required('please re-type the password')
									.oneOf([Yup.ref('password')], 'password not match'),
							})
						}

						onSubmit = {(values)=>{
							setTimeout(()=>{console.log(values)},400)
						}}
					>
						{(formik)=>(
							<form onSubmit={ formik.handleSubmit }>
								<div className="form-group">
									<label htmlFor="username">User Name</label>
									<input
										type="text" 
										className="form-control" 
										id="username"
										{...formik.getFieldProps('username')}
									/>
									{formik.touched.username && formik.errors.username && (
										<div className="text-danger">{formik.errors.username}</div>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="email">Email address</label>
									<input
										type="text" 
										className="form-control" 
										id="email" 

										{...formik.getFieldProps('email')}
									/>
									{formik.touched.email && formik.errors.email && (
										<div className="text-danger">{formik.errors.email}</div>
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
								<div className="form-group">
									<label htmlFor="repassword">Re-enter Password</label>
									<input 
										type="password" 
										className="form-control" 
										id="repassword" 
										{...formik.getFieldProps('repassword')}
									/>
									{formik.touched.repassword && formik.errors.repassword && (
										<div className="text-danger">{formik.errors.repassword}</div>
									)}
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						)}
					</Formik>
				</div>
			</Fragment>
		)
	}

}

const mapStateTopProps = state => {
	return {
		message:state.auth
	}
}
const mapDispatchToProps = {
}

export default connect(mapStateTopProps, mapDispatchToProps)(Home);