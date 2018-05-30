import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

let StateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="userName"
            component="input"
            type="text"
            placeholder="User Name"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
            />{' '}
            Female
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Bio</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}


StateForm = reduxForm({
  form: 'profile'
})(StateForm)

const mapStateToProps = (state) => ({
  initialValues: state.account,
})

StateForm = connect(mapStateToProps)(StateForm)

export default StateForm