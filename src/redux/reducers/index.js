import countReducer from './counter'
import loggedReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    countReducer,
    loggedReducer,
})

export default allReducers