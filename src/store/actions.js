import {COUNTER} from './consts'

export const counterAction = {
  add: () => ({type: COUNTER.ADD}),
  minus: () => ({type: COUNTER.MINUS}),
  asyncChangeCount: (count) => (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: COUNTER.CHANGE_COUNT,
        data: count
      })
    }, 1000);
  }
}

