import { loadAllFailure, loadAllSuccess,loadItemSuccess, LOAD_All, SAVE_ITEM, LOAD_ITEM, } from "../actions/collection";
import * as uiActions from '../actions/ui';

const loadFlow =  ({ api }) => ({ dispatch }) => next => async (action) =>  {
    next(action);

const loadAll = async ()=>{
    try {
        //log('blabla');
        dispatch(uiActions.setLoading(true));
        const items = await api[action.payload].getAll();
        dispatch(loadAllSuccess(items));
        dispatch(uiActions.setLoading(false));
    } catch (error) {
        dispatch(loadAllFailure(error));
    }
}

const load = async ()=>{
    try {
        dispatch(uiActions.setLoading(true));
        const item = await api[action.payload.items].get(action.payload.id);
        dispatch(loadItemSuccess(item));
        dispatch(uiActions.setLoading(false));
    } catch (error) {
        dispatch(loadAllFailure(error));
    }   
}

const save = async ()=>{
    try {
        await api[action.payload.items].save(action.payload.data);
        //dispatch(saveSuccess)
    } catch (error) {
        dispatch(loadAllFailure(error));
    }  
}


switch(action.type) {
        case LOAD_All:
            loadAll();
            break;
        case LOAD_ITEM:
            load();
            break;
        case SAVE_ITEM:
            save();
            break;
        default:
            break;
    }
}


/*const putProjectsFlow = () => ({ dispatch, getState }) => next => action => {
       next(action);
}*/



export default [
    loadFlow,   
]