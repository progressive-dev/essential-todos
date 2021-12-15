export const LOAD_RIC         =  '[load ric]';
export const LOAD_RIC_SUCCESS =  '[load ric success]';

export const UPDATE_RIC_STATUS = '[update ric status]';
export const UPDATE_RIC_STATUS_SUCCESS = '[update ric status success]'

export const loadRic = projectid => ({
    type: LOAD_RIC,
    payload: projectid,
});

export const loadRicSuccess = ric=> ({
    type: LOAD_RIC_SUCCESS,
    payload: ric,
});

export const updateRicStatus =ric=>({
    type: UPDATE_RIC_STATUS,
    payload: ric,
});

export const updateRicStatusSuccess =ric=>({
    type: UPDATE_RIC_STATUS_SUCCESS,
    payload: ric,
});



