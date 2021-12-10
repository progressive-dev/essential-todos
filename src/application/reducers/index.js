import { combineReducers } from 'redux';
import ui from './ui';
import collectionReducer from './collectionReducer';
import permitReducer from './permitReducer';

export default combineReducers({
    ui,
    collectionReducer,
    permitReducer
})