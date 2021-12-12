import * as uiActions from '../actions/ui';
import { loadRicSuccess, LOAD_RIC } from  '../actions/ricActions';


const ricFlow =  ({ api }) => ({ dispatch }) => next => async (action) =>  {
    next(action);

    const loadRic = async ()=>{
        try {
            dispatch(uiActions.setLoading(true))
            const ric = await api.project.getRic(action.payload);
            dispatch(loadRicSuccess(ric));
            dispatch(uiActions.setLoading(false));
        } catch (error) {
            //dispatch(loadAllFailure(error));
        }   
    }


    if(action.type== LOAD_RIC)
    {
        loadRic();
    }

}

export default [
    ricFlow
]