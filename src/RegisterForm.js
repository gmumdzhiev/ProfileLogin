import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { register } from './store/user'
import TextField from './TextField'

class RegisterForm extends PureComponent {
  render() {
    const {
      handleSubmit,
      invalid,
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <h1> REGISTER </h1>
        <Field
          name="username"
          component={TextField}
          title="Username"
          description="Please fill out your username" />

        <Field
          name="password"
          component={TextField}
          type="password"
          title="Password"
          description="Please fill out your password" />



        <button disabled={invalid} type="submit">
          Register
      </button>
      </form>
    )
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(register(values.username))
}

const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Please fill the empty field.'
  }
  return errors
}
export default reduxForm({
  form: 'register',
  onSubmit,
  validate,
})(RegisterForm)