import React, {PureComponent} from 'react'
import {Field, reduxForm} from 'redux-form'
import {login} from './store/user'
import TextField from './TextField'

class LoginForm extends PureComponent {
  render(){
    const{
      handleSubmit,
      invalid,
    }=this.props
    return (
      <form onSubmit = {handleSubmit}>
      <Field 
      name = "username"
      component = {TextField}
      title = "Username"
      description ="Please fill out your username"/>
      
      <button disabled={invalid} type="submit">
      Login
      </button>
      </form>
    )
  }
}

const onSubmit = (values,dispatch) =>{
  dispatch(login(values.username))
}

const validate = (values)=>{
  const errors = {}
  if(!values.username){
    errors.username = 'Please fill the empty field.'
  }
  return errors
}
export default reduxForm({
  form:'login',
  onSubmit,
  validate,
})(LoginForm)