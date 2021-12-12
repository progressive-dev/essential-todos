
import LOAD_RIC_SUCCESS from '../actions/ricActions'

const initialState = {
    ric:null,
    statusOptions:null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RIC_SUCCESS:
            return {...state,
                     ric: action.payload.ric,
                     StatusOptions:action.payload.statusOptions,
                     error: null, activeTab:"general"
                    }
        default:
            return state;
    }
}

export default reducer;