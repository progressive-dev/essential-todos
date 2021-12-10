export const LOAD_All = '[all] load';
export const LOAD_ALL_SUCCESS = '[all] load success';
export const LOAD_ITEM_SUCCESS = '[one item] load success';
export const LOAD_ALL_FAILURE = '[all] load failure';
export const LOAD_ITEM = '[one item] load';
export const SAVE_ITEM ='[one item] save';

export const TOGGLE_TAB= '[toggle tab of project] toggle ';


export const loadAll = collection => ({
    type: LOAD_All,
    payload:collection,
});

export const load = (items)=> ({
    type: LOAD_ITEM,
    payload: {id:items.id, items:items.table},
});

export const loadItemSuccess = item => ({
    type: LOAD_ITEM_SUCCESS,
    payload: item,
});


export const loadAllSuccess = items => ({
    type: LOAD_ALL_SUCCESS,
    payload: items,
});

export const loadAllFailure = error => ({
    type: LOAD_ALL_FAILURE,
    payload: error,
});

export const toggleTab = tabId => ({
    type: TOGGLE_TAB,
    payload: tabId,
});


export const save = data => ({
    type: SAVE_ITEM,
    payload: data,
});



