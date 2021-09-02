import {COUNTER} from '../consts.js'

const initState = {
  num: 0
}

export default function counter(state = initState, action) {
  switch (action.type) {
  case COUNTER.ADD:
    return {
      ...state,
      num: state.num + 1
    }
  case COUNTER.MINUS:
    return {
      ...state,
      num: state.num - 1
    }
  case COUNTER.CHANGE_COUNT:
    return {
      ...state,
      num: action.data
    }
  default:
    return state
  }
}
