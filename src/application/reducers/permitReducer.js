import { LOAD_PERMIT_SUCCESS, TOGGLE_TAB,SPLIT_PERMIT_SUCCESS, SPLIT_AND_SAVE_SUCCESS } from "../actions/permitActions";

const initialState = {
    permit:null,
    contextOptions:null,
    contexts:null,
    authorities:null,

    activeTab:"general",
    error: null,
    items:null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PERMIT_SUCCESS:
            return {...state,
                     permit: action.payload.permit,
                     contextOptions:action.payload.contextOptions,
                     contexts:action.payload.contexts,
                     authorities:action.payload.authorities,
                     items : action.payload.permitItems,

                     error: null, activeTab:"general"};
        case SPLIT_PERMIT_SUCCESS:
            return {...state,  error: null,items:action.payload.permitItems, activeTab:"detail"};
        case SPLIT_AND_SAVE_SUCCESS:
            return {...state,  error: null,items:action.payload, activeTab:"detail"};
        case TOGGLE_TAB:
                return {...state,activeTab:action.payload};
        default:
            return state;
    }
}

export default reducer;