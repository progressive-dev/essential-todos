import { combineReducers } from 'redux';
import ui from './ui';
import collectionReducer from './collectionReducer';
import permitReducer from './permitReducer';
import ricReducer from './ricReducer';

export default combineReducers({
    ui,
    collectionReducer,
    permitReducer,
    ricReducer,
})