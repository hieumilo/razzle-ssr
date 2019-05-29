import { actionTypes } from './../actions/actionTypes'

const initialState = {
  count: 10
}
// const count = (state = initialState, action) => {
export default function count(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.TICK:
    //   return Object.assign({}, state, {
    //     lastUpdate: action.ts,
    //     light: !!action.light
    //   })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
      
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: initialState.count
      })
    default:
      return state
  }
}

// export default count;
