// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux';
// Reducers
import todo from './todoReducer';

export default combineReducers({
  todo
})
