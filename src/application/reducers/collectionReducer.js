import { LOAD_ALL_SUCCESS,LOAD_ITEM_SUCCESS, TOGGLE_TAB } from "../actions/collection";

const initialState = {
    all: [],
    selected:null,
    activeTab:"general",
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_SUCCESS:
            return {...state, all: action.payload, error: null, selected:null };
        case LOAD_ITEM_SUCCESS:
            return {...state, selected: action.payload, error: null,    activeTab:"general"};
        case TOGGLE_TAB:
            return {...state,activeTab:action.payload};
        default:
            return state;
    }
}

export default reducer;