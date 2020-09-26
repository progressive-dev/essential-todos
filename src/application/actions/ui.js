export const PAGE_LOADED = '[ui] page loaded';
export const SET_LOADING_ON = '[ui] set loading on';
export const SET_LOADING_OFF = '[ui] set loading off';

export const pageLoaded = {
    type: PAGE_LOADED
};

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading,
});