import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { login } from './store/user'
import TextField from './TextField'
//import ProfileForm from './ProfileForm'
import Link from './Link'

const foo = (values) => {
  console.log("submit:", values)
}

class LoginForm extends PureComponent {
  render() {
    const {
      handleSubmit,
      invalid,
    } = this.props

    console.log(this.props)

    return (
      <form onSubmit={handleSubmit(foo)}>
        <h1>LOGIN</h1>
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
          Login
        </button>

        <Link to={'/RegisterForm'}>Register</Link>
      </form >
    )
  }
}

const onSubmit = (values, dispatch) => {
  console.log(values)
  dispatch(login(values.username))
}

const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Please fill the empty field.'
  }
  return errors
}

export default reduxForm({
  form: 'login',
  onSubmit,
  validate,
})(LoginForm)