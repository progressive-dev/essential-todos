
import { createSelector } from 'reselect'

export const  getStatusOptions = state => state.ricReducer.statusOptions;
export const  getRic = state => state.ricReducer.ric;
export const  getError = state => state.ricReducer.error;

const selectItems = state => state.ricReducer.ric;
const selectItemId = (_,itemId) => itemId


export const selectItemById= createSelector(
    selectItems, selectItemId,
    (items, id) => {return items[id];}
  )