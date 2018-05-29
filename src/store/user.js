const initialState = {
  isLoggedOn: false,
  username: ''
}

export const login = (username) => ({
  type: 'LOGIN',
  payload: username,
})
export const register = (username) => ({
  type: 'REGISTER',
  payload: username,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedOn: true,
        username: action.paylod,
      }
    default:
      return state
  }
}