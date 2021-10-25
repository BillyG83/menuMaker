import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer.js'

const middleWears = []
if (process.env.NODE_ENV === 'development') {
    middleWears.push(logger)
}

// const store = createStore(rootReducer, applyMiddleware(...middleWears))
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store