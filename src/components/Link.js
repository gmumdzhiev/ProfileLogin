import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

class Link extends Component {
  render() {
    const {
      dispatch,
      to,
      children,
    } = this.props
    return (
      //<a href={to} onClick={(event) => {
      <button onClick={(event) => {
        event.preventDefault()
        dispatch(push(to))
      }}>
        {children}
      </button>
      //</a>
    )
  }
}
export default connect()(Link)


/*const Link = ({ dispatch, to, children }) => (
    event.preventDefault()
    dispatch(push(to))
  }}>
    {children}
  </button>
)

*/