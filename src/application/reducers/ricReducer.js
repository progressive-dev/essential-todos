
import {LOAD_RIC_SUCCESS, UPDATE_RIC_STATUS_SUCCESS} from '../actions/ricActions'

const initialState = {
    ric:[],
    statusOptions:null,
    error: null,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RIC_SUCCESS:
            return {...state,
                     ric: action.payload.ric,
                     statusOptions:action.payload.statusOptions,
                     //error: null,
            }
        case UPDATE_RIC_STATUS_SUCCESS:
            const newRic = [...state.ric]
            const item = newRic.find(s => s.codeId == action.payload.codeId);
            if(item.statusId !==action.payload.statusId)
            {    
                item.statusId=action.payload.statusId;
                return {...state, ric:newRic}
            }
            return state;
        default:
            return state;
    }
}

export default reducer;