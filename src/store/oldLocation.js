const initialState = {
  currentLocation: null,
  previousLocation: null,
}

export const reducer = (state = initialState, action) => {
  if (action.type === "ROUTER/LOCATION_CHANGE") {
    return {
      currentLocation: action.payload,
      previousLocation: state.currentLocation,
    }
  }

  return state
}
