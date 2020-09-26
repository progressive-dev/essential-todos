import { combineReducers } from 'redux';
import ui from './ui';
import todos from './todos';

export default combineReducers({
    ui,
    todos,
})