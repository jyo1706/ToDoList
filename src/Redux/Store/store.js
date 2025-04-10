import { combineReducers} from 'redux'
import {createStore} from 'redux'
import addReducer from '../Reducer/addReducer'
import { ADD_NUMBER } from '../Constant/addConstant'

const reducer = combineReducers(
  {
      add:addReducer
  }
)
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store

store.dispatch({type:ADD_NUMBER,payload:'Red'})
store.dispatch({type:ADD_NUMBER,payload:'green'})