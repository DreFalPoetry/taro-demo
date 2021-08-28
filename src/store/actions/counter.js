import {ADD, MINUS} from '../consts/counter'

export const add = () => ({
  type: ADD
})

export const minus = () => ({
  type: MINUS
})

export function asyncAdd () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add())
    }, 1000);
  }
}
