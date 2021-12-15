export const LOAD_PERMIT                =  '[load permit]';
export const LOAD_PERMIT_SUCCESS        = '[permit loaded successfully]';
export const SPLIT_PERMIT_SUCCESS       = '[permit splitted successfully]';
export const SPLIT_PERMIT               = '[split Permit]';
export const SPLIT_AND_SAVE             = '[split and save]';
export const SPLIT_AND_SAVE_SUCCESS     = '[splited and saved successfylly]';
export const SAVE_PERMIT                = '[save permit]';

export const TOGGLE_TAB = '[change permit tab]';

export const load = id => ({
    type: LOAD_PERMIT,
    payload: id,
});


export const loadPermitSuccess = permit=> ({
    type: LOAD_PERMIT_SUCCESS,
    payload: permit,
});

export const split = payload => ({
    type: SPLIT_PERMIT,
    payload: payload,
});

export const splitPermitSuccess = permitItems=> ({
    type: SPLIT_PERMIT_SUCCESS,
    payload: permitItems,
});

export const splitAndSave = payload => ({
    type: SPLIT_AND_SAVE,
    payload: payload,
});

export const splitAndSavePermitSuccess = permitItems=> ({
    type: SPLIT_AND_SAVE_SUCCESS,
    payload: permitItems,
});

export const toggleTab = tabId => ({
    type: TOGGLE_TAB,
    payload: tabId,
});

