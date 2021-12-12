import * as uiActions from '../actions/ui';
import { loadPermitSuccess, splitPermitSuccess,splitAndSavePermitSuccess,
         LOAD_PERMIT,SPLIT_PERMIT, SAVE_PERMIT, SPLIT_AND_SAVE } from "../actions/permitActions";



const permitFlow =  ({ api }) => ({ dispatch }) => next => async (action) =>  {
    next(action);

const load = async ()=>{
    try {
        dispatch(uiActions.setLoading(true))
        const permit = await api.permits.get(action.payload);
        dispatch(loadPermitSuccess(permit));
        dispatch(uiActions.setLoading(false));
    } catch (error) {
        //dispatch(loadAllFailure(error));
    }   
}

const save = async ()=>{
    try {
        await api.permits.save(action.payload.data);
        //dispatch (Saved)
    } catch (error) {
       // dispatch(loadAllFailure(error));
    }  
}

const split = async ()=>{
    try {
        const permitItems= await api.permits.split(action.payload);
        dispatch(splitPermitSuccess(permitItems));

    } catch (error) {
       // dispatch(loadAllFailure(error));
    }  
}

const splitAndSave = async ()=>{
    try {
        const permitItems= await api.permits.splitAndSave(action.payload);
        dispatch(splitAndSavePermitSuccess(permitItems));

    } catch (error) {
       // dispatch(loadAllFailure(error));
    }  
}


switch(action.type) {
        case LOAD_PERMIT:
            load();
            break;
        case SPLIT_PERMIT:
            split();
            break;
        case SPLIT_AND_SAVE:
            splitAndSave();
            break;
        case SAVE_PERMIT:
            save();
            break;
        default:
            break;
    }
}

export default [
    permitFlow
]