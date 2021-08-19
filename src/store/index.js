import { createStore, applyMiddleware } from 'redux'
import  ThunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rooterReducer from './reducers/index'

const middlewares = [
  ThunkMiddleware,
  createLogger()
]

export default function configStore(){
  const store = createStore(rooterReducer,applyMiddleware(...middlewares))
  return store
}
