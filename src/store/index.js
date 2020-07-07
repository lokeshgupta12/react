import { applyMiddleware, compose, createStore  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore(preloadedState, additionalReducers) {

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunkMiddleware,
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    )

    return store

}