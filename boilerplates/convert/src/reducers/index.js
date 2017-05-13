import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import videosReducer from './videos_reducer';

const rootReducer = combineReducers({
  videos: videosReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
