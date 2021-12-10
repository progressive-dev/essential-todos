// import { loadCompaniesSuccess, LOAD_COMPANIES } from '../actions/collection';
// import companiesMiddleware from './companies';

// describe('companies middleware', () => {
//     describe('load companies flow', () => {
//         const [ loadCompaniesFlow ] = companiesMiddleware;
        
//         const dummyCompany = {
//             id: '1',
//             title: 'Dummy company',
//             completed: true,
//         };
//         const api = {
//             companies: {
//                 getAll: jest.fn().mockImplementationOnce(() => new Promise((resolve) => resolve([dummyCompany])))
//             }
//         }
//         const dispatch = jest.fn();
//         const next = jest.fn();
//         const action = {
//             type: LOAD_COMPANIES
//         }

        
//         it('passes action to next middleware', async () => {
//             await loadCompaniesFlow({ api })({ dispatch })(next)(action);

//             expect(next).toHaveBeenCalledWith(action);
//         });

//         it('calls api.companies.getAll at least once', async () => {
//             await loadCompaniesFlow({ api })({ dispatch })(next)(action);

//             expect(api.companies.getAll).toHaveBeenCalled();
//         });c

//         it('calls api.companies.getAll at least once', async () => {
//             await loadCompaniesFlow({ api })({ dispatch })(next)(action);

//             expect(dispatch).toHaveBeenCalledWith(loadCompaniesSuccess([dummyCompany]));
//         });
//     });
// });