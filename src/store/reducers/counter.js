import { ADD, MINUS, CHANGE_COUNT } from '../consts/counter'

const initState = {
  num: 0
}

export default function counter (state = initState, action) {
  switch (action.type) {
  case ADD:
    return {
      ...state,
      num: state.num + 1
    }
  case MINUS:
    return {
      ...state,
      num: state.num - 1
    }
  case CHANGE_COUNT:
    return {
      ...state,
      num: action.data
    }
  default:
    return state
  }
}
