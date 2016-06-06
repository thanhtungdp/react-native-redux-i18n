import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import rootReducers from '../reducers/index';

export default function configureStore(initialState) {
    return createStore(
        rootReducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            devTools()
        )
    )
}