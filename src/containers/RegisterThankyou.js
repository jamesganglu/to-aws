import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { Formik } from 'formik';
import { Auth } from 'aws-amplify';
import * as Yup from 'yup';

class RegisterThankyou extends React.Component {
  state = {
    formMessage:''
  }

	async verifyUser(values){
    try {
      await Auth.confirmSignUp(values.username, values.code);
      this.props.history.push('/login');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  
  render(){
    return (
      <Fragment>
        <div className="container">
          <h1>Here we go, {this.props.username}</h1>
          <p>Will send you an email to confirm the register finish</p>
          <div>
            <Formik
              initialValues= {
                {
                  username:'',
                  code:''
                }
              }

              validationSchema = {
                Yup.object({
                  username:Yup.string().required('please input user name'),
                  code:Yup.string().required('please enter the verify code')
                })
              }
              onSubmit = {(values)=>{
              this.verifyUser(values);
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
                      <label htmlFor="code">code</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="code" 
                        {...formik.getFieldProps('code')}
                      />
                      {formik.touched.code && formik.errors.code && (
                        <div className="text-danger">{formik.errors.code}</div>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              )}
            </Formik>

          </div>
        </div>
      </Fragment>
    )
  }ß

}

const mapStateTopProps = state => {
	return {
		username:state.auth.user.username
	}
}
const mapDispatchToProps = {
}

export default connect(mapStateTopProps, mapDispatchToProps)(RegisterThankyou);