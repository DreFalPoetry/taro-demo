import {ADD, MINUS, CHANGE_COUNT} from '../consts/counter'

export const add = () => ({type: ADD})

export const minus = () => ({type: MINUS})

export const asyncChangeCount = (count) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: CHANGE_COUNT,
      data: count
    })
  }, 1000);
}
