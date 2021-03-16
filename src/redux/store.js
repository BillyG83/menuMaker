import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer.js'

const middleWears = [logger]

const store = createStore(rootReducer, applyMiddleware(...middleWears))

export default store