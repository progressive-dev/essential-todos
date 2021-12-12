export const LOAD_Ric         =  '[load ric]';
export const LOAD_RIC_SUCCESS =  '[load ric success]';

export const loadRic = projectid => ({
    type: LOAD_Ric,
    payload: projectid,
});

export const loadRicSuccess = ric=> ({
    type: LOAD_RIC_SUCCESS,
    payload: ric,
});



