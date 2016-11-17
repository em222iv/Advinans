import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import tweets from './reducers/tweets';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    tweets,
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
);

const store = createStoreWithMiddleware(createStore)(reducers);

export default store;
