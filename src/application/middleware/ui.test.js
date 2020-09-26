import { PAGE_LOADED } from '../actions/ui';
import uiMiddleware from './ui';

describe('ui middleware', () => {
    describe('page loaded flow', () => {
        const [ pageLoadedFlow ] = uiMiddleware;

        const log = jest.fn();
        const dispatch = jest.fn();
        const next = jest.fn();
        const action = {
            type: PAGE_LOADED
        }
        
        it('passes action to next middleware', () => {
            pageLoadedFlow({ log })({ dispatch })(next)(action);
    
            expect(next).toHaveBeenCalledWith(action);
        });

        it('calls log with correct argument', () => {
            pageLoadedFlow({ log })({ dispatch })(next)(action);
    
            expect(log).toHaveBeenCalledWith('page loaded');
        });
    });
})
  