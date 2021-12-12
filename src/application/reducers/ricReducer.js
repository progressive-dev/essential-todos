
import {LOAD_RIC_SUCCESS, UPDATE_RIC_STATUS_SUCCESS} from '../actions/ricActions'

const initialState = {
    ric:[],
    statusOptions:null,
    error: 'non error at all',
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
            newRic.find(s => s.codeId == action.payload.codeId).statusId =action.payload.statusId;
           // newRic[action.payload.codeId].statusId = action.payload.statusId;
            return {...state,
                ric:newRic,
            }
        default:
            return state;
    }
}

export default reducer;