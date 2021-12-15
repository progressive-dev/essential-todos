
import { loadRicSuccess, updateRicStatusSuccess, LOAD_RIC, UPDATE_RIC_STATUS } from  '../actions/ricActions';
import * as uiActions from '../actions/ui';



const ricFlow =  ({ api }) => ({ dispatch }) => next => async (action) =>  {
    next(action);

    const loadRic = async ()=>{
        try {
            dispatch(uiActions.setLoading(true))
            const ric = await api.projects.getRic(action.payload);
            dispatch(loadRicSuccess(ric));
            dispatch(uiActions.setLoading(false));
        } catch (error) {
            //dispatch(loadAllFailure(error));
        }   
    }

    const updateStatus = async()=>{
        try{
            await api.ric.updateStatus(action.payload);
            dispatch(updateRicStatusSuccess(action.payload));
        }
        catch (error) {
            //dispatch(loadAllFailure(error));
        }
    }

    switch(action.type) {
        case LOAD_RIC:
            loadRic();
            break;
        case UPDATE_RIC_STATUS:
            updateStatus();
            break;
        default:
            break;
    }



}

export default [
    ricFlow
]