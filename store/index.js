import {legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';
import addStudent from './addStudent/reducer'

const wholeState = combineReducers({
  addStudent
});

const store = createStore(
  wholeState,
);

export default store;