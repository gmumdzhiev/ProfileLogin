import { message, send, open, close } from './websocket';

const initialState = {
  log: [],

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return { log: [...state.log, 'websocket connected'] }
    case send:
      return { log: [...state.log, "sent: " + JSON.stringify(action.payload)] }
    case message:
      return { log: [...state.log, "received: " + JSON.stringify(action.payload)] }
    case close:
      return { log: [...state.log, 'websocket disconnected'] }
    default:
      return state
  }
}