export const CREATE_ENVIRONMENT_MODULE      =  '[create environment module]';
export const CREATE_SECURITY_MODULE         =  '[create security module]';


export const createEnvironmentModule = payload => ({
    type: CREATE_ENVIRONMENT_MODULE,
    payload: payload,
});

export const createSecurityModule = payload => ({
    type: CREATE_SECURITY_MODULE,
    payload: payload,
});